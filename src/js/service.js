import { isValidType, isValidRange } from './validations.js'

const LETTERS = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']

export const ERROR_MESSAGE = 'El dato introducido es incorrecto'

export function calculateLetter(number) {
    if (!isValidType(number) || !isValidRange(number)) {
        return ERROR_MESSAGE
    }
    const remainder = number % 23
    return LETTERS[remainder]
}