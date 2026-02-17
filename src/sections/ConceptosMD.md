# Conceptos de Markdown (MD)

Este documento explica cómo escribir contenido en Markdown y qué cosas soporta este proyecto.

## 1) Títulos
Usa `#` para títulos grandes y `##` o `###` para subtítulos:

# Título principal
## Subtítulo
### Subsubtítulo

## 2) Párrafos
Escribe texto normal en líneas separadas. Deja una línea en blanco entre párrafos para que se separen bien.

## 3) Negrilla y cursiva
- **Negrilla**: `**texto**`
- *Cursiva*: `*texto*`

Ejemplo:
**Este texto va en negrilla** y *este en cursiva*.

## 4) Listas con viñetas
Usa guiones `-` para listas:
- Elemento uno
- Elemento dos
- Elemento tres

## 5) Enlaces
Formato: `[texto](url)`
Ejemplo: [Ir a Vite](https://vitejs.dev)

## 6) Imágenes
Formato básico: 

![Texto alternativo](/assets/vite.svg)

### Tamaño de imágenes
Markdown básico no permite tamaños. Para controlar el tamaño usa HTML:
<img src="/assets/vite.svg" alt="Logo pequeño" width="20" />
<img src="/assets/vite.svg" alt="Logo pequeño" width="200" />
<img src="/assets/vite.svg" alt="Logo mediano" width="420" />
<img src="/assets/vite.svg" alt="Logo grande" width="640" />

## 7) Avisos / notas
Puedes usar bloques de cita para avisos y poner íconos/emoji:

> :warning: **Warning:** Do not push the big red button.
>
> :memo: **Note:** Sunrises are beautiful.

> :bulb: **Tip:** Remember to appreciate the little things in life.

También puedes crear un aviso con HTML si quieres más control:
<div class="editable-md">
  <strong>Aviso:</strong> Este es un bloque con estilo del contenedor.
</div>

## 8) Columnas (texto al lado de otro)
Puedes usar HTML dentro del `.md` para crear columnas. Ejemplo:

<div class="md-columns">
  <div>
    <h3>Columna A</h3>
    <p>Texto de la columna A.</p>
  </div>
  <div>
    <h3>Columna B</h3>
    <p>Texto de la columna B.</p>
  </div>
</div>

Si quieres, te puedo agregar la clase `.md-columns` al CSS para que se vea bien en escritorio y se apile en móvil.

## 9) Imagen y texto en la misma fila
Hay dos formas simples:

### Opción A: Contenedor flexible
<div class="md-media">
  <div class="md-media-image">
    <img src="/assets/vite.svg" alt="Logo" width="220" />
  </div>
  <div class="md-media-text">
    <p>Aquí va el texto al lado de la imagen. Este bloque crece y se adapta al ancho disponible.</p>
  </div>
</div>

### Opción B: Flotar imagen a izquierda o derecha
<img class="md-float-left" src="/assets/vite.svg" alt="Logo" width="180" />
<p>Texto que aparece a la derecha de la imagen. En pantallas pequeñas se apila automáticamente.</p>

<img class="md-float-right" src="/assets/vite.svg" alt="Logo" width="180" />
<p>Texto que aparece a la izquierda de la imagen.</p>

## 10) Separadores
Puedes usar `---` para separar secciones:
---

## 11) Recomendaciones
- Mantén las secciones cortas y claras.
- Usa títulos para organizar el contenido.
- Evita párrafos demasiado largos.
- Si necesitas diseño especial, usa HTML simple dentro del Markdown.

## 12) Importante
Este sitio también carga el contenido desde `src/sections/`. Si agregas un archivo nuevo, aparecerá automáticamente como sección si no hay un `div` apuntándolo con `data-md-src`.

## 13) Videos
Por ahora solo se pueden incrustar videos usando HTML dentro del `.md`. Ejemplos:

<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Video" frameborder="0" allowfullscreen></iframe>


<video controls width="560">
  <source src="/assets/video.mp4" type="video/mp4" />
</video>
