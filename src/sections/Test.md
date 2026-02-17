# Test

## Sección de prueba extensa
Este documento existe para validar que los contenedores con Markdown soportan contenido largo, con varias secciones, listas, textos explicativos y enlaces. La idea es simular un contenido real que tendría muchas partes, subtítulos y elementos narrativos.

### Objetivos generales
- Verificar creación automática de sección cuando no existe un div apuntando al `.md`.
- Comprobar carga correcta del contenido en distintos puntos del sitio.
- Validar estilos en `.editable-md` con textos largos y jerarquías de título.
- Probar enlaces, listas y párrafos muy extensos para detectar cortes.

### Resumen ejecutivo
La prueba busca estresar el render de Markdown con un contenido que no sea corto. Se incluyen secciones conceptuales, pasos, notas, ejemplos y una breve guía. Todo esto debería verse bien sin romper el diseño de la página.

---

## Contexto
En proyectos reales, el contenido crece con el tiempo. Por eso es importante validar que el componente que renderiza Markdown sea capaz de manejar mucha información sin afectar la legibilidad. Esta sección explica por qué se requiere un texto largo y cómo ayuda a detectar errores de estilo o de estructura.

### ¿Qué se espera observar?
1. Que el texto mantenga espaciado consistente.
2. Que los títulos se distingan con claridad.
3. Que las listas no se peguen a los párrafos.
4. Que el contenedor no “rompa” el layout general.
5. Que el diseño siga siendo cómodo para leer.

### Recomendaciones generales
- Usar títulos claros y breves.
- Separar ideas por párrafos.
- Evitar bloques de texto demasiado densos.
- Priorizar la estructura antes que el volumen.

---

## Guía paso a paso
### Paso 1: Preparación
Antes de escribir contenido, define el objetivo principal de la sección. ¿Es informativa? ¿Persuasiva? ¿Debe llevar a una acción? Tener claro eso evita textos innecesarios.

### Paso 2: Estructura
Organiza el contenido en bloques lógicos. Usa títulos y subtítulos. Esto no solo ayuda al lector, también facilita futuras ediciones.

### Paso 3: Redacción
Escribe con frases claras y directas. En un sitio web, la mayoría de usuarios escanea más de lo que lee. Por eso los textos deben ser fáciles de entender.

### Paso 4: Revisión
Revisa el contenido para eliminar repeticiones, corregir errores y ajustar el tono. La consistencia mejora la percepción de calidad.

---

## Lista de verificación
- [ ] El texto no se corta en dispositivos móviles.
- [ ] Los títulos tienen jerarquía clara.
- [ ] Las listas se leen sin confusión.
- [ ] Los enlaces son visibles.
- [ ] El contenedor mantiene buena legibilidad.

---

## Ejemplos de contenido extendido
### Ejemplo 1: Descripción de servicio
Un servicio profesional debe explicar qué se entrega, cómo se entrega y qué beneficios obtiene el cliente. También es útil incluir una breve lista de resultados típicos. Esto ayuda a crear expectativas realistas.

### Ejemplo 1.1: Imagen de referencia
![Logo de Vite](/assets/vite.svg)

### Ejemplo 1.2: Imagen con tamaño definido
<img src="/assets/vite.svg" alt="Logo pequeño" width="240" />

<img src="/assets/vite.svg" alt="Logo mediano" width="420" />

### Ejemplo 2: FAQ
**Pregunta:** ¿Cuánto tiempo tarda?
**Respuesta:** Depende del alcance, pero normalmente entre 2 y 4 semanas.

**Pregunta:** ¿Qué necesito entregar?
**Respuesta:** Información básica del proyecto, objetivos y recursos disponibles.

### Ejemplo 3: Caso de éxito
En un caso real, una pyme logró incrementar sus ventas al ordenar sus procesos. La clave fue definir metas claras y medir resultados en periodos cortos.

---

## Texto largo simulado
Este párrafo es deliberadamente largo para simular un bloque de contenido denso. Se usa para observar el comportamiento del contenedor cuando hay mucha información seguida. El objetivo es revisar si el fondo, el contraste y la tipografía siguen siendo cómodos al leer varias líneas sin interrupciones. Si se detecta fatiga visual, se puede ajustar el color, el tamaño de la fuente o el interlineado.

Este segundo párrafo continúa con la misma idea, para crear una secuencia extensa. El texto no debe verse apretado ni demasiado amplio. El balance ideal es aquel que permite leer sin esfuerzo durante varios minutos. En interfaces web, un buen espaciado y un contraste correcto son esenciales.

---

## Notas finales
Si este contenido se ve bien, significa que el render de Markdown y el estilo `.editable-md` están funcionando como se espera. Si algo se ve mal, se puede ajustar el CSS o dividir el contenido en bloques más pequeños.

Para más información visita [nuestra guía](https://example.com).
