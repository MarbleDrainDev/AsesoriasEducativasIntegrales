# Explicación paso a paso del proyecto

Este documento explica, en orden real, cómo se creó y configuró la página web estática con Vite, qué archivos se tocaron y cómo replicar el proceso con tu propio contenido.

## 1) Inicio del proyecto

**Comando usado:**

- `npx create-vite@latest . -- --template vanilla`

**Por qué se usó:**

- Vite es un bundler moderno y rápido para proyectos web.
- Con la plantilla `vanilla` se crea un proyecto HTML/CSS/JS puro (sin frameworks).
- El `.` indica que se crea en la carpeta actual.

## 2) Instalación y verificación

**Comando usado:**

- `npm install`

**Para qué sirve:**

- Instala las dependencias definidas en `package.json`.

## 2.1) Instalación de librería para Markdown

**Comando usado:**

- `npm install marked`

**Para qué sirve:**

- `marked` es una librería que convierte texto Markdown a HTML.
- Se necesita solo si usas `?source=md` (modo Markdown).
- Permite editar contenido en archivos `.md` simples en lugar de JSON.

## 3) Estructura principal del proyecto (lo primero que se editó)

Archivos clave:

- `index.html`: HTML base donde se monta la app.
- `src/main.js`: lógica para cargar contenido y cambiar vistas.
- `src/style.css`: estilos principales y diseño responsive.
- `public/content.json`: contenido editable por personas no técnicas.
- `public/sections/`: carpeta con archivos `.md` por sección (editable en Markdown).

## 4) Qué contiene index.html

En `index.html`:

- `<div id="app"></div>` es el contenedor donde se inyecta todo el contenido.
- `<script type="module" src="/src/main.js"></script>` carga la lógica principal.
- Se usa `lang="es"` para que el sitio esté en español por defecto.

## 5) Cómo funciona la arquitectura decoupled

El contenido vive fuera del código en:

- `public/content.json` (recomendado)
- `public/sections/*.md` (Markdown por sección)

`src/main.js` carga ese contenido con `fetch()` y genera el HTML dinámicamente. Así, cualquier persona puede editar textos sin tocar código.

## 6) Contenido por bloques (orden libre)

Ahora cada sección puede tener un arreglo `blocks` en `public/content.json`. Estos bloques permiten poner **texto, imágenes, listas, tarjetas o CTA** en el orden que quieras.

Tipos soportados:

- `text` (texto libre)
- `image` (imagen con `src`, `alt` y `caption`)
- `highlights` (lista corta)
- `cards` (tarjetas)
- `values` (tarjetas de valores)
- `items` (píldoras)
- `contacts` (datos de contacto)
- `cta` (botón)

Cuando una sección tiene `blocks`, se renderiza **solo con esos bloques**, y el orden es exactamente el que pongas en el JSON.

## 7) Cambios exactos en main.js (línea por línea importante)

Al crear un proyecto Vite nuevo, el archivo `src/main.js` trae algo como:

