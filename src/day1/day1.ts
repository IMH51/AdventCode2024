export const calculateDistance = (left: number[], right: number[]): number => {
  const sortedLeft = left.sort((a, b) => a - b)
  const sortedRight = right.sort((a, b) => a - b)
  return sortedLeft.reduce((acc, leftNum, index) => {
    const rightNum = sortedRight[index]
    return acc + Math.abs(leftNum - rightNum)
  }, 0)
}

export const calculateSimilarityScore = (left: number[], right: number[]): number => {
  return left.reduce((acc, leftNum) => {
    const rightTotal = right.filter(rightNum => rightNum === leftNum).length
    return acc + (leftNum * rightTotal)
  }, 0)
}