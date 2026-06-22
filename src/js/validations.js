export function isValidType(value) {
    return typeof value === 'number'
}

export function isValidRange(number) {
    if (number >= 0 && number <= 99999999) {
        return true
    }
    return false
}