import './style.css'
import { marked } from 'marked'

const DEFAULT_CONTENT = {
  site: {
    title: 'Ejemplo de Página Web',
    tagline: 'Plantilla estática con contenido editable y arquitectura decoupled.',
    brand: 'EjemploWb',
    ctaText: 'Hablar con ventas',
    ctaLink: '#contacto'
  },
  menu: [
    { id: 'inicio', label: 'Inicio' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'contacto', label: 'Contacto' }
  ],
  sideMenu: {
    title: 'Menú rápido',
    items: [
      { id: 'atajo-inicio', label: 'Resumen', target: 'inicio' },
      { id: 'atajo-nosotros', label: 'Equipo', target: 'nosotros' },
      { id: 'atajo-servicios', label: 'Planes', target: 'servicios' },
      { id: 'atajo-proyectos', label: 'Casos', target: 'proyectos' },
      { id: 'atajo-contacto', label: 'Contacto rápido', target: 'contacto' },
      { id: 'atajo-teclados', label: 'Teclados mecánicos', target: 'teclados' }
    ]
  },
  sections: {
    inicio: {
      title: 'Todo lo que necesitas para empezar rápido',
      subtitle: 'Cambia textos e instrucciones sin tocar el código.',
      body: 'Esta sección presenta el objetivo principal del sitio. Puedes reemplazar estos párrafos por el mensaje real de tu negocio.',
      blocks: [
        { type: 'text', value: 'Este bloque es totalmente libre. Puedes escribir lo que quieras aquí.' },
        { type: 'image', src: '/vite.svg', alt: 'Imagen ejemplo', caption: 'Puedes cambiar esta imagen por la tuya.' },
        { type: 'highlights', items: ['Sitio 100% estático', 'Contenido editable', 'Diseño responsive'] },
        { type: 'cta', text: 'Ver servicios', link: '#servicios' }
      ],
      highlights: ['Sitio 100% estático', 'Contenido editable', 'Diseño responsive'],
      cta: {
        text: 'Ver servicios',
        link: '#servicios'
      }
    },
    nosotros: {
      title: 'Un equipo enfocado en resultados',
      body: 'Describe aquí la historia, misión y visión. Mantén frases cortas y claras para que sea fácil de actualizar.',
      blocks: [
        { type: 'text', value: 'Este bloque cuenta quiénes son y por qué existen.' },
        {
          type: 'values',
          items: [
            { title: 'Transparencia', text: 'Comunicación clara y honesta en cada etapa.' },
            { title: 'Calidad', text: 'Procesos consistentes para mantener un alto estándar.' },
            { title: 'Cercanía', text: 'Acompañamiento continuo para tus clientes.' }
          ]
        }
      ],
      values: [
        { title: 'Transparencia', text: 'Comunicación clara y honesta en cada etapa.' },
        { title: 'Calidad', text: 'Procesos consistentes para mantener un alto estándar.' },
        { title: 'Cercanía', text: 'Acompañamiento continuo para tus clientes.' }
      ]
    },
    servicios: {
      title: 'Servicios principales',
      body: 'Enumera los servicios que ofreces. Cada tarjeta es editable desde el archivo de contenido.',
      blocks: [
        { type: 'text', value: 'Enumera los servicios clave con una breve descripción.' },
        {
          type: 'cards',
          items: [
            { title: 'Estrategia', text: 'Definimos objetivos, cronograma y métricas.' },
            { title: 'Diseño', text: 'Creamos propuestas visuales modernas y claras.' },
            { title: 'Soporte', text: 'Te acompañamos después del lanzamiento.' }
          ]
        }
      ],
      cards: [
        { title: 'Estrategia', text: 'Definimos objetivos, cronograma y métricas.' },
        { title: 'Diseño', text: 'Creamos propuestas visuales modernas y claras.' },
        { title: 'Soporte', text: 'Te acompañamos después del lanzamiento.' }
      ]
    },
    proyectos: {
      title: 'Casos y proyectos',
      body: 'Muestra resultados o referencias. Puedes cambiar títulos y descripciones sin tocar el código.',
      blocks: [
        { type: 'text', value: 'Muestra proyectos destacados y resultados visibles.' },
        {
          type: 'items',
          items: [
            { title: 'Proyecto Alfa', text: 'Aumento de conversiones en 30%.' },
            { title: 'Proyecto Beta', text: 'Rediseño completo en 4 semanas.' },
            { title: 'Proyecto Gamma', text: 'Lanzamiento rápido con métricas claras.' }
          ]
        }
      ],
      items: [
        { title: 'Proyecto Alfa', text: 'Aumento de conversiones en 30%.' },
        { title: 'Proyecto Beta', text: 'Rediseño completo en 4 semanas.' },
        { title: 'Proyecto Gamma', text: 'Lanzamiento rápido con métricas claras.' }
      ]
    },
    contacto: {
      title: 'Hablemos de tu idea',
      body: 'Incluye aquí la información básica de contacto y un llamado a la acción.',
      blocks: [
        { type: 'text', value: 'Comparte los datos clave para contactarte.' },
        {
          type: 'contacts',
          items: [
            { label: 'Correo', value: 'hola@tudominio.com' },
            { label: 'Teléfono', value: '+34 600 000 000' },
            { label: 'Ubicación', value: 'Madrid, ES' }
          ]
        },
        { type: 'cta', text: 'Escribir correo', link: 'mailto:hola@tudominio.com' }
      ],
      contacts: [
        { label: 'Correo', value: 'hola@tudominio.com' },
        { label: 'Teléfono', value: '+34 600 000 000' },
        { label: 'Ubicación', value: 'Madrid, ES' }
      ],
      buttonText: 'Escribir correo',
      buttonLink: 'mailto:hola@tudominio.com'
    },
    teclados: {
      title: 'Teclados mecánicos',
      subtitle: 'Sensación, precisión y personalización.',
      body: 'Explica aquí los beneficios: switches, retroiluminación, materiales y tipos de uso (gaming, escritura, trabajo).',
      blocks: [
        { type: 'text', value: 'Aquí puedes contar por qué los teclados mecánicos son especiales.' },
        { type: 'highlights', items: ['Switches lineales o táctiles', 'Keycaps personalizables', 'Durabilidad superior'] },
        {
          type: 'cards',
          items: [
            { title: 'Switches', text: 'Lineales, táctiles o clicky según tu preferencia.' },
            { title: 'Diseño', text: 'Layout compacto o completo según tu espacio.' },
            { title: 'Experiencia', text: 'Escritura cómoda y respuesta inmediata.' }
          ]
        }
      ],
      highlights: ['Switches lineales o táctiles', 'Keycaps personalizables', 'Durabilidad superior'],
      cards: [
        { title: 'Switches', text: 'Lineales, táctiles o clicky según tu preferencia.' },
        { title: 'Diseño', text: 'Layout compacto o completo según tu espacio.' },
        { title: 'Experiencia', text: 'Escritura cómoda y respuesta inmediata.' }
      ]
    }
  },
  footer: {
    text: '© 2026 EjemploWb. Todos los derechos reservados.'
  },
  instructions: {
    note: 'Edita este contenido en public/content.json o public/content.csv.'
  }
}

