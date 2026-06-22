export function isValidType(value) {
    return typeof value === 'number'
}

export function isValidRange(number) {
    return number >= 0 && number <= 99999999
}