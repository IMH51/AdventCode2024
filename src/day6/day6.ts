const guard = "^"
const wall = "#"
const visited = "X"

const directionModifiers = [[0, -1], [1, 0], [0, 1], [-1, 0]]

const getStartCoordinates = (input: string[][]): [number, number] => {
  const y = input.findIndex(row => row.includes(guard))
  const x = input[y].indexOf(guard)
  return [x, y]
}

const simulateGuardSteps = (input: string[][], x: number, y: number, currentCount = 0, directionIndex = 0): number => {
  const currentCell = input[y]?.[x]

  if (!currentCell) {
    return currentCount
  }

  const [xMod, yMod] = directionModifiers[directionIndex]
 
  if (currentCell === wall) {
    const nextDirectionIndex = directionIndex === 3 ? 0 : directionIndex + 1
    return simulateGuardSteps(input, x - xMod, y - yMod, currentCount, nextDirectionIndex)
  }

  if (currentCell !== guard && currentCell !== visited) {
    currentCount++
  }

  if (currentCell !== visited) {
    input[y][x] = visited
  }

  return simulateGuardSteps(input, x + xMod, y + yMod, currentCount, directionIndex)
}


export const getTotalGuardSteps = (input: string[][]): number => {
  let [startX, startY] = getStartCoordinates(input)
  const totalSteps = simulateGuardSteps(input, startX, startY, 1)
  return totalSteps
}