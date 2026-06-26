import { describe, test, expect, beforeEach, vi } from 'vitest'

beforeEach(() => {
    vi.resetModules()
    document.body.innerHTML = `
        <section class="start-screen" id="start-screen">
            <button id="btn-start">Iniciar</button>
        </section>
        <section class="checker" id="checker" style="display:none">
            <div class="checker__left">
                <input id="dni-input" type="text" />
                <button id="btn-calculate">Calcular</button>
                <button id="btn-cancel">Cancelar</button>
                <div id="result-box"></div>
            </div>
            <div class="checker__right">
                <div id="keypad">
                    <button class="keypad__key" data-key="1">1</button>
                </div>
                <button id="btn-delete">Borrar</button>
            </div>
        </section>
    `
})

// Funcion auxiliar para iniciar la app en los tests
async function iniciarApp() {
    const { handleStart } = await import('../src/js/events.js')
    handleStart()
    document.getElementById('btn-start').click()
}

// Funcion auxiliar para cancelar la app en los tests
async function cancelarApp() {
    const { handleCancel } = await import('../src/js/events.js')
    handleCancel()
    document.getElementById('btn-cancel').click()
}

// Funcion auxiliar para reiniciar la app en los tests
async function reiniciarApp() {
    await iniciarApp()
    await cancelarApp()
    document.querySelector('.checker__btn--restart').click()
}

describe('Escenario 1 - Iniciar el sistema', () => {
    test('Debería ocultar la pantalla de inicio al pulsar Iniciar', async () => {
        await iniciarApp()
        expect(document.getElementById('start-screen').style.display).toBe('none')
    })

    test('Debería mostrar el checker al pulsar Iniciar', async () => {
        await iniciarApp()
        expect(document.getElementById('checker').style.display).toBe('flex')
    })
})

describe('Escenario 5 - Cancelar el proceso', () => {
    test('Debería deshabilitar los controles al pulsar Cancelar', async () => {
        await iniciarApp()
        await cancelarApp()

        expect(document.getElementById('dni-input').disabled).toBe(true)
    })
})

describe('Escenario 6 - Reiniciar el proceso', () => {
    test('Debería habilitar los controles al pulsar Reiniciar', async () => {
        await reiniciarApp()

        expect(document.getElementById('dni-input').disabled).toBe(false)
    })

    test('Debería limpiar el input al pulsar Reiniciar', async () => {
        await reiniciarApp()

        expect(document.getElementById('dni-input').value).toBe('')
    })
})