# Ejemplo de Página Web Estática

Sitio estático generado con Vite (vanilla JS) y contenido desacoplado para edición rápida sin tocar el código.

## Cómo editar el contenido

El contenido está en archivos separados dentro de public:

- public/content.json (recomendado)
- public/sections/*.md (Markdown por sección)

### Opción A: Editar JSON (recomendado)

1. Abre public/content.json.
2. Cambia textos, títulos y listas.
3. Guarda el archivo y recarga el navegador.

### Opción B: Editar Markdown por sección

1. Abre los archivos en public/sections (por ejemplo: public/sections/inicio.md).
2. Edita el texto, listas, imágenes o enlaces.
3. Guarda el archivo.
4. Abre el sitio con este parámetro para cargar Markdown:

   - http://localhost:5173/?source=md

> Nota: En modo Markdown el contenido se toma de los .md por sección.

## Menú y vistas

El menú superior muestra distintas vistas (secciones). Al hacer clic, se cambia la sección activa. En móvil se utiliza el botón “Menú” para desplegar.

## Comandos

Instalar dependencias:

- npm install

Levantar el entorno local:

- npm run dev

Generar versión estática:

- npm run build

Previsualizar build:

- npm run preview
