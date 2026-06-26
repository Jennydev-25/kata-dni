export function isValidType(value) {
    return typeof value === 'number'
}

export function isValidRange(number) {
    if (!Number.isInteger(number)) {
        return false
    }
    return number >= 0 && number <= 99999999
}