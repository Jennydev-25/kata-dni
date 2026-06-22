import { describe, test, expect } from 'vitest'
import { isValidType, isValidRange } from '../src/js/validations.js'

describe('isValidType', () => {
    test('Debería devolver true si el dato es un número', () => {
        const value = 12345678
        const result = isValidType(value)
        expect(result).toBe(true)
    })

    test('Debería devolver false si el dato no es un número', () => {
        const value = 'hola'
        const result = isValidType(value)
        expect(result).toBe(false)
    })
})

describe('isValidRange', () => {
    test('Debería devolver true si el número está dentro del rango válido', () => {
        const number = 12345678
        const result = isValidRange(number)
        expect(result).toBe(true)
    })

    test('Debería devolver true si el número es el límite inferior (0)', () => {
        const number = 0
        const result = isValidRange(number)
        expect(result).toBe(true)
    })

    test('Debería devolver false si el número es mayor que 99999999', () => {
        const number = 100000000
        const result = isValidRange(number)
        expect(result).toBe(false)
    })
})