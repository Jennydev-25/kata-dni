import { describe, test, expect } from 'vitest'
import { calculateLetter } from '../src/js/service.js'

describe('calculateLetter', () => {
    test('Debería devolver la letra correcta para un número válido', () => {
        const number = 12345678
        const result = calculateLetter(number)
        expect(result).toBe('Z')
    })

    test('Debería devolver la letra correcta para el límite inferior (0)', () => {
        const number = 0
        const result = calculateLetter(number)
        expect(result).toBe('T')
    })

    test('Debería devolver un mensaje de error si el número está fuera de rango', () => {
        const number = 100000000
        const result = calculateLetter(number)
        expect(result).toBe('El dato introducido es incorrecto')
    })
})