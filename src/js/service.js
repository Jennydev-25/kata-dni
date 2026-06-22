export function calculateLetter(number) {
    if (typeof number !== 'number' || number > 99999999 || number < 0) {
        return 'El dato introducido es incorrecto'
    }
    const letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
    const remainder = number % 23
    return letters[remainder]
}