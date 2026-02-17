var e=`# Conceptos de Markdown (MD)\r
\r
Este documento explica cómo escribir contenido en Markdown y qué cosas soporta este proyecto.\r
\r
## 1) Títulos\r
Usa \`#\` para títulos grandes y \`##\` o \`###\` para subtítulos:\r
\r
# Título principal\r
## Subtítulo\r
### Subsubtítulo\r
\r
## 2) Párrafos\r
Escribe texto normal en líneas separadas. Deja una línea en blanco entre párrafos para que se separen bien.\r
\r
## 3) Negrilla y cursiva\r
- **Negrilla**: \`**texto**\`\r
- *Cursiva*: \`*texto*\`\r
\r
Ejemplo:\r
**Este texto va en negrilla** y *este en cursiva*.\r
\r
## 4) Listas con viñetas\r
Usa guiones \`-\` para listas:\r
- Elemento uno\r
- Elemento dos\r
- Elemento tres\r
\r
## 5) Enlaces\r
Formato: \`[texto](url)\`\r
Ejemplo: [Ir a Vite](https://vitejs.dev)\r
\r
## 6) Imágenes\r
Formato básico: \r
\r
![Texto alternativo](/assets/vite.svg)\r
\r
### Tamaño de imágenes\r
Markdown básico no permite tamaños. Para controlar el tamaño usa HTML:\r
<img src="/assets/vite.svg" alt="Logo pequeño" width="20" />\r
<img src="/assets/vite.svg" alt="Logo pequeño" width="200" />\r
<img src="/assets/vite.svg" alt="Logo mediano" width="420" />\r
<img src="/assets/vite.svg" alt="Logo grande" width="640" />\r
\r
## 7) Avisos / notas\r
Puedes usar bloques de cita para avisos y poner íconos/emoji:\r
\r
> :warning: **Warning:** Do not push the big red button.\r
>\r
> :memo: **Note:** Sunrises are beautiful.\r
\r
> :bulb: **Tip:** Remember to appreciate the little things in life.\r
\r
También puedes crear un aviso con HTML si quieres más control:\r
<div class="editable-md">\r
  <strong>Aviso:</strong> Este es un bloque con estilo del contenedor.\r
</div>\r
\r
## 8) Columnas (texto al lado de otro)\r
Puedes usar HTML dentro del \`.md\` para crear columnas. Ejemplo:\r
\r
<div class="md-columns">\r
  <div>\r
    <h3>Columna A</h3>\r
    <p>Texto de la columna A.</p>\r
  </div>\r
  <div>\r
    <h3>Columna B</h3>\r
    <p>Texto de la columna B.</p>\r
  </div>\r
</div>\r
\r
Si quieres, te puedo agregar la clase \`.md-columns\` al CSS para que se vea bien en escritorio y se apile en móvil.\r
\r
## 9) Imagen y texto en la misma fila\r
Hay dos formas simples:\r
\r
### Opción A: Contenedor flexible\r
<div class="md-media">\r
  <div class="md-media-image">\r
    <img src="/assets/vite.svg" alt="Logo" width="220" />\r
  </div>\r
  <div class="md-media-text">\r
    <p>Aquí va el texto al lado de la imagen. Este bloque crece y se adapta al ancho disponible.</p>\r
  </div>\r
</div>\r
\r
### Opción B: Flotar imagen a izquierda o derecha\r
<img class="md-float-left" src="/assets/vite.svg" alt="Logo" width="180" />\r
<p>Texto que aparece a la derecha de la imagen. En pantallas pequeñas se apila automáticamente.</p>\r
\r
<img class="md-float-right" src="/assets/vite.svg" alt="Logo" width="180" />\r
<p>Texto que aparece a la izquierda de la imagen.</p>\r
\r
## 10) Separadores\r
Puedes usar \`---\` para separar secciones:\r
---\r
\r
## 11) Recomendaciones\r
- Mantén las secciones cortas y claras.\r
- Usa títulos para organizar el contenido.\r
- Evita párrafos demasiado largos.\r
- Si necesitas diseño especial, usa HTML simple dentro del Markdown.\r
\r
## 12) Importante\r
Este sitio también carga el contenido desde \`src/sections/\`. Si agregas un archivo nuevo, aparecerá automáticamente como sección si no hay un \`div\` apuntándolo con \`data-md-src\`.\r
\r
## 13) Videos\r
Por ahora solo se pueden incrustar videos usando HTML dentro del \`.md\`. Ejemplos:\r
\r
<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Video" frameborder="0" allowfullscreen></iframe>\r
\r
\r
<video controls width="560">\r
  <source src="/assets/video.mp4" type="video/mp4" />\r
</video>\r
`;export{e as default};