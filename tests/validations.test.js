import { describe, test, expect } from 'vitest'
import { isValidType, isValidRange } from '../src/js/validations.js'

describe('isValidType', () => {
    test('Deberia devolver true si el dato es un numero', () => {
        const value = 12345678
        const result = isValidType(value)
        expect(result).toBe(true)
    })

    test('Deberia devolver false si el dato no es un numero', () => {
        const value = 'hola'
        const result = isValidType(value)
        expect(result).toBe(false)
    })
})

describe('isValidRange', () => {
    test('Deberia devolver true si el numero esta dentro del rango valido', () => {
        const number = 12345678
        const result = isValidRange(number)
        expect(result).toBe(true)
    })

    test('Deberia devolver true si el numero es el limite inferior (0)', () => {
        const number = 0
        const result = isValidRange(number)
        expect(result).toBe(true)
    })

    test('Deberia devolver false si el numero es mayor que 99999999', () => {
        const number = 100000000
        const result = isValidRange(number)
        expect(result).toBe(false)
    })

    test('Deberia devolver false si el numero es negativo', () => {
        const number = -1
        const result = isValidRange(number)
        expect(result).toBe(false)
    })

    test('Deberia devolver false si el numero es decimal', () => {
        const number = 0.5
        const result = isValidRange(number)
        expect(result).toBe(false)
    })
})