import runGame from '../index.js'
import { getRandomInRange } from '../utils.js'

const calculate = (operator, a, b) => {
  switch (operator) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    default:
      throw new Error(`Unknown operator: '${operator}'!`)
  }
}

const generateCalculatorRound = () => {
  const min = 1
  const max = 10
  const firstNumber = getRandomInRange(min, max)
  const secondNumber = getRandomInRange(min, max)
  const operators = ['+', '-', '*']
  const operator = (operators[getRandomInRange(0, operators.length - 1)])
  const question = `${firstNumber} ${operator} ${secondNumber}`
  const correctAnswer = String(calculate(operator, firstNumber, secondNumber))

  return { question, correctAnswer }
}

const startCalculatorGame = () => {
  runGame(generateCalculatorRound, 'What is the result of the expression?')
}

export default startCalculatorGame
