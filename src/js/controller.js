import { handleStart, handleKeypad, handleDelete, handleCalculate, handleCancel } from './events.js'

export function initializeApp() {
    handleStart()
    handleKeypad()
    handleDelete()
    handleCalculate()
    handleCancel()
}
