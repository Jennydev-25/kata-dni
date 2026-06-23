import { describe, test, expect, beforeEach, vi } from 'vitest'

beforeEach(() => {
    vi.resetModules()
    document.body.innerHTML = `
        <section class="start-screen" id="start-screen">
            <button id="btn-start">Iniciar</button>
        </section>
        <section class="checker" id="checker" style="display:none">
            <input id="dni-input" type="text" />
            <button id="btn-calculate">Calcular</button>
            <button id="btn-cancel">Cancelar</button>
            <button id="btn-delete">Borrar</button>
            <div id="result-box"></div>
            <div id="keypad">
                <button class="keypad__key" data-key="1">1</button>
            </div>
        </section>
    `
})

describe('Escenario 1 - Iniciar el sistema', () => {
    test('Debería ocultar la pantalla de inicio al pulsar Iniciar', async () => {
        const { handleStart } = await import('../src/js/events.js')
        handleStart()

        const btnStart = document.getElementById('btn-start')
        const startScreen = document.getElementById('start-screen')

        btnStart.click()

        expect(startScreen.style.display).toBe('none')
    })

    test('Debería mostrar el checker al pulsar Iniciar', async () => {
        const { handleStart } = await import('../src/js/events.js')
        handleStart()

        const btnStart = document.getElementById('btn-start')
        const checker = document.getElementById('checker')

        btnStart.click()

        expect(checker.style.display).toBe('flex')
    })
})