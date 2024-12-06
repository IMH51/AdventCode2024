const guard = "^"
const wall = "#"
const visitied = "X"
const cell = "."

const directionModifiers = [[0, -1], [1, 0], [0, 1], [-1, 0]]

const getStartCoordinates = (input: string[][]): [number, number] => {
  const guardRow = input.find(row => row.includes(guard))
  const y = input.indexOf(guardRow)
  const x = guardRow.indexOf(guard)
  return [x, y]
}

const getNextCell = (input: string[][], x: number, y: number, directionIndex: number): string => {
  const [xModifier, yModifier] = directionModifiers[directionIndex]
  const xCoord = x + xModifier
  const yCoord = y + yModifier
  return input[yCoord]?.[xCoord]
}

const getNextDirectionIndex = (input: string[][], x:  number, y: number, currentIndex: number): number => {
  const nextIndex = currentIndex === 3 ? 0 : currentIndex + 1
  const nextCell = getNextCell(input, x, y, nextIndex)

  if (nextCell === wall) {
    return getNextDirectionIndex(input, x, y, nextIndex)
  }

  return nextIndex
}

const simulateGuardSteps = (input: string[][], x: number, y: number, currentCount = 0, directionIndex = 0): number => {
  const nextCell = getNextCell(input, x, y, directionIndex)

  if (!nextCell) return currentCount
 
  if (nextCell === wall) {
    const nextDirectionIndex = getNextDirectionIndex(input, x, y, directionIndex)
    return simulateGuardSteps(input, x, y, currentCount, nextDirectionIndex)
  }

  const [xModifier, yModifier] = directionModifiers[directionIndex]

  if (nextCell === cell) {
    input[y + yModifier][x + xModifier] = visitied
    currentCount++
  }

  return simulateGuardSteps(input, x + xModifier, y + yModifier, currentCount, directionIndex)
}


export const getTotalGuardSteps = (input: string[][]): number => {
  let [startX, startY] = getStartCoordinates(input)
  input[startY][startX] = visitied
  const totalSteps = simulateGuardSteps(input, startX, startY, 1)
  return totalSteps
}