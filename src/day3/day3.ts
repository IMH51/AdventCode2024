const mulRegex = new RegExp(/mul\(\d{1,3},\d{1,3}\)/g)
const conditionalRegex = new RegExp(/mul\(\d{1,3},\d{1,3}\)|do\(\)|don\'t\(\)/g)
const numRegex = new RegExp(/\d{1,3}/g)
const doRegex = new RegExp(/do\(\)/g)
const dontRegex = new RegExp(/don\'t\(\)/g)

const getNextTotal = (currentTotal: number, matchString: string): number => {
  const numberMatches = matchString.match(numRegex)
  const result = numberMatches?.reduce((total, num) => total * Number(num), 1) || 0
  return currentTotal + result
}

export const sumValidMultiples = (input: string): number => {
  const inputMatches = input.match(mulRegex)
  return inputMatches?.reduce(getNextTotal, 0) || 0
}

export const sumValidMultiplesWithConditions = (input: string): number => {
  const conditionalMatches = input.match(conditionalRegex)
  let multiply = true
  return conditionalMatches?.reduce((acc, matchString) => {
    if (doRegex.test(matchString)) { 
      multiply = true
      return acc
    }
    if (dontRegex.test(matchString)) {
      multiply = false
      return acc
    }
    if (multiply) {
      return getNextTotal(acc, matchString)
    }
    return acc
  }, 0) || 0
}