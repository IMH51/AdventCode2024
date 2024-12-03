export const calculateDistance = (left: number[], right: number[]): number => {
  const sortedLeft = left.sort((a, b) => a - b)
  const sortedRight = right.sort((a, b) => a - b)

  return sortedLeft.reduce((total, leftNum, index) => {
    const rightNum = sortedRight[index]
    return total + Math.abs(leftNum - rightNum)
  }, 0)
}

export const calculateSimilarityScore = (left: number[], right: number[]): number => 
  left.reduce((total, leftNum) => {
    const rightTotal = right.filter(rightNum => rightNum === leftNum).length
    return total + (leftNum * rightTotal)
  }, 0)