const app = document.querySelector('#app')

const parseCsv = (text) => {
  const rows = []
  let current = ''
  let inQuotes = false
  let row = []
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i]
    const next = text[i + 1]
    if (char === '"') {
      if (inQuotes && next === '"') {
        current += '"'
        i += 1
      } else {
        inQuotes = !inQuotes
      }
    } else if (char === ',' && !inQuotes) {
      row.push(current)
      current = ''
    } else if ((char === '\n' || char === '\r') && !inQuotes) {
      if (current.length || row.length) {
        row.push(current)
        rows.push(row)
        row = []
        current = ''
      }
    } else {
      current += char
    }
  }
  if (current.length || row.length) {
    row.push(current)
    rows.push(row)
  }
  return rows
}

const csvToContent = (csvText) => {
  const rows = parseCsv(csvText).filter((row) => row.length >= 4)
  const data = {
    site: {},
    menu: [],
    sideMenu: { title: '', items: [] },
    sections: {},
    footer: {},
    instructions: {}
  }
  rows.slice(1).forEach(([type, section, field, value]) => {
    if (!type) return
    const cleanedValue = value?.trim() ?? ''
    switch (type.trim()) {
      case 'site':
        data.site[field.trim()] = cleanedValue
        break
      case 'menu':
        data.menu.push({ id: section.trim(), label: cleanedValue })
        break
      case 'sidemenu':
        data.sideMenu.title = cleanedValue
        break
      case 'sideitem':
        data.sideMenu.items.push({
          id: section.trim(),
          label: field.trim(),
          target: cleanedValue || section.trim()
        })
        break
      case 'section': {
        const key = section.trim()
        data.sections[key] = data.sections[key] || {}
        if (cleanedValue.includes('|')) {
          data.sections[key][field.trim()] = cleanedValue.split('|').map((item) => item.trim())
        } else {
          data.sections[key][field.trim()] = cleanedValue
        }
        break
      }
      case 'highlight': {
        const key = section.trim()
        data.sections[key] = data.sections[key] || {}
        data.sections[key].highlights = data.sections[key].highlights || []
        data.sections[key].highlights.push(cleanedValue)
        break
      }
      case 'card': {
        const key = section.trim()
        data.sections[key] = data.sections[key] || {}
        data.sections[key].cards = data.sections[key].cards || []
        data.sections[key].cards.push({ title: field.trim(), text: cleanedValue })
        break
      }
      case 'value': {
        const key = section.trim()
        data.sections[key] = data.sections[key] || {}
        data.sections[key].values = data.sections[key].values || []
        data.sections[key].values.push({ title: field.trim(), text: cleanedValue })
        break
      }
      case 'item': {
        const key = section.trim()
        data.sections[key] = data.sections[key] || {}
        data.sections[key].items = data.sections[key].items || []
        data.sections[key].items.push({ title: field.trim(), text: cleanedValue })
        break
      }
      case 'contact': {
        const key = section.trim()
        data.sections[key] = data.sections[key] || {}
        data.sections[key].contacts = data.sections[key].contacts || []
        data.sections[key].contacts.push({ label: field.trim(), value: cleanedValue })
        break
      }
      case 'footer':
        data.footer[field.trim()] = cleanedValue
        break
      case 'instruction':
        data.instructions[field.trim()] = cleanedValue
        break
      default:
        break
    }
  })
  return data
}

