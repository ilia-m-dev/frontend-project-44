import runGame from '../index.js'
import { getRandomInRange } from '../utils.js'

const isEven = num => num % 2 === 0 ? true : false

const generateEvenRound = () => {
  const min = 1
  const max = 10
  const num = getRandomInRange(min, max)
  const question = `${num}`
  const correctAnswer = isEven(num) ? 'yes' : 'no'

  return { question, correctAnswer }
}

const startEvenGame = () => {
  runGame(generateEvenRound, 'Answer "yes" if the number is even, otherwise answer "no".')
}

export default startEvenGame
