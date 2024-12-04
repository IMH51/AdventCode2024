import { exampleWordsearchArrays, wordsearchArrays } from "./day4-input";
import { getXmasCount, getXmasCrossCount } from "./day4";

describe("Day 4", () => {
  it('should return the correct number of XMAS occurrences in the wordsearch', () => {
    const exampleResult = getXmasCount(exampleWordsearchArrays)
    expect(exampleResult).toBe(18)

    const result = getXmasCount(wordsearchArrays)
    expect(result).toBe(2500)
  })

  it('should return the correct number of X-MAS occurrences in the wordsearch', () => {
    const exampleResult = getXmasCrossCount(exampleWordsearchArrays)
    expect(exampleResult).toBe(9)

    const result = getXmasCrossCount(wordsearchArrays)
    expect(result).toBe(1933)
  })
})