/**
 * Carga el contenido desde una fuente externa o retorna contenido por defecto.
 * 
 * @async
 * @function loadContent
 * @returns {Promise<Object>} Objeto con el contenido cargado. Si el modo es 'md',
 *                            incluye la propiedad __source establecida a 'md'.
 *                            En caso de error, retorna DEFAULT_CONTENT.
 * 
 * @description
 * Esta función:
 * 1. Lee el parámetro de URL 'source' para determinar el modo de carga
 * 2. Si source='md', establece el modo a 'md', de lo contrario usa 'json'
 * 3. Intenta obtener el archivo 'content.json' del servidor
 * 4. Si la respuesta es exitosa, parsea el JSON y lo retorna
 * 5. Si el modo es 'md', añade la propiedad __source al objeto
 * 6. Si hay error en la carga, retorna DEFAULT_CONTENT como fallback
 */
const loadContent = async () => {
  const params = new URLSearchParams(window.location.search)
  const sourceParam = params.get('source')
  const mode = sourceParam === 'md' ? 'md' : 'json'
  try {
    const response = await fetch('/content.json')
    if (!response.ok) throw new Error('JSON no disponible')
    const data = await response.json()
    return mode === 'md' ? { ...data, __source: 'md' } : data
  } catch (error) {
    console.warn('Usando contenido por defecto.', error)
    return DEFAULT_CONTENT
  }
}

