const isSafeStep = (step: number, previousStep: number): boolean => Math.abs(step - previousStep) <= 3

const isSafeLevel = (level: number[]): boolean => {
  const descArray = level.every((step, index) => 
    index > 0 ? step < level[index - 1] && isSafeStep(step, level[index - 1]) : true
  )
  const ascArray = level.every((step, index) => 
    index > 0 ? step > level[index - 1] && isSafeStep(step, level[index - 1]) : true
  )
  return descArray || ascArray
}

export const calculateSafeLevels = (levelsArray: number[][]): number => {
  return levelsArray.reduce((acc, level) => {
    return isSafeLevel(level) ? acc + 1 : acc
  }, 0)
}

export const calculateProblemDampenerSafeLevels = (levelsArray: number[][]): number => {
  return levelsArray.reduce((acc, level) => {
    const alteredLevels = level.map((_, index) => {
      const newArray = [...level]
      newArray.splice(index, 1)
      return newArray
    })
    const safeLevel = alteredLevels.some(isSafeLevel)
    return safeLevel ? acc + 1 : acc
  }, 0)
}