export function calculateLetter(number) {
    if (typeof number !== 'number' || number > 99999999 || number < 0) {
        return 'El dato introducido es incorrecto'
    }
    if (number === 0) {
        return 'T'
    }
    return 'Z'
}