const renderBlocks = (blocks) => {
  const container = document.createElement('div')
  container.className = 'block-list'

  blocks.forEach((block) => {
    if (!block || !block.type) return
    const wrapper = document.createElement('div')
    wrapper.className = `block block-${block.type}`

    switch (block.type) {
      case 'text':
        wrapper.innerHTML = `<p>${block.value ?? ''}</p>`
        break
      case 'image':
        wrapper.innerHTML = `
          <img src="${block.src ?? ''}" alt="${block.alt ?? ''}" loading="lazy" />
          ${block.caption ? `<p class="block-caption">${block.caption}</p>` : ''}
        `
        break
      case 'highlights':
        wrapper.innerHTML = `
          <ul class="highlight-list">
            ${(block.items ?? []).map((item) => `<li>${item}</li>`).join('')}
          </ul>
        `
        break
      case 'cards':
        wrapper.innerHTML = `
          <div class="card-grid">
            ${(block.items ?? [])
              .map((item) => `<article class="card"><h3>${item.title}</h3><p>${item.text}</p></article>`)
              .join('')}
          </div>
        `
        break
      case 'values':
        wrapper.innerHTML = `
          <div class="card-grid">
            ${(block.items ?? [])
              .map((item) => `<article class="card"><h3>${item.title}</h3><p>${item.text}</p></article>`)
              .join('')}
          </div>
        `
        break
      case 'items':
        wrapper.innerHTML = `
          <div class="pill-list">
            ${(block.items ?? [])
              .map((item) => `<article class="pill"><h3>${item.title}</h3><p>${item.text}</p></article>`)
              .join('')}
          </div>
        `
        break
      case 'contacts':
        wrapper.innerHTML = `
          <div class="contact-list">
            ${(block.items ?? [])
              .map((item) => `<div><strong>${item.label}:</strong> ${item.value}</div>`)
              .join('')}
          </div>
        `
        break
      case 'cta':
        wrapper.innerHTML = `
          <a class="primary-button" href="${block.link ?? '#'}">${block.text ?? ''}</a>
        `
        break
      default:
        break
    }

    container.appendChild(wrapper)
  })

  return container
}

const renderInicioFixed = (section) => {
  section.classList.add('section-inicio-fixed')
  section.innerHTML = `
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
  `
}

