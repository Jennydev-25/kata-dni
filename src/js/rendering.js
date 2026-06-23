import { resultBox } from './htmlComponents.js'

export function renderResult(letter, number) {
    const remainder = number % 23
    resultBox.innerHTML = `
        <span class="result-box__letter">${letter}</span>
        <div class="result-box__chips">
            <span class="result-box__chip result-box__chip--number">${number}</span>
            <span class="result-box__chip result-box__chip--op">÷ 23</span>
            <span class="result-box__chip result-box__chip--arrow">→</span>
            <span class="result-box__chip result-box__chip--resto">resto <strong>${remainder}</strong></span>
            <span class="result-box__chip result-box__chip--arrow">→</span>
            <span class="result-box__chip result-box__chip--result">${letter}</span>
        </div>
    `
}

export function renderError(message) {
    resultBox.innerHTML = `
        <p class="result-box__error">${message}</p>
    `
}

export function renderMessage(message) {
    resultBox.innerHTML = `
        <p class="result-box__placeholder">${message}</p>
    `
}

export function clearResult() {
    resultBox.innerHTML = ''
}