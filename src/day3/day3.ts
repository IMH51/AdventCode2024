const mulRegExp = /mul\(\d{1,3},\d{1,3}\)/g
const conditionalRegExp = /mul\(\d{1,3},\d{1,3}\)|do\(\)|don\'t\(\)/g
const numRegExp = /\d{1,3}/g
const doRegExp = /do\(\)/g
const dontRegExp = /don\'t\(\)/g

const getNextTotal = (currentTotal: number, matchString: string): number => {
  const numberMatches = matchString.match(numRegExp)

  const result = numberMatches?.reduce((total, num) => total * Number(num), 1)

  return currentTotal + (result || 0)
}

export const sumValidMultiples = (input: string): number => {
  const inputMatches = input.match(mulRegExp)

  return inputMatches?.reduce(getNextTotal, 0) || 0
}

export const sumValidMultiplesWithConditions = (input: string): number => {
  const conditionalMatches = input.match(conditionalRegExp)
  if (!conditionalMatches) return 0

  let multiply = true

  return conditionalMatches?.reduce((total, matchString) => {
    if (doRegExp.test(matchString)) { 
      multiply = true
      return total
    }
    if (dontRegExp.test(matchString)) {
      multiply = false
      return total
    }

    if (multiply) return getNextTotal(total, matchString)

    return total
  }, 0)
}