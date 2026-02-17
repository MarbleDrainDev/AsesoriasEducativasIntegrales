import './style.css'

const app = document.querySelector('#app')
const baseUrl = import.meta.env.BASE_URL

const markdownToHtml = (md) => {
  if (!md) return ''
  const lines = md.split('\n')
  let html = ''
  let inList = false
  let inQuote = false
  const replaceEmojis = (text) => (
    text
      .replace(/:warning:/g, '⚠️')
      .replace(/:memo:/g, '📝')
      .replace(/:bulb:/g, '💡')
  )
  for (const raw of lines) {
    const line = raw.trim()
    if (!line) {
      if (inList) { html += '</ul>'; inList = false }
      if (inQuote) { html += '</blockquote>'; inQuote = false }
      continue
    }
    if (line.startsWith('<') && line.endsWith('>')) {
      if (inList) { html += '</ul>'; inList = false }
      if (inQuote) { html += '</blockquote>'; inQuote = false }
      html += replaceEmojis(line)
      continue
    }
    if (line.startsWith('>')) {
      if (!inQuote) { html += '<blockquote>'; inQuote = true }
      const quoteLine = replaceEmojis(line.replace(/^>\s?/, ''))
      const withImages = quoteLine.replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" loading="lazy" />')
      const linked = withImages.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
      const styled = linked.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>')
      html += `<p>${styled}</p>`
      continue
    }
    if (line.startsWith('### ')) { html += `<h3>${line.slice(4)}</h3>`; continue }
    if (line.startsWith('## ')) { html += `<h2>${line.slice(3)}</h2>`; continue }
    if (line.startsWith('# ')) { html += `<h1>${line.slice(2)}</h1>`; continue }
    if (line.startsWith('- ')) {
      if (!inList) { inList = true; html += '<ul>' }
      html += `<li>${line.slice(2)}</li>`
      continue
    }
    const withImages = replaceEmojis(line).replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" loading="lazy" />')
    const linked = withImages.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
    const styled = linked.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>')
    html += `<p>${styled}</p>`
  }
  if (inList) html += '</ul>'
  return html
}

const mdModules = import.meta.glob('./sections/*.md', { query: '?raw', import: 'default' })

const getMdIdsFromModules = () => (
  Object.keys(mdModules)
    .map((path) => path.split('/').pop())
    .map((name) => name.replace(/\.md$/i, ''))
    .filter(Boolean)
)

const getMdContent = async (id) => {
  const path = `./sections/${id}.md`
  const loader = mdModules[path]
  if (!loader) return null
  const txt = await loader()
  return txt?.trim() ? txt : null
}

const loadMarkdownPlaceholders = async (root) => {
  const placeholders = root.querySelectorAll('[data-md-src]')
  for (const el of placeholders) {
    const src = el.getAttribute('data-md-src')
    if (!src) continue
    const md = await getMdContent(src)
    if (!md) continue
    el.innerHTML = markdownToHtml(md)
  }
}

const formatMdTitle = (id) => {
  const cleaned = id.replace(/[-_]+/g, ' ').trim()
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1)
}

const createAutoMdSection = (id) => {
  const section = document.createElement('section')
  section.className = 'section'
  section.id = id
  section.dataset.view = id
  section.innerHTML = `
    <div class="section-header">
      <h2>${formatMdTitle(id)}</h2>
    </div>
    <div class="editable-md" data-md-src="${id}"></div>
  `
  return section
}

