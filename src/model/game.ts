import { createDomain, sample } from 'effector';
import { generateExpression } from '../utils/ganerateExpression';
import type { Expression, UserChoice } from '../types/model/game.types';

const gameDomain = createDomain();

export const $score = gameDomain.store(0);
const addScore = gameDomain.event();

export const gameStarted = gameDomain.event();
const countdownStarted = gameDomain.event();

export const $currentExpression = gameDomain.store<Expression>(null)
const generateRandomExpression = gameDomain.event<number>();

//const $timeLeft = gameDomain.store(5000);

export const userChose = gameDomain.event<number>();

const checkFx = gameDomain.effect<UserChoice, void>();

$score
    .on(addScore, c => c + 1);

$currentExpression
    .on(generateRandomExpression, (_,) => generateExpression('simple')) // a!

checkFx.use(({ expression, userChoise }) => {
    if (eval(expression!) === userChoise) return
    throw new Error('Wrong answer')
})

sample({
    clock: gameStarted,
    source: $score,
    target: generateRandomExpression
});

sample({
    clock: userChose,
    source: $currentExpression,
    fn: (c, s) => ({ expression: c, userChoise: s }),
    target: checkFx
});

sample({
    clock: checkFx.done,
    source: $score,
    target: [countdownStarted, generateRandomExpression, addScore]
});