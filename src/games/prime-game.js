import runGame from '../index.js'
import { getRandomInRange } from '../utils.js'

const isPrime = (num) => {
  if (num < 2) return false

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false
  }

  return true
}

const generatePrimeRound = () => {
  const min = 1
  const max = 50

  const number = getRandomInRange(min, max)
  const question = String(number)
  const correctAnswer = isPrime(number) ? 'yes' : 'no'

  return { question, correctAnswer }
}

const startPrimeGame = () => {
  runGame(generatePrimeRound, 'Answer "yes" if given number is prime. Otherwise answer "no".')
}

export default startPrimeGame
