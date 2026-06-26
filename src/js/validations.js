export function isValidType(value) {
    return typeof value === 'number'
}

export function isValidRange(number) {
    return Number.isInteger(number) && number >= 0 && number <= 99999999
}