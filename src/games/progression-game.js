import runGame from '../index.js'
import { getRandomInRange } from '../utils.js'

const buildProgression = (start, step, length) => {
  const result = []

  for (let index = 0; index < length; index += 1) {
    const currentElement = start + index * step
    result.push(currentElement)
  }

  return result
}

const generateProgressionRound = () => {
  const progressionLength = 10
  const hidden = '..'
  const start = getRandomInRange(1, 10)
  const step = getRandomInRange(1, 10)

  const progression = buildProgression(start, step, progressionLength)

  const hiddenIndex = getRandomInRange(0, progression.length - 1)
  const correctAnswer = String(progression[hiddenIndex])
  progression[hiddenIndex] = hidden
  const question = progression.join(' ')

  return { question, correctAnswer }
}

const runProgressionGame = () => {
  runGame(generateProgressionRound, 'What number is missing in the progression?')
}

export default runProgressionGame
