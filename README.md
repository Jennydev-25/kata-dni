# 🆔 Kata DNI 

_"El DNI es solo un número… hasta que tienes que calcular su letra."_

---

## 📖 Descripción

Este proyecto forma parte de un ejercicio del bootcamp de desarrollo web fullstack de **Factoría F5**.

El reto: escribir una función que calcule la letra del DNI a partir de un número entre 0 y 99999999, cubriendo todos los escenarios con tests unitarios y mostrando el resultado de forma visual e interactiva.

Desarrollado con **HTML**, **SASS** y **JavaScript** con **ES Modules**, aplicando **Vitest** con TDD y **Conventional Commits** como estándar de mensajes de commit.

---

## ✨ Vista previa

🚀 [Ver en GitHub Pages] _en proceso_

📸 _En proceso_

---

## 🔍 Análisis

Antes de escribir código analicé los escenarios del enunciado para identificar los casos de uso de la función principal y los elementos que necesitaría para la interfaz.

**Fase 1 — Casos de uso de `calculateLetter(number)`:**

| Condición                        | Resultado                                     |
| -------------------------------- | --------------------------------------------- |
| Número válido entre 0 y 99999999 | Letra correspondiente según módulo 23         |
| Número fuera de rango            | Mensaje `"El dato introducido es incorrecto"` |
| Dato no numérico                 | Mensaje `"El dato introducido es incorrecto"` |
| Usuario pulsa cancelar           | El programa finaliza                          |

**La tabla de letras según el módulo 23:**

| Resto | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  | 11  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Letra | T   | R   | W   | A   | G   | M   | Y   | F   | P   | D   | X   | B   |

| Resto | 12  | 13  | 14  | 15  | 16  | 17  | 18  | 19  | 20  | 21  | 22  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Letra | N   | J   | Z   | S   | Q   | V   | H   | L   | C   | K   | E   |

**Algoritmo de `calculateLetter(number)`:**

1. Recibir el número como parámetro
2. Validar que el dato es un número con `typeof` (en `validations.js`)
3. Validar que el número está entre 0 y 99999999 (en `validations.js`)
4. Si alguna validación falla, devolver el mensaje de error
5. Calcular el resto de dividir el número entre 23 con el operador `%`
6. Usar el resto como índice para obtener la letra del array de letras
7. Devolver la letra correspondiente

**Fase 2 — Análisis visual:**

Antes de programar la interfaz analicé qué elementos HTML necesitaría para construirla:

**Sección 1 — Inicio:**

- Un `<header>` con el título del proyecto, un icono de Material Icons (`badge`) y la fuente Space Mono de Google Fonts
- Un `<main>` con un botón de inicio con icono `play_arrow` de Material Icons que al hacer click desaparece y muestra el formulario y el teclado
- Un `<footer>` con el nombre de la autora

**Sección 2 — Cálculo:**

- Un `<section>` con un `<input>` de solo lectura para mostrar el número introducido, con fuente Space Mono
- Un teclado numérico para pulsar los dígitos (0-9), con fuente Space Mono
- Una tecla para borrar con icono `backspace` de Material Icons
- Un botón Calcular con icono `calculate` de Material Icons
- Un botón Cancelar con icono `cancel` de Material Icons
- Una zona de resultado que muestra la letra, el cálculo, el mensaje de error o el mensaje de cancelación
- El proceso se repite hasta que el usuario pulsa cancelar, momento en el que el formulario se bloquea y aparece la opción de reiniciar

---

## 🚀 Instalación