const renderApp = async () => {
  document.title = 'Asesorías Educativas Integrales'
  app.innerHTML = `
    <div class="page">
      <header class="header">
        <div class="drawer-wrapper">
          <button class="drawer-trigger" type="button" aria-label="Abrir menú">
            <span class="drawer-icon"></span>
          </button>
          <div class="drawer">
            <p class="drawer-title">Menú rápido</p>
            <div class="side-list">
              <button class="side-link" type="button" data-target="inicio">Resumen</button>
              <button class="side-link" type="button" data-target="nosotros">Equipo</button>
              <button class="side-link" type="button" data-target="servicios">Planes</button>
              <button class="side-link" type="button" data-target="proyectos">Casos</button>
              <button class="side-link" type="button" data-target="contacto">Contacto rápido</button>
              <button class="side-link" type="button" data-target="contabilidad">Contabilidad</button>
              <button class="side-link" type="button" data-target="emprendimiento">Emprendimiento</button>
              <button class="side-link" type="button" data-target="ejemplos">Ejemplos Markdown</button>
            </div>
          </div>
        </div>
        <div class="brand">
          <img src="${baseUrl}assets/vite.svg" alt="Logo" class="brand-mark">
          <div>
            <p class="brand-title">Ejemplo de Página Web</p>
            <p class="brand-tagline">Plantilla estática con contenido editable y arquitectura decoupled.</p>
          </div>
        </div>
        <button class="menu-toggle" aria-controls="site-menu" aria-expanded="false">
          Menú
          <span class="menu-icon"></span>
        </button>
        <nav id="site-menu" class="nav">
          <a href="#inicio" data-view="inicio">Inicio</a>
          <a href="#nosotros" data-view="nosotros">Nosotros</a>
          <a href="#servicios" data-view="servicios">Servicios</a>
          <a href="#proyectos" data-view="proyectos">Proyectos</a>
          <a href="#contacto" data-view="contacto">Contacto</a>
        </nav>
      </header>
      <main class="main" id="main-content">
        <section id="inicio" class="section section-inicio-fixed">
          <div class="hero">
            <div class="hero-content">
              <div class="hero-badge">🎓 Asesoría Educativa Integral</div>
              <h1>Impulsa el aprendizaje con recursos claros y prácticos</h1>
              <p class="hero-description">
                Un espacio pensado para acompañar a estudiantes con guías, cronogramas y materiales
                que facilitan el trabajo académico en Contabilidad y Emprendimiento.
              </p>
              <div class="hero-actions">
                <a class="primary-button" href="#servicios">Explorar servicios</a>
                <a class="ghost-button" href="#contacto">Hablar con asesor</a>
              </div>
              <div class="hero-features">
                <div class="feature">
                  <div class="feature-icon">📚</div>
                  <div class="feature-text">
                    <h4>+150 Recursos</h4>
                    <p>Materiales descargables</p>
                  </div>
                </div>
                <div class="feature">
                  <div class="feature-icon">⏰</div>
                  <div class="feature-text">
                    <h4>Acceso 24/7</h4>
                    <p>Disponible siempre</p>
                  </div>
                </div>
                <div class="feature">
                  <div class="feature-icon">✅</div>
                  <div class="feature-text">
                    <h4>100% Actualizado</h4>
                    <p>Contenido fresco</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="hero-aside">
              <div class="hero-card-main">
                <div class="card-header">
                  <h3>¿Qué encontrarás?</h3>
                </div>
                <ul class="card-list">
                  <li><span class="checkmark">✓</span> Guías y materiales descargables</li>
                  <li><span class="checkmark">✓</span> Normas APA y buenas prácticas</li>
                  <li><span class="checkmark">✓</span> Test vocacional interactivo</li>
                  <li><span class="checkmark">✓</span> Cronograma de actividades</li>
                  <li><span class="checkmark">✓</span> Recomendaciones personalizadas</li>
                </ul>
              </div>
              <div class="hero-cta-box">
                <p class="cta-text">¿Listo para comenzar?</p>
                <a href="#contacto" class="cta-link">Agenda una llamada →</a>
              </div>
            </div>
          </div>
        </section>

        <section id="contabilidad" class="section">
          <div class="section-header">
            <h2>Contabilidad</h2>
            <p>Fundamentos, registros, estados financieros y análisis básico.</p>
          </div>
          <div class="editable-md" data-md-src="Contabilidad"></div>
        </section>

        <section id="emprendimiento" class="section">
          <div class="section-header">
            <h2>Emprendimiento</h2>
            <p>Validación de ideas, propuesta de valor y modelo de negocio.</p>
          </div>
          <div class="editable-md" data-md-src="Emprendimiento"></div>
        </section>

        <section id="ejemplos" class="section">
          <div class="section-header">
            <h2>Ejemplos de Markdown</h2>
            <p>Aprende cómo usar el sistema de Markdown con ejemplos interactivos.</p>
          </div>
          <div class="examples-grid">
            <div class="example-item">
              <h4>Títulos</h4>
              <div class="example-container">
                <div class="example-code">
                  <pre><code># Título 1
## Título 2
### Título 3</code></pre>
                  <button class="copy-btn" data-code="# Título 1&#10;## Título 2&#10;### Título 3">📋 Copiar</button>
                </div>
                <div class="example-preview editable-md">
                  <h1>Título 1</h1>
                  <h2>Título 2</h2>
                  <h3>Título 3</h3>
                </div>
              </div>
            </div>

            <div class="example-item">
              <h4>Estilos de texto</h4>
              <div class="example-container">
                <div class="example-code">
                  <pre><code>**Texto en negrita**
*Texto en cursiva*
***Texto en negrita y cursiva***</code></pre>
                  <button class="copy-btn" data-code="**Texto en negrita**&#10;*Texto en cursiva*&#10;***Texto en negrita y cursiva***">📋 Copiar</button>
                </div>
                <div class="example-preview editable-md">
                  <p><strong>Texto en negrita</strong></p>
                  <p><em>Texto en cursiva</em></p>
                  <p><strong><em>Texto en negrita y cursiva</em></strong></p>
                </div>
              </div>
            </div>

            <div class="example-item">
              <h4>Listas</h4>
              <div class="example-container">
                <div class="example-code">
                  <pre><code>- Primer elemento
- Segundo elemento
- Tercer elemento</code></pre>
                  <button class="copy-btn" data-code="- Primer elemento&#10;- Segundo elemento&#10;- Tercer elemento">📋 Copiar</button>
                </div>
                <div class="example-preview editable-md">
                  <ul>
                    <li>Primer elemento</li>
                    <li>Segundo elemento</li>
                    <li>Tercer elemento</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="example-item">
              <h4>Enlaces</h4>
              <div class="example-container">
                <div class="example-code">
                  <pre><code>[Texto del enlace](https://ejemplo.com)
[Google](https://google.com)</code></pre>
                  <button class="copy-btn" data-code="[Texto del enlace](https://ejemplo.com)&#10;[Google](https://google.com)">📋 Copiar</button>
                </div>
                <div class="example-preview editable-md">
                  <p><a href="https://ejemplo.com">Texto del enlace</a></p>
                  <p><a href="https://google.com">Google</a></p>
                </div>
              </div>
            </div>

            <div class="example-item">
              <h4>Imágenes</h4>
              <div class="example-container">
                <div class="example-code">
                  <pre><code>![Alt texto](${baseUrl}assets/vite.svg)
![Logo](./image.png width=200)</code></pre>
                  <button class="copy-btn" data-code="![Alt texto](${baseUrl}assets/vite.svg)&#10;![Logo](./image.png width=200)">📋 Copiar</button>
                </div>
                <div class="example-preview editable-md">
                  <p><img src="${baseUrl}assets/vite.svg" alt="Alt texto" loading="lazy" style="max-width: 150px;"/></p>
                </div>
              </div>
            </div>

            <div class="example-item">
              <h4>Citas y avisos</h4>
              <div class="example-container">
                <div class="example-code">
                  <pre><code>> ⚠️ Esto es una advertencia
> 📝 Esto es una nota
> 💡 Esto es una idea</code></pre>
                  <button class="copy-btn" data-code="> ⚠️ Esto es una advertencia&#10;> 📝 Esto es una nota&#10;> 💡 Esto es una idea">📋 Copiar</button>
                </div>
                <div class="example-preview editable-md">
                  <blockquote>
                    <p>⚠️ Esto es una advertencia</p>
                  </blockquote>
                  <blockquote>
                    <p>📝 Esto es una nota</p>
                  </blockquote>
                  <blockquote>
                    <p>💡 Esto es una idea</p>
                  </blockquote>
                </div>
              </div>
            </div>

            <div class="example-item">
              <h4>Emoji shortcodes</h4>
              <div class="example-container">
                <div class="example-code">
                  <pre><code>:warning: Advertencia
:memo: Nota importante
:bulb: Idea brillante</code></pre>
                  <button class="copy-btn" data-code=":warning: Advertencia&#10;:memo: Nota importante&#10;:bulb: Idea brillante">📋 Copiar</button>
                </div>
                <div class="example-preview editable-md">
                  <p>⚠️ Advertencia</p>
                  <p>📝 Nota importante</p>
                  <p>💡 Idea brillante</p>
                </div>
              </div>
            </div>

            <div class="example-item">
              <h4>Columnas de contenido</h4>
              <div class="example-container">
                <div class="example-code">
                  <pre><code>&lt;div class="md-columns"&gt;
  &lt;div&gt;Columna 1&lt;/div&gt;
  &lt;div&gt;Columna 2&lt;/div&gt;
&lt;/div&gt;</code></pre>
                  <button class="copy-btn" data-code="&lt;div class=&quot;md-columns&quot;&gt;&#10;  &lt;div&gt;Contenido columna 1&lt;/div&gt;&#10;  &lt;div&gt;Contenido columna 2&lt;/div&gt;&#10;&lt;/div&gt;">📋 Copiar</button>
                </div>
                <div class="example-preview editable-md">
                  <div class="md-columns">
                    <div><p>Contenido columna 1</p></div>
                    <div><p>Contenido columna 2</p></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="example-item">
              <h4>Video YouTube</h4>
              <div class="example-container">
                <div class="example-code">
                  <pre><code>&lt;iframe src="https://www.youtube.com/embed/jNQXAC9IVRw"
width="100%" height="300"&gt;&lt;/iframe&gt;</code></pre>
                  <button class="copy-btn" data-code="&lt;iframe src=&quot;https://www.youtube.com/embed/jNQXAC9IVRw&quot; width=&quot;100%&quot; height=&quot;300&quot;&gt;&lt;/iframe&gt;">📋 Copiar</button>
                </div>
                <div class="example-preview editable-md">
                  <iframe width="100%" height="300" src="https://www.youtube.com/embed/jNQXAC9IVRw" style="border: none; border-radius: 8px;" allowfullscreen></iframe>
                </div>
              </div>
            </div>

            <div class="example-item">
              <h4>Video local</h4>
              <div class="example-container">
                <div class="example-code">
                  <pre><code>&lt;video width="100%" height="300" 
controls&gt;
  &lt;source src="video.mp4"&gt;
&lt;/video&gt;</code></pre>
                  <button class="copy-btn" data-code="&lt;video width=&quot;100%&quot; height=&quot;300&quot; controls&gt;&#10;  &lt;source src=&quot;video.mp4&quot;&gt;&#10;&lt;/video&gt;">📋 Copiar</button>
                </div>
                <div class="example-preview editable-md">
                  <video width="100%" height="300" controls style="border-radius: 8px; background: #000;">
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                    Tu navegador no soporta video HTML5
                  </video>
                </div>
              </div>
            </div>

            <div class="example-item">
              <h4>Descargar PDF</h4>
              <div class="example-container">
                <div class="example-code">
                  <pre><code>&lt;a href="${baseUrl}archivos/documento.pdf" 
download&gt;
  📥 Descargar PDF
&lt;/a&gt;</code></pre>
                  <button class="copy-btn" data-code="&lt;a href=&quot;${baseUrl}archivos/documento.pdf&quot; download&gt;&#10;  📥 Descargar PDF&#10;&lt;/a&gt;">📋 Copiar</button>
                </div>
                <div class="example-preview editable-md">
                  <a href="${baseUrl}archivos/Formamos-lideres-transformacion-digital-IA.pdf" download style="display: inline-block; padding: 0.75rem 1.5rem; background: rgba(59, 130, 246, 0.2); border: 1px solid rgba(59, 130, 246, 0.4); border-radius: 8px; color: #60a5fa; text-decoration: none; cursor: pointer;">📥 Descargar PDF</a>
                </div>
              </div>
            </div>

            <div class="example-item">
              <h4>PDF incrustado (iframe)</h4>
              <div class="example-container">
                <div class="example-code">
                  <pre><code>&lt;iframe src="${baseUrl}archivos/documento.pdf"
width="100%" height="500"&gt;&lt;/iframe&gt;</code></pre>
                  <button class="copy-btn" data-code="&lt;iframe src=&quot;${baseUrl}archivos/documento.pdf&quot; width=&quot;100%&quot; height=&quot;500&quot;&gt;&lt;/iframe&gt;">📋 Copiar</button>
                </div>
                <div class="example-preview editable-md">
                  <iframe src="${baseUrl}archivos/Formamos-lideres-transformacion-digital-IA.pdf" width="100%" height="500" style="border: none; border-radius: 8px;"></iframe>
                </div>
              </div>
            </div>

            <div class="example-item">
              <h4>PDF con embed</h4>
              <div class="example-container">
                <div class="example-code">
                  <pre><code>&lt;embed src="${baseUrl}archivos/documento.pdf"
width="100%" height="500" type="application/pdf"/&gt;</code></pre>
                  <button class="copy-btn" data-code="&lt;embed src=&quot;${baseUrl}archivos/documento.pdf&quot; width=&quot;100%&quot; height=&quot;500&quot; type=&quot;application/pdf&quot;/&gt;">📋 Copiar</button>
                </div>
                <div class="example-preview editable-md" style="display: flex; align-items: center; justify-content: center;">
                  <a href="${baseUrl}archivos/Formamos-lideres-transformacion-digital-IA.pdf" style="display: inline-block; padding: 0.75rem 1.5rem; background: rgba(59, 130, 246, 0.2); border: 1px solid rgba(59, 130, 246, 0.4); border-radius: 8px; color: #60a5fa; text-decoration: none; cursor: pointer;">📄 Ver PDF</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="nosotros" class="section profile-section">
          <div class="profile-grid">
            <aside class="profile-aside">
              <div class="avatar"><img src="${baseUrl}assets/vite.svg" alt="Foto de perfil" loading="lazy"/></div>
              <h3 class="profile-name">Perfil docente</h3>
              <p class="profile-role">Especialista en Contabilidad y Emprendimiento</p>
              <div class="profile-contacts">
                <div class="contact-item"><strong>Correo:</strong> docente@tudominio.com</div>
                <div class="contact-item"><strong>Teléfono:</strong> +34 600 000 000</div>
              </div>
              <a class="primary-button" href="#contacto">Contactar</a>
            </aside>
            <div class="profile-main">
              <p class="profile-summary">
                Docente con experiencia en asesoría académica, desarrollo de materiales didácticos y acompañamiento a estudiantes en proyectos formativos.
              </p>
              <div class="skills">
                <span class="skill-chip">Docencia</span>
                <span class="skill-chip">Asesoría académica</span>
                <span class="skill-chip">Contabilidad</span>
                <span class="skill-chip">Emprendimiento</span>
                <span class="skill-chip">Investigación</span>
              </div>
              <div class="experience">
                <h4>Experiencia laboral</h4>
                <ol class="timeline">
                  <li class="exp-item">
                    <div class="exp-head">
                      <div class="exp-title"><strong>Docente principal</strong> — <span class="exp-company">Institución Educativa</span></div>
                      <div class="exp-period">2020 - Actualidad</div>
                    </div>
                    <div class="exp-details">Diseño de planes de estudio, tutorías y evaluación por competencias.</div>
                  </li>
                  <li class="exp-item">
                    <div class="exp-head">
                      <div class="exp-title"><strong>Asesor académico</strong> — <span class="exp-company">Centro de formación</span></div>
                      <div class="exp-period">2017 - 2020</div>
                    </div>
                    <div class="exp-details">Acompañamiento en proyectos de emprendimiento y elaboración de informes.</div>
                  </li>
                </ol>
              </div>
              <div class="education">
                <h4>Formación</h4>
                <ul>
                  <li>Maestría en Educación — Universidad Ejemplo (2019)</li>
                  <li>Licenciatura en Contabilidad — Universidad Ejemplo (2015)</li>
                </ul>
              </div>
              <div class="certifications">
                <h4>Certificaciones</h4>
                <ul>
                  <li>Certificación en Innovación Educativa — 2022</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" class="section">
          <div class="section-header">
            <h2>Servicios principales</h2>
            <p>Enumera los servicios que ofreces. Cada tarjeta es editable desde el archivo de contenido.</p>
          </div>
          <div class="card-grid">
            <article class="card"><h3>Estrategia</h3><p>Definimos objetivos, cronograma y métricas.</p></article>
            <article class="card"><h3>Diseño</h3><p>Creamos propuestas visuales modernas y claras.</p></article>
            <article class="card"><h3>Soporte</h3><p>Te acompañamos después del lanzamiento.</p></article>
          </div>
          <div class="editable-md" data-md-src="servicios-extra"></div>
        </section>

        <section id="proyectos" class="section">
          <div class="section-header">
            <h2>Casos y proyectos</h2>
            <p>Muestra resultados o referencias. Puedes cambiar títulos y descripciones sin tocar el código.</p>
          </div>
          <div class="pill-list">
            <article class="pill"><h3>Proyecto Alfa</h3><p>Aumento de conversiones en 30%.</p></article>
            <article class="pill"><h3>Proyecto Beta</h3><p>Rediseño completo en 4 semanas.</p></article>
            <article class="pill"><h3>Proyecto Gamma</h3><p>Lanzamiento rápido con métricas claras.</p></article>
          </div>
          <div class="editable-md" data-md-src="Test"></div>
        </section>

        <section id="contacto" class="section">
          <div class="section-header">
            <h2>Hablemos de tu idea</h2>
            <p>Incluye aquí la información básica de contacto y un llamado a la acción.</p>
          </div>
          <div class="contact-list">
            <div><strong>Correo:</strong> hola@tudominio.com</div>
            <div><strong>Teléfono:</strong> +34 600 000 000</div>
            <div><strong>Ubicación:</strong> Madrid, ES</div>
          </div>
          <a class="primary-button" href="mailto:hola@tudominio.com">Escribir correo</a>
        </section>

      </main>
      <footer class="footer">
        <p>© 2026 Asesorias Educativas Integrales. Todos los derechos reservados.</p>
      </footer>
    </div>
  `

  const nav = app.querySelector('#site-menu')
  const menuToggle = app.querySelector('.menu-toggle')
  const main = app.querySelector('#main-content')
  const sideList = app.querySelector('.side-list')
  const addSideLink = (id, label) => {
    if (sideList.querySelector(`[data-target="${id}"]`)) return
    const btn = document.createElement('button')
    btn.className = 'side-link'
    btn.type = 'button'
    btn.dataset.target = id
    btn.textContent = label
    sideList.appendChild(btn)
  }

  const setSideActive = (viewId) => {
    sideList.querySelectorAll('.side-link').forEach((link) => {
      link.classList.toggle('is-active', link.dataset.target === viewId)
    })
  }

  const setActiveView = (viewId) => {
    const sections = [...main.querySelectorAll('.section')]
    let found = false
    sections.forEach((section) => {
      const isMatch = section.id === viewId
      if (isMatch) found = true
      section.classList.toggle('is-active', isMatch)
    })
    if (!found && sections.length > 0) {
      sections[0].classList.add('is-active')
      viewId = sections[0].id
    }
    nav.querySelectorAll('a').forEach((link) => {
      link.classList.toggle('is-active', link.dataset.view === viewId)
    })
    setSideActive(viewId)
    try {
      localStorage.setItem('lastView', viewId)
    } catch (e) {
      // ignore storage errors
    }
  }

  const storedView = (() => {
    try { return localStorage.getItem('lastView') || '' } catch (e) { return '' }
  })()
  const initialView = window.location.hash?.replace('#', '') || storedView || 'inicio'
  if (initialView) {
    setActiveView(initialView)
  }

  nav.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
      event.preventDefault()
      const targetId = event.target.dataset.view
      if (targetId) {
        window.location.hash = targetId
        setActiveView(targetId)
        nav.classList.remove('open')
        menuToggle.setAttribute('aria-expanded', 'false')
      }
    }
  })

  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open')
    menuToggle.setAttribute('aria-expanded', String(isOpen))
  })

  sideList.addEventListener('click', (event) => {
    if (event.target.matches('.side-link')) {
      const targetId = event.target.dataset.target
      if (targetId) {
        window.location.hash = targetId
        setActiveView(targetId)
      }
    }
  })

  // Copiar código al portapapeles
  app.addEventListener('click', (event) => {
    if (event.target.matches('.copy-btn')) {
      const code = event.target.getAttribute('data-code')
      if (code) {
        const decodedCode = code.replace(/&#10;/g, '\n')
        navigator.clipboard.writeText(decodedCode).then(() => {
          const originalText = event.target.textContent
          event.target.textContent = '✓ Copiado'
          setTimeout(() => {
            event.target.textContent = originalText
          }, 2000)
        })
      }
    }
  })

  window.addEventListener('hashchange', () => {
    const viewId = window.location.hash?.replace('#', '')
    if (viewId) {
      setActiveView(viewId)
    }
  })

  const usedIds = new Set(
    [...app.querySelectorAll('[data-md-src]')]
      .map((el) => el.getAttribute('data-md-src'))
      .filter(Boolean)
  )
  const mdIds = getMdIdsFromModules()
  const autoIds = mdIds.filter((id) => !usedIds.has(id))

  if (autoIds.length) {
    for (const id of autoIds) {
      const section = createAutoMdSection(id)
      main.appendChild(section)
      addSideLink(id, formatMdTitle(id))
    }
  }

  await loadMarkdownPlaceholders(app)
}

void renderApp()
