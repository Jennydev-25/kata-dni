export function calculateLetter(number) {
    if (number === 0) {
        return 'T'
    }
    if (number > 99999999) {
        return 'El dato introducido es incorrecto'
    }
    if (number < 0) {
        return 'El dato introducido es incorrecto'
    }
    return 'Z'
}