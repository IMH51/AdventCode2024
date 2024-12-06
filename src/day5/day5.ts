const isValidPageLine = (pageLine: number[], rules: number[][]) =>
  rules.every((rule) => {
    const [first, second] = rule
    const firstIndex = pageLine.indexOf(first)
    const secondIndex = pageLine.indexOf(second)
    if (firstIndex === -1 || secondIndex === -1) return true
    return  firstIndex < secondIndex
  })

const getMiddleValuesTotal = (pageLines: number[][]) =>
  pageLines.reduce((acc, page) => {
    const middleIndex = Math.floor(page.length / 2)
    return acc + page[middleIndex]
  }, 0)

export const getValidPagesTotal = (rules: number[][], pageLines: number[][]) => {
  const validPages = pageLines.filter((pageLine) => isValidPageLine(pageLine, rules))

  return getMiddleValuesTotal(validPages)
}

export const getFixedPagesTotal = (rules: number[][], pageLines: number[][]) => {
  const invalidPages = pageLines.filter((pageLine) => !isValidPageLine(pageLine, rules))

  const fixedPages = invalidPages.map((pageLine) => {
    const validRules = rules.filter(([first, second]) => {
      const firstIndex = pageLine.indexOf(first)
      const secondIndex = pageLine.indexOf(second)
      return ![firstIndex, secondIndex].includes(-1)
    }, pageLine)

    const initialCountObject: Record<string, number> = pageLine.reduce((countObject, value) => ({
      ...countObject,
      [value]: 0
    }), {})

    const valuesFirstCount = validRules.reduce((countObject, [first]) => ({ 
      ...countObject,
      [first]: (countObject[first] || 0) + 1,
    }), initialCountObject)

    const sortedPages = Object.entries(valuesFirstCount).reduce(
      (pageArray, [value, count]) => {
        const valueIndex = pageLine.length - 1 - count
        pageArray[valueIndex] = parseInt(value)

        return pageArray
      }, 
      []
    )
   
    return sortedPages
  })

  return getMiddleValuesTotal(fixedPages)
}