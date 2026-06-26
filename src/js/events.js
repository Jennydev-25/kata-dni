import { btnStart, btnCalculate, btnCancel, btnDelete, dniInput, startScreen, checker, keypad } from './htmlComponents.js'
import { calculateLetter, ERROR_MESSAGE } from './service.js'
import { renderResult, renderError, renderMessage, clearResult } from './rendering.js'

const GUIDE_MESSAGE = 'Introduce tu numero de DNI'
const MAX_DIGITS = 8

// Habilita o deshabilita los controles del checker
function setDisabled(disabled) {
    dniInput.disabled = disabled
    btnCalculate.disabled = disabled
    btnCancel.disabled = disabled
    keypad.querySelectorAll('.keypad__key').forEach(key => key.disabled = disabled)
}

// Funcion auxiliar para calcular la letra del DNI
function calculate() {
    if (dniInput.value === '') {
        renderMessage(GUIDE_MESSAGE)
        return
    }
    const number = parseInt(dniInput.value)
    const result = calculateLetter(number)
    if (result === ERROR_MESSAGE) {
        renderError(result)
    } else {
        renderResult(result, number)
    }
}

// Evento boton iniciar
export function handleStart() {
    btnStart.addEventListener('click', () => {
        startScreen.style.display = 'none'
        startScreen.setAttribute('aria-hidden', 'true')
        checker.style.display = 'flex'
        checker.removeAttribute('aria-hidden')
        renderMessage(GUIDE_MESSAGE)
    })
}

// Eventos teclado numerico
export function handleKeypad() {
    keypad.addEventListener('click', (event) => {
        const key = event.target.closest('[data-key]')
        if (!key) return
        if (dniInput.value.length >= MAX_DIGITS) return

        dniInput.value += key.dataset.key
        clearResult()

        key.classList.add('keypad__key--active')
        setTimeout(() => key.classList.remove('keypad__key--active'), 150)
    })

    // Permite escribir con el teclado fisico
    document.addEventListener('keydown', (event) => {
        if (dniInput.disabled) return
        if (event.key >= '0' && event.key <= '9') {
            if (dniInput.value.length >= MAX_DIGITS) return
            dniInput.value += event.key
            clearResult()
        }
        if (event.key === 'Backspace') {
            dniInput.value = dniInput.value.slice(0, -1)
            clearResult()
        }
        if (event.key === 'Enter') {
            calculate()
        }
    })
}

// Evento boton borrar
export function handleDelete() {
    btnDelete.addEventListener('click', () => {
        dniInput.value = dniInput.value.slice(0, -1)
        clearResult()
    })
}

// Evento boton calcular
export function handleCalculate() {
    btnCalculate.addEventListener('click', calculate)
}

// Evento boton cancelar
export function handleCancel() {
    btnCancel.addEventListener('click', () => {
        setDisabled(true)
        renderMessage('Proceso finalizado — pulsa Reiniciar para continuar')

        const checkerRight = checker.querySelector('.checker__right')
        const btnReiniciar = document.createElement('button')
        btnReiniciar.className = 'checker__btn checker__btn--restart'
        btnReiniciar.textContent = 'Reiniciar'
        btnReiniciar.addEventListener('click', () => {
            setDisabled(false)
            dniInput.value = ''
            clearResult()
            renderMessage(GUIDE_MESSAGE)
            btnReiniciar.remove()
        })

        checkerRight.appendChild(btnReiniciar)
    })
}