const renderProfileSection = (section, content) => {
  section.classList.add('profile-section')
  const imgSrc = content.image?.src ?? '/vite.svg'
  section.innerHTML = `
    <div class="profile-grid">
      <aside class="profile-aside">
        <div class="avatar"><img src="${imgSrc}" alt="${content.image?.alt ?? ''}" loading="lazy"/></div>
        <h3 class="profile-name">${content.title ?? ''}</h3>
        ${content.subtitle ? `<p class="profile-role">${content.subtitle}</p>` : ''}
        <div class="profile-contacts">
          ${(content.contacts ?? []).map(c => `<div class="contact-item"><strong>${c.label}:</strong> ${c.value}</div>`).join('')}
        </div>
        <a class="primary-button" href="${content.buttonLink ?? '#'}">${content.buttonText ?? 'Contactar'}</a>
      </aside>
      <div class="profile-main">
        ${content.body ? `<p class="profile-summary">${content.body}</p>` : ''}
        ${content.skills?.length ? `<div class="skills">${content.skills.map(s => `<span class="skill-chip">${s}</span>`).join('')}</div>` : ''}
        ${content.experience?.length ? `
          <div class="experience">
            <h4>Experiencia laboral</h4>
            <ol class="timeline">
              ${content.experience.map((e, i) => `
                <li class="exp-item">
                  <div class="exp-head">
                    <div class="exp-title"><strong>${e.role}</strong> — <span class="exp-company">${e.company}</span></div>
                    <div class="exp-period">${e.period}</div>
                  </div>
                  <div class="exp-details">${e.details}</div>
                </li>
              `).join('')}
            </ol>
          </div>
        ` : ''}
        ${content.education?.length ? `
          <div class="education">
            <h4>Formación</h4>
            <ul>
              ${content.education.map(ed => `<li>${ed.degree} — ${ed.institution}${ed.year ? ` (${ed.year})` : ''}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
        ${content.certifications?.length ? `
          <div class="certifications">
            <h4>Certificaciones</h4>
            <ul>
              ${content.certifications.map(c => `<li>${c.name}${c.year ? ` — ${c.year}` : ''}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
      </div>
    </div>
  `

  // Inicialmente ocultar detalles de experiencia y añadir toggles
  section.querySelectorAll('.exp-item .exp-details').forEach((el) => { el.style.display = 'none' })
  section.querySelectorAll('.exp-item .exp-head').forEach((head) => {
    head.style.cursor = 'pointer'
    head.addEventListener('click', () => {
      const details = head.nextElementSibling
      const isHidden = details.style.display === 'none'
      details.style.display = isHidden ? 'block' : 'none'
      head.classList.toggle('open', isHidden)
    })
  })
}

const applySectionClasses = (section, content) => {
  const rawClasses = content?.className ?? ''
  if (!rawClasses) return
  rawClasses
    .split(' ')
    .map((item) => item.trim())
    .filter(Boolean)
    .forEach((item) => section.classList.add(item))
}

const createSection = (id, content) => {
  const section = document.createElement('section')
  section.className = 'section'
  section.id = id
  section.dataset.view = id

  if (id === 'inicio') {
    renderInicioFixed(section)
    return section
  }

  if (id === 'nosotros') {
    renderProfileSection(section, content)
    return section
  }

  applySectionClasses(section, content)
  const header = document.createElement('div')
  header.className = 'section-header'
  header.innerHTML = `
    <h2>${content.title ?? ''}</h2>
    ${content.subtitle ? `<p class="section-subtitle">${content.subtitle}</p>` : ''}
    ${content.body ? `<p>${content.body}</p>` : ''}
  `

  section.appendChild(header)

  if (content.blocks?.length) {
    section.appendChild(renderBlocks(content.blocks))
    return section
  }

  if (content.highlights?.length) {
    const list = document.createElement('ul')
    list.className = 'highlight-list'
    list.innerHTML = content.highlights.map((item) => `<li>${item}</li>`).join('')
    section.appendChild(list)
  }

  if (content.values?.length) {
    const grid = document.createElement('div')
    grid.className = 'card-grid'
    grid.innerHTML = content.values
      .map((value) => `<article class="card"><h3>${value.title}</h3><p>${value.text}</p></article>`)
      .join('')
    section.appendChild(grid)
  }

  if (content.cards?.length) {
    const grid = document.createElement('div')
    grid.className = 'card-grid'
    grid.innerHTML = content.cards
      .map((card) => `<article class="card"><h3>${card.title}</h3><p>${card.text}</p></article>`)
      .join('')
    section.appendChild(grid)
  }

  if (content.items?.length) {
    const list = document.createElement('div')
    list.className = 'pill-list'
    list.innerHTML = content.items
      .map((item) => `<article class="pill"><h3>${item.title}</h3><p>${item.text}</p></article>`)
      .join('')
    section.appendChild(list)
  }

  if (content.contacts?.length) {
    const contactList = document.createElement('div')
    contactList.className = 'contact-list'
    contactList.innerHTML = content.contacts
      .map((contact) => `<div><strong>${contact.label}:</strong> ${contact.value}</div>`)
      .join('')
    section.appendChild(contactList)
  }

  if (content.cta) {
    const cta = document.createElement('a')
    cta.className = 'primary-button'
    cta.href = content.cta.link
    cta.textContent = content.cta.text
    section.appendChild(cta)
  }

  if (content.buttonText && content.buttonLink) {
    const button = document.createElement('a')
    button.className = 'primary-button'
    button.href = content.buttonLink
    button.textContent = content.buttonText
    section.appendChild(button)
  }

  return section
}

const loadMarkdownSections = async (sections) => {
  await Promise.all(
    sections.map(async (section) => {
      const targetId = section.dataset.md
      if (!targetId) return
      try {
        const response = await fetch(`/sections/${targetId}.md`)
        if (!response.ok) throw new Error('Markdown no disponible')
        const text = await response.text()
        section.innerHTML = marked.parse(text)
      } catch (error) {
        section.innerHTML = '<p>No se pudo cargar el contenido Markdown.</p>'
        console.warn(error)
      }
    })
  )
}

const renderApp = (content) => {
  document.title = content.site?.title ?? 'Ejemplo de Página Web'
  app.innerHTML = `
    <div class="page">
      <header class="header">
        <div class="drawer-wrapper">
          <button class="drawer-trigger" type="button" aria-label="Abrir menú">
            <span class="drawer-icon"></span>
          </button>
          <div class="drawer">
            <p class="drawer-title">${content.sideMenu?.title ?? 'Menú rápido'}</p>
            <div class="side-list"></div>
          </div>
        </div>
        <div class="brand">
          <img src="/vite.svg" alt="Logo" class="brand-mark">
          <div>
            <p class="brand-title">${content.site?.title ?? ''}</p>
            <p class="brand-tagline">${content.site?.tagline ?? ''}</p>
          </div>
        </div>
        <button class="menu-toggle" aria-controls="site-menu" aria-expanded="false">
          Menú
          <span class="menu-icon"></span>
        </button>
        <nav id="site-menu" class="nav"></nav>
      </header>
      <main class="main" id="main-content">
      </main>
      <footer class="footer">
        <p>${content.footer?.text ?? ''}</p>
      </footer>
    </div>
  `

  const nav = app.querySelector('#site-menu')
  const main = app.querySelector('#main-content')
  const menuToggle = app.querySelector('.menu-toggle')
  const sideList = app.querySelector('.side-list')
  const markdownMode = content.__source === 'md'

  const menuItems = content.menu?.length ? content.menu : DEFAULT_CONTENT.menu
  nav.innerHTML = `
    ${menuItems
      .map(
        (item) =>
          `<a href="#${item.id}" data-view="${item.id}">${item.label}</a>`
      )
      .join('')}
  `

  const renderedSections = new Set()

  menuItems.forEach((item) => {
    const sectionData = content.sections?.[item.id] ?? DEFAULT_CONTENT.sections[item.id]
    if (sectionData) {
      const section = createSection(item.id, sectionData)
      if (markdownMode && item.id !== 'inicio') {
        section.innerHTML = `
          <div class="section-header">
            <h2>${sectionData.title ?? ''}</h2>
            ${sectionData.subtitle ? `<p class="section-subtitle">${sectionData.subtitle}</p>` : ''}
          </div>
          <div class="markdown-content" data-md="${item.id}"></div>
        `
      }
      main.appendChild(section)
      renderedSections.add(item.id)
    }
  })

  const sideMenu = content.sideMenu?.items?.length ? content.sideMenu : DEFAULT_CONTENT.sideMenu
  sideList.innerHTML = sideMenu.items
    .map(
      (item) =>
        `<button class="side-link" type="button" data-view="${item.id}" data-target="${item.target ?? item.id}">${item.label}</button>`
    )
    .join('')

  sideMenu.items.forEach((item) => {
    const targetId = item.target ?? item.id
    if (renderedSections.has(targetId)) return
    const sectionData = content.sections?.[targetId] ?? DEFAULT_CONTENT.sections[targetId]
    if (sectionData) {
      const section = createSection(targetId, sectionData)
      if (markdownMode && targetId !== 'inicio') {
        section.innerHTML = `
          <div class="section-header">
            <h2>${sectionData.title ?? ''}</h2>
            ${sectionData.subtitle ? `<p class="section-subtitle">${sectionData.subtitle}</p>` : ''}
          </div>
          <div class="markdown-content" data-md="${targetId}"></div>
        `
      }
      main.appendChild(section)
      renderedSections.add(targetId)
    }
  })

  const setSideActive = (viewId) => {
    if (!sideList) return
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
  }

  const initialView = window.location.hash?.replace('#', '') || menuItems[0]?.id
  if (initialView) {
    setActiveView(initialView)
  }

  if (markdownMode) {
    const markdownSections = [...main.querySelectorAll('.markdown-content')]
    loadMarkdownSections(markdownSections)
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

  window.addEventListener('hashchange', () => {
    const viewId = window.location.hash?.replace('#', '')
    if (viewId) {
      setActiveView(viewId)
    }
  })
}

loadContent().then(renderApp)
