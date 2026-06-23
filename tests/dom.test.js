import { describe, test, expect, beforeEach } from 'vitest'

beforeEach(() => {
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

        document.getElementById('btn-start').click()

        expect(document.getElementById('start-screen').style.display).toBe('none')
    })
})