#!/usr/bin/env node

import userGreeting from '../src/cli.js'
import readlineSync from 'readline-sync'
import { getRandomInRange } from '../src/utils.js'

const isEven = (num) => num % 2 === 0 ? true : false;

const startEvenGame = () => {
    const usersName = userGreeting();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for (let i = 0; i < 3; i++) {
        const randomNum = getRandomInRange(0, 100);
        const userAnswer = readlineSync.question(`Question: ${randomNum} `);
        const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${usersName}!`)
            return
        }

        console.log('Correct!')
    }
}

startEvenGame();