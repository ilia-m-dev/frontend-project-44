import runGame from '../index.js'
import { getRandomInRange } from '../utils.js'

const getGCD = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

const generateGCDRound = () => {
  const min = 1
  const max = 100
  const firstNum = getRandomInRange(min, max)
  const secondNum = getRandomInRange(min, max)
  const question = `${firstNum} ${secondNum}`
  const correctAnswer = String(getGCD(firstNum, secondNum))

  return { question, correctAnswer }
}

const startGCDGame = () => {
  runGame(generateGCDRound, 'Find the greatest common divisor of given numbers.')
}

export default startGCDGame