**Requisitos previos:** [Node.js](https://nodejs.org/) instalado en tu equipo.

```bash
# Comprueba si ya lo tienes instalado
node --version
# Si el comando no se reconoce, descárgalo desde https://nodejs.org

# 1. Clonar el repositorio
git clone https://github.com/Jennydev-25/kata-dni.git

# 2. Entrar en la carpeta
cd kata-dni

# 3. Instalar dependencias
npm install

# 4. Ejecutar los tests
npm test

# 5. Ejecutar los tests en modo watch
npm run test-w

# 6. Abrir el proyecto en el navegador
#    → Click derecho sobre index.html en VS Code
#    → Selecciona "Open with Live Server"
#    → Se abrirá en http://127.0.0.1:5500
```

---

## 📐 Planificación

Estructura de archivos decidida antes de programar, siguiendo el patrón de modularización por responsabilidad (`main.js`, `controller.js`, `events.js`, `htmlComponents.js`, `rendering.js`, `service.js`, `validations.js`):

**Fase 1 — Lógica y tests:**

- **`package.json`** — manifiesto del proyecto: dependencias, metadatos y scripts (`test`, `test-w`...)
- **`package-lock.json`** — fija las versiones exactas de las dependencias instaladas (se genera solo, no se edita a mano); no se sube a GitHub, según indicación del profesor (está en `.gitignore`)
- **`node_modules/`** — carpeta con el código de las dependencias instaladas; no se sube a GitHub (está en `.gitignore`)
- **`src/js/`**:
  - `service.js` → función `calculateLetter()`, el algoritmo del módulo 23
  - `validations.js` → validación de tipo y de rango, separada del cálculo
- **`tests/`** → tests unitarios con Vitest, uno por módulo (`service.test.js`, `validations.test.js`)
- **`assets/imgs/`** — capturas del proyecto

**Fase 2 — Interfaz visual:**

- **`index.html`** — marcado semántico HTML5 con pantalla de inicio, formulario y teclado
- **`main.js`** (en la raíz) — punto de entrada de la aplicación: importa el controller y lo arranca, sin lógica propia
- **`src/js/`**:
  - `controller.js` → orquesta: conecta los eventos al arrancar
  - `events.js` → listeners de los botones (Iniciar, Calcular, Cancelar) y del teclado numérico
  - `htmlComponents.js` → referencias a los elementos del DOM
  - `rendering.js` → pinta el resultado, el error o el mensaje de cancelación en pantalla
- **`src/sass/`** → estilos modulares con metodología BEM:
  - `styles.scss` → punto de entrada: importa Google Fonts, Material Icons y todos los partials con `@use`
  - `_variables.scss` → colores y fuentes (Space Mono)
  - `_base.scss` → reset y estilos globales
  - `_header.scss` → estilos del header
  - `_start-screen.scss` → estilos del botón y pantalla de inicio
  - `_checker.scss` → estilos del formulario, input y botones
  - `_result-box.scss` → estilos de la caja de resultado
  - `_keypad.scss` → estilos del teclado numérico
  - `_footer.scss` → estilos del footer
- **`src/css/`** → CSS compilado desde Sass (generado automáticamente)

---

## 📋 Historial de commits

<details>
<summary>Ver lista completa de commits (Fase 1 y Fase 2)</summary>

**Fase 1 — Lógica y tests (commits atómicos):**

- `docs`: add project README
- `chore`: initialize npm project
- `chore`: install vitest as dev dependency
- `chore`: add test scripts to package.json
- `feat`: add project folder structure
- `test`: add test for valid type returns true
- `feat`: implement isValidType in validations module
- `test`: add test for invalid type returns false
- `test`: add test for valid range returns true
- `feat`: implement isValidRange in validations module
- `refactor`: simplify isValidType and isValidRange to single return
- `test`: add test for lower boundary returns true
- `test`: add test for out of range returns false
- `test`: add test for negative number returns false
- `test`: add test for valid number returns correct letter
- `feat`: implement calculateLetter returns hardcoded letter
- `test`: add test for lower boundary returns correct letter
- `feat`: implement calculateLetter with if for boundary case
- `test`: add test for out of range number returns error message
- `feat`: add range validation to calculateLetter
- `test`: add test for negative number returns error message
- `feat`: add negative number validation to calculateLetter
- `refactor`: merge range validations into single condition
- `test`: add test for non-numeric input returns error message
- `feat`: add type validation to calculateLetter
- `refactor`: merge all validations into single condition
- `test`: add test for upper boundary returns correct letter
- `feat`: implement calculateLetter with modulo 23 algorithm
- `refactor`: extract letters array to module constant
- `refactor`: integrate validations module into service
- `chore`: install jsdom for DOM testing
- `chore`: add vitest config with jsdom environment
- 

**Fase 2 — Interfaz visual (commits atómicos):**

- `feat`: add html boilerplate and base structure
- `chore`: install and configure sass
- `chore`: add sass scripts to package.json
- `style`: add sass variables
- `style`: add base styles and reset
- `feat`: add header markup
- `style`: add header styles
- `feat`: add css link to index.html
- `feat`: add start screen markup
- `style`: add start screen styles and button animation
- `style`: add Google Fonts and Material Icons imports to styles.scss
- `feat`: add checker form markup
- `style`: add checker form styles
- `feat`: add result box markup
- `style`: add result box styles 
- `feat`: add keypad markup
- `style`: add keypad styles 
- `feat`: add footer markup
- `style`: add footer styles
- `refactor`: reorganize sass files into abstracts, base, layout and components folders
- `feat`: add htmlComponents.js with DOM references
- `feat`: add rendering.js to display results and errors
- `feat`: implement events and user interaction handlers
- `feat`: add controller.js to wire up events
- `feat`: add main.js entry point
- `style`: update base styles
- `style`: update sass variables
- `style`: update header styles
- `style`: update start screen styles and add description paragraph
- `style`: refactor sass partials to remove hardcoded values
- `refactor`: use variables in base styles
- `refactor`: use variables in header styles
- `refactor`: use variables in start screen styles
- `refactor`: use variables in checker styles
- `refactor`: use variables in result box styles
- `refactor`:
- `refactor`:

</details>

---

## 🧪 Tests

Seis escenarios **BDD** con patrón **AAA** (Arrange · Act · Assert):

---

### Escenario 1 — Iniciar el sistema

- **Dado** que el usuario está en la página para iniciar la aplicación
- **Cuando** hace click en el botón iniciar
- **Entonces** el botón desaparece y se le solicita el número para realizar el cálculo

| Input                     | Output esperado                                       |
| ------------------------- | ----------------------------------------------------- |
| Click en el botón iniciar | El botón se oculta y aparece el formulario de cálculo |

---

### Escenario 2 — DNI válido

- **Dado** que introduzco un número entre 0 y 99999999
- **Cuando** calculo la letra del DNI
- **Entonces** debe devolverse la letra correspondiente según el módulo 23

| Input      | Output esperado |
| ---------- | --------------- |
| `12345678` | `"Z"`           |
| `0`        | `"T"`           |

---

### Escenario 3 — Número fuera de rango

- **Dado** que introduzco un número menor que 0 o mayor que 99999999
- **Cuando** intento calcular la letra
- **Entonces** debe mostrarse el mensaje `"El dato introducido es incorrecto"`

| Input       | Output esperado                       |
| ----------- | ------------------------------------- |
| `100000000` | `"El dato introducido es incorrecto"` |
| `-1`        | `"El dato introducido es incorrecto"` |

---

### Escenario 4 — Dato no numérico

- **Dado** que introduzco un valor que no es un número
- **Cuando** intento calcular la letra
- **Entonces** debe mostrarse el mensaje `"El dato introducido es incorrecto"`

| Input    | Output esperado                       |
| -------- | ------------------------------------- |
| `"hola"` | `"El dato introducido es incorrecto"` |

---

### Escenario 5 — Repetición del proceso

- **Dado** que el usuario no pulsa cancelar
- **Cuando** finaliza un cálculo
- **Entonces** debe volver a solicitar un nuevo número

| Input                        | Output esperado                                             |
| ---------------------------- | ----------------------------------------------------------- |
| Cualquier cálculo completado | El formulario se resetea y queda listo para un nuevo número |

---

### Escenario 6 — Cancelación del proceso

- **Dado** que el usuario pulsa cancelar
- **Cuando** se detecta la cancelación
- **Entonces** el programa debe finalizar

| Input    | Output esperado                              |
| -------- | -------------------------------------------- |
| Cancelar | El programa deja de solicitar nuevos números |

---

## 🛠️ Tecnologías

- **Git & GitHub** — control de versiones con GitFlow
- **Conventional Commits** — mensajes de commit
- **VS Code** — editor de código
- **JavaScript (ES Modules)** — lógica de la aplicación, modulada por responsabilidad
- **Vitest** — tests unitarios (TDD)
- **HTML5** — marcado semántico
- **SASS** — preprocesador CSS (BEM + mobile-first)
- **Google Fonts** — tipografía (Space Mono)
- **Material Icons** — iconografía
- **GitHub Pages** — despliegue

---

## 🔗 Recursos

- [Formula para calcular NIF](https://www.letranif.com/formula-para-calcular-nif/)
- [Git](https://git-scm.com/doc)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [VS Code](https://code.visualstudio.com/docs)
- [JavaScript — MDN](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [Vitest](https://vitest.dev/)
- [HTML — MDN](https://developer.mozilla.org/es/docs/Web/HTML)
- [SASS](https://sass-lang.com/documentation/)
- [Google Fonts](https://fonts.google.com/)
- [Material Icons](https://fonts.google.com/icons)
- [GitHub Pages](https://docs.github.com/es/pages)

---

## ✍️ Autora

**[Jenny Sánchez Requejo](https://github.com/Jennydev-25)**

---