- `document.querySelector('#app').innerHTML = \
  (HTML dentro de comillas)

Yo cambié esa lógica por algo más mantenible y desacoplado. Estos fueron los cambios clave y el porqué:

### 7.1) Se creó `DEFAULT_CONTENT`

Antes no existía. Ahora hay una constante:

- `const DEFAULT_CONTENT = { ... }`

**Por qué:**

- Sirve como “plan B” si falla la carga del JSON/CSV.
- También documenta la estructura exacta que espera el sitio.

### 7.2) Se guardó el nodo raíz en una variable

Antes:

- `document.querySelector('#app').innerHTML = ...`

Ahora:

- `const app = document.querySelector('#app')`

**Por qué:**

- Se reutiliza muchas veces y no hace falta buscar el DOM en cada acción.
- Ayuda a que el código quede más limpio y fácil de leer.

### 7.3) Se agregó el parser de CSV

Se creó `parseCsv()` y `csvToContent()`.

**Por qué:**

- El CSV es editable en Excel, pero necesita convertirse a la misma estructura del JSON.
- `csvToContent()` transforma filas en objetos que el sitio entiende.

### 7.4) Se agregó `loadContent()`

**Qué hace:**

- Lee la URL con `new URLSearchParams(window.location.search)`.
- Si detecta `source=md`, carga archivos Markdown individuales por sección desde `public/sections/`.
- Si no, carga solo `fetch('/content.json')`.
- Si algo falla, devuelve `DEFAULT_CONTENT`.

**Por qué:**

- Permite elegir la fuente de contenido sin tocar el código.
- Evita que el sitio se rompa si el archivo no existe.

### 7.5) Se reemplazó el HTML fijo por funciones

En vez de usar un `innerHTML` enorme, se creó:

- `createSection()` para generar secciones.
- `renderApp()` para construir todo el layout.

**Por qué:**

- Hace más fácil agregar o quitar secciones.
- Reutiliza bloques de HTML y evita duplicación.

### 7.6) Se agregó lógica de vistas

Se implementó `setActiveView()`:

- Muestra solo la sección activa.
- Resalta el link del menú actual.

**Por qué:**

- Permite “múltiples vistas” sin cambiar de página.

### 7.7) Se agregó el menú desplegable (móvil)

- `menuToggle.addEventListener('click', ...)`
- Se abre/cierra la navegación con la clase `open`.

**Por qué:**

- En pantallas pequeñas el menú no cabe, por eso se despliega.

### 7.8) Se inicia la app con contenido real

### 7.9) Se agregó render por bloques

Se creó `renderBlocks()` para pintar bloques en el orden del JSON. Si `content.blocks` existe, esa sección se construye con esos bloques y no con el formato antiguo.

### 7.10) Se agregó el menú lateral tipo drawer

Se añadió un menú desplegable a la izquierda (hover) que se superpone al contenido y cambia las mismas vistas usando `target`.

Al final se reemplazó la lógica original por:

- `loadContent().then(renderApp)`

**Por qué:**

- Primero se carga el contenido.
- Después se renderiza todo con los datos.

## 8) Cómo se decide si usar JSON o Markdown

En `src/main.js`, la función `loadContent()` hace lo siguiente:

- Lee la URL con `new URLSearchParams(window.location.search)`.
- Si encuentra `?source=md`, activa modo Markdown.
- En modo Markdown carga `public/content.json` para menús/estructura y luego `public/sections/<id>.md` para el contenido.
- Si no, usa solo `public/content.json` con bloques.

Esa condición es la que define qué información se muestra en la página.

## 9) Qué hace main.js

En `src/main.js` se implementó:

- **Carga de contenido** desde `public/content.json` (bloques) o `public/sections/*.md` (Markdown).
- **Soporte Markdown** si abres el sitio con `?source=md`.
- **Render del menú** con secciones dinámicas (Inicio, Nosotros, Servicios, etc.).
- **Cambio de vistas**: al hacer clic en el menú se muestra solo una sección.
- **Menú desplegable** tipo drawer a la izquierda (hover) con accesos rápidos.

### Ejemplo de navegación

- Si haces clic en “Servicios”, se activa la sección `#servicios`.
- Las demás secciones quedan ocultas hasta que el usuario cambie de vista.

## 10) Qué se hizo en el CSS

El CSS está en `src/style.css` y se modificó para:

- Cambiar tipografía y colores a un estilo moderno.
- Crear tarjetas y bloques con sombras suaves.
- Añadir efectos hover en botones y enlaces.
- Hacer el diseño **responsive** con `@media`:
  - En pantallas pequeñas, el menú pasa a modo desplegable.
  - Se ajustan paddings y tamaños para móvil.

## 11) Cómo editar el contenido (paso a paso)

### Opción A: JSON (recomendado)

1. Abre `public/content.json`.
2. Edita el `blocks` de cada sección para cambiar el orden y el tipo de contenido.
3. Guarda el archivo.
4. Recarga el navegador.

Ejemplo mínimo de bloques:

```json
"blocks": [
  { "type": "text", "value": "Texto libre" },
  { "type": "image", "src": "/tu-imagen.jpg", "alt": "Foto" },
  { "type": "highlights", "items": ["Uno", "Dos"] }
]
```

### Opción B: Markdown por sección

1. Abre cualquier archivo en `public/sections/*.md` (por ejemplo: `inicio.md`, `nosotros.md`).
2. Escribe texto, listas e imágenes en el orden que quieras.
3. Guarda los archivos.
4. Abre el sitio con `?source=md` para activar modo Markdown:
   - http://localhost:5173/?source=md

> En modo Markdown, el contenido de las secciones viene de los .md.

> Para orden libre con imágenes, Markdown es la opción más simple.

## 12) Compilación (build)

**Comando usado:**

- `npm run build`

**Qué hace:**

- Genera una versión optimizada para producción en la carpeta `dist/`.
- Minifica y empaqueta el CSS y JS para que el sitio cargue más rápido.

## 13) Servidor local (último paso)

**Comando usado:**

- `npm run dev`

**Qué hace:**

- Levanta un servidor local para ver la web en vivo mientras editas.

## 14) Cómo crear tu propia web con esta base

Sigue estos pasos para adaptarla a cualquier temática:

1. **Define tus secciones** (por ejemplo: Inicio, Menú, Reservas, Contacto).
2. **Actualiza el menú** en `public/content.json`.
3. **Cambia textos e imágenes** en las secciones.
4. **Edita colores** en `src/style.css` si quieres otro estilo.
5. **Genera la versión final** con `npm run build`.
6. **Prueba en móvil** y navega con `npm run dev` al final.

## 15) Resumen final

- Vite permite un arranque rápido y rendimiento alto.
- El contenido está desacoplado y es editable sin tocar código.
- El sitio es estático, con vistas múltiples y menú responsive.
- La base sirve para cualquier tipo de web cambiando solo contenido y estilos.
