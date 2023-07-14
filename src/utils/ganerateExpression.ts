
export const generateExpression = (level: 'simple' | 'medium' | 'hard') => {
    if (level === 'simple') {
        const expressions = ['2 + 2', '3 + 1', '1 + 3', '2 + 1', '1 + 2', '1 + 1', '4 - 1', '4 - 2', '3 - 1'];
        return expressions[randomIntFromInterval(0, 8)]
    }
}

function randomIntFromInterval(min: number, max: number) {  
  return Math.floor(Math.random() * (max - min + 1) + min)
}