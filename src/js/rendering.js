import { resultBox } from './htmlComponents.js'

export function renderResult(letter, number) {
    const remainder = number % 23
    resultBox.innerHTML = `
        <p class="result-box__letter">${letter}</p>
        <div class="result-box__chips">
            <span class="result-box__chip">${number}</span>
            <span class="result-box__arrow">÷ 23</span>
            <span class="result-box__arrow">→</span>
            <span class="result-box__chip">resto ${remainder}</span>
            <span class="result-box__arrow">→</span>
            <span class="result-box__chip">${letter}</span>
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
        <p class="result-box__message">${message}</p>
    `
}

export function clearResult() {
    resultBox.innerHTML = ''
}
