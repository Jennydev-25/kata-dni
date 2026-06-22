import { describe, it, expect } from 'vitest'
import { isValidType } from '../src/js/validations.js'

describe('isValidType', () => {
    it('devuelve true si el dato es un número', () => {
        const value = 12345678
        const result = isValidType(value)
        expect(result).toBe(true)
    })
})