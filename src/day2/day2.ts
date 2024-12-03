const isSafeStep = (previousStep: number, step: number): boolean => Math.abs(step - previousStep) <= 3

const isDirectionSafe = (level: number[], direction: 'asc' | 'desc'): boolean => 
  level.every((step, index) => {
    if (!index) return true

    const previousStep = level[index - 1]
    const isSameDirection = direction === 'asc' ? step > previousStep : step < previousStep

    return isSameDirection && isSafeStep(previousStep, step)
  })

const isSafeLevel = (level: number[]): boolean => 
  isDirectionSafe(level, 'asc') || isDirectionSafe(level, 'desc')

export const calculateSafeLevels = (levelsArray: number[][]): number => 
  levelsArray.reduce((acc, level) => isSafeLevel(level) ? acc + 1 : acc, 0)

export const calculateProblemDampenerSafeLevels = (levelsArray: number[][]): number => 
  levelsArray.reduce((acc, level) => {
    const alteredLevels = level.map((_, index) => {
      const newArray = [...level]
      newArray.splice(index, 1)

      return newArray
    })
    
    const isDampenerSafeLevel = alteredLevels.some(isSafeLevel)

    return isDampenerSafeLevel ? acc + 1 : acc
  }, 0)