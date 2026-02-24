import readlineSync from 'readline-sync'

const runGame = (getRound, rule) => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)

  console.log(rule)
  const roundsCount = 3
  for (let i = 0; i < roundsCount; i += 1) {
    const { question, correctAnswer } = getRound()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')
    if (correctAnswer === userAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`)

      return
    }
  }
  console.log(`Congratulations, ${userName}!`)
}

export default runGame
