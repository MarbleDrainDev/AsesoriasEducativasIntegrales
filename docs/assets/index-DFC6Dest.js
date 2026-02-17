(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`modulepreload`,t=function(e){return`/AsesoriasEducativasIntegrales/`+e},n={};const r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}o=l(i.map(i=>{if(i=t(i,a),i in n)return;n[i]=!0;let o=i.endsWith(`.css`),s=o?`[rel="stylesheet"]`:``;if(a)for(let e=r.length-1;e>=0;e--){let t=r[e];if(t.href===i&&(!o||t.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;let l=document.createElement(`link`);if(l.rel=o?`stylesheet`:e,o||(l.as=`script`),l.crossOrigin=``,l.href=i,c&&l.setAttribute(`nonce`,c),document.head.appendChild(l),o)return new Promise((e,t)=>{l.addEventListener(`load`,e),l.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${i}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[])t.status===`rejected`&&s(t.reason);return r().catch(s)})};var i=document.querySelector(`#app`),a=e=>{if(!e)return``;let t=e.split(`
`),n=``,r=!1,i=!1,a=e=>e.replace(/:warning:/g,`⚠️`).replace(/:memo:/g,`📝`).replace(/:bulb:/g,`💡`);for(let e of t){let t=e.trim();if(!t){r&&=(n+=`</ul>`,!1),i&&=(n+=`</blockquote>`,!1);continue}if(t.startsWith(`<`)&&t.endsWith(`>`)){r&&=(n+=`</ul>`,!1),i&&=(n+=`</blockquote>`,!1),n+=a(t);continue}if(t.startsWith(`>`)){i||=(n+=`<blockquote>`,!0);let e=a(t.replace(/^>\s?/,``)).replace(/!\[(.*?)\]\((.*?)\)/g,`<img src="$2" alt="$1" loading="lazy" />`).replace(/\[(.*?)\]\((.*?)\)/g,`<a href="$2">$1</a>`).replace(/\*\*(.*?)\*\*/g,`<strong>$1</strong>`).replace(/\*(.*?)\*/g,`<em>$1</em>`);n+=`<p>${e}</p>`;continue}if(t.startsWith(`### `)){n+=`<h3>${t.slice(4)}</h3>`;continue}if(t.startsWith(`## `)){n+=`<h2>${t.slice(3)}</h2>`;continue}if(t.startsWith(`# `)){n+=`<h1>${t.slice(2)}</h1>`;continue}if(t.startsWith(`- `)){r||(r=!0,n+=`<ul>`),n+=`<li>${t.slice(2)}</li>`;continue}let o=a(t).replace(/!\[(.*?)\]\((.*?)\)/g,`<img src="$2" alt="$1" loading="lazy" />`).replace(/\[(.*?)\]\((.*?)\)/g,`<a href="$2">$1</a>`).replace(/\*\*(.*?)\*\*/g,`<strong>$1</strong>`).replace(/\*(.*?)\*/g,`<em>$1</em>`);n+=`<p>${o}</p>`}return r&&(n+=`</ul>`),n},o=Object.assign({"./sections/ConceptosMD.md":()=>r(()=>import(`./ConceptosMD-CAjuX91L.js`),[]).then(e=>e.default),"./sections/Contabilidad.md":()=>r(()=>import(`./Contabilidad-CVKISGyl.js`),[]).then(e=>e.default),"./sections/Test.md":()=>r(()=>import(`./Test-BkNDArV2.js`),[]).then(e=>e.default),"./sections/ccccccccc.md":()=>r(()=>import(`./ccccccccc-CsgV35oZ.js`),[]).then(e=>e.default),"./sections/emprendimiento.md":()=>r(()=>import(`./emprendimiento-BChzMrZJ.js`),[]).then(e=>e.default),"./sections/servicios-extra.md":()=>r(()=>import(`./servicios-extra-B0UiajKW.js`),[]).then(e=>e.default)}),s=()=>Object.keys(o).map(e=>e.split(`/`).pop()).map(e=>e.replace(/\.md$/i,``)).filter(Boolean),c=async e=>{let t=o[`./sections/${e}.md`];if(!t)return null;let n=await t();return n?.trim()?n:null},l=async e=>{let t=e.querySelectorAll(`[data-md-src]`);for(let e of t){let t=e.getAttribute(`data-md-src`);if(!t)continue;let n=await c(t);n&&(e.innerHTML=a(n))}},u=e=>{let t=e.replace(/[-_]+/g,` `).trim();return t.charAt(0).toUpperCase()+t.slice(1)},d=e=>{let t=document.createElement(`section`);return t.className=`section`,t.id=e,t.dataset.view=e,t.innerHTML=`
    <div class="section-header">
      <h2>${u(e)}</h2>
    </div>
    <div class="editable-md" data-md-src="${e}"></div>
  `,t};(async()=>{document.title=`Ejemplo de Página Web`,i.innerHTML=`
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
          <img src="/assets/vite.svg" alt="Logo" class="brand-mark">
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
                  <pre><code>![Alt texto](/assets/vite.svg)
![Logo](./image.png width=200)</code></pre>
                  <button class="copy-btn" data-code="![Alt texto](/assets/vite.svg)&#10;![Logo](./image.png width=200)">📋 Copiar</button>
                </div>
                <div class="example-preview editable-md">
                  <p><img src="/assets/vite.svg" alt="Alt texto" loading="lazy" style="max-width: 150px;"/></p>
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
                  <pre><code>&lt;a href="/archivos/documento.pdf" 
download&gt;
  📥 Descargar PDF
&lt;/a&gt;</code></pre>
                  <button class="copy-btn" data-code="&lt;a href=&quot;/archivos/documento.pdf&quot; download&gt;&#10;  📥 Descargar PDF&#10;&lt;/a&gt;">📋 Copiar</button>
                </div>
                <div class="example-preview editable-md">
                  <a href="/archivos/Formamos-lideres-transformacion-digital-IA.pdf" download style="display: inline-block; padding: 0.75rem 1.5rem; background: rgba(59, 130, 246, 0.2); border: 1px solid rgba(59, 130, 246, 0.4); border-radius: 8px; color: #60a5fa; text-decoration: none; cursor: pointer;">📥 Descargar PDF</a>
                </div>
              </div>
            </div>

            <div class="example-item">
              <h4>PDF incrustado (iframe)</h4>
              <div class="example-container">
                <div class="example-code">
                  <pre><code>&lt;iframe src="/archivos/documento.pdf"
width="100%" height="500"&gt;&lt;/iframe&gt;</code></pre>
                  <button class="copy-btn" data-code="&lt;iframe src=&quot;/archivos/documento.pdf&quot; width=&quot;100%&quot; height=&quot;500&quot;&gt;&lt;/iframe&gt;">📋 Copiar</button>
                </div>
                <div class="example-preview editable-md">
                  <iframe src="/archivos/Formamos-lideres-transformacion-digital-IA.pdf" width="100%" height="500" style="border: none; border-radius: 8px;"></iframe>
                </div>
              </div>
            </div>

            <div class="example-item">
              <h4>PDF con embed</h4>
              <div class="example-container">
                <div class="example-code">
                  <pre><code>&lt;embed src="/archivos/documento.pdf"
width="100%" height="500" type="application/pdf"/&gt;</code></pre>
                  <button class="copy-btn" data-code="&lt;embed src=&quot;/archivos/documento.pdf&quot; width=&quot;100%&quot; height=&quot;500&quot; type=&quot;application/pdf&quot;/&gt;">📋 Copiar</button>
                </div>
                <div class="example-preview editable-md" style="display: flex; align-items: center; justify-content: center;">
                  <a href="/archivos/Formamos-lideres-transformacion-digital-IA.pdf" style="display: inline-block; padding: 0.75rem 1.5rem; background: rgba(59, 130, 246, 0.2); border: 1px solid rgba(59, 130, 246, 0.4); border-radius: 8px; color: #60a5fa; text-decoration: none; cursor: pointer;">📄 Ver PDF</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="nosotros" class="section profile-section">
          <div class="profile-grid">
            <aside class="profile-aside">
              <div class="avatar"><img src="/assets/vite.svg" alt="Foto de perfil" loading="lazy"/></div>
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
        <p>© 2026 EjemploWb. Todos los derechos reservados.</p>
      </footer>
    </div>
  `;let e=i.querySelector(`#site-menu`),t=i.querySelector(`.menu-toggle`),n=i.querySelector(`#main-content`),r=i.querySelector(`.side-list`),a=(e,t)=>{if(r.querySelector(`[data-target="${e}"]`))return;let n=document.createElement(`button`);n.className=`side-link`,n.type=`button`,n.dataset.target=e,n.textContent=t,r.appendChild(n)},o=e=>{r.querySelectorAll(`.side-link`).forEach(t=>{t.classList.toggle(`is-active`,t.dataset.target===e)})},c=t=>{let r=[...n.querySelectorAll(`.section`)],i=!1;r.forEach(e=>{let n=e.id===t;n&&(i=!0),e.classList.toggle(`is-active`,n)}),!i&&r.length>0&&(r[0].classList.add(`is-active`),t=r[0].id),e.querySelectorAll(`a`).forEach(e=>{e.classList.toggle(`is-active`,e.dataset.view===t)}),o(t);try{localStorage.setItem(`lastView`,t)}catch{}},f=(()=>{try{return localStorage.getItem(`lastView`)||``}catch{return``}})(),p=window.location.hash?.replace(`#`,``)||f||`inicio`;p&&c(p),e.addEventListener(`click`,n=>{if(n.target.matches(`a`)){n.preventDefault();let r=n.target.dataset.view;r&&(window.location.hash=r,c(r),e.classList.remove(`open`),t.setAttribute(`aria-expanded`,`false`))}}),t.addEventListener(`click`,()=>{let n=e.classList.toggle(`open`);t.setAttribute(`aria-expanded`,String(n))}),r.addEventListener(`click`,e=>{if(e.target.matches(`.side-link`)){let t=e.target.dataset.target;t&&(window.location.hash=t,c(t))}}),i.addEventListener(`click`,e=>{if(e.target.matches(`.copy-btn`)){let t=e.target.getAttribute(`data-code`);if(t){let n=t.replace(/&#10;/g,`
`);navigator.clipboard.writeText(n).then(()=>{let t=e.target.textContent;e.target.textContent=`✓ Copiado`,setTimeout(()=>{e.target.textContent=t},2e3)})}}}),window.addEventListener(`hashchange`,()=>{let e=window.location.hash?.replace(`#`,``);e&&c(e)});let m=new Set([...i.querySelectorAll(`[data-md-src]`)].map(e=>e.getAttribute(`data-md-src`)).filter(Boolean)),h=s().filter(e=>!m.has(e));if(h.length)for(let e of h){let t=d(e);n.appendChild(t),a(e,u(e))}await l(i)})();