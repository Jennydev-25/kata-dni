// Referencias a los elementos del DOM
export const [startScreen, checker, btnStart, btnCalculate, btnCancel, btnDelete, dniInput, resultBox, keypad] =
    ['start-screen', 'checker', 'btn-start', 'btn-calculate', 'btn-cancel', 'btn-delete', 'dni-input', 'result-box', 'keypad']
        .map(id => document.getElementById(id))