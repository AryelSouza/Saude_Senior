export const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min)

export const randomChar = () =>
  String.fromCharCode(randomNumber(65, 90))

export const range = (min, max) => {
  const array = []

  for (let i = 0; i <= max; i += 1) {
    array.push(i)
  }

  return array
}

export const randomDirection = () => {
  const x = randomNumber(-1, 1)
  const y = randomNumber(-1, 1)

  if (x === 0 && y === 0) {
    return randomDirection()
  }

  return [ x, y ]
}

// https://stackoverflow.com/a/2450976
export const shuffleArray = (array) => {
  let currentIndex = array.length
  let temporaryValue
  let randomIndex

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}