import { splitStringByValue } from "../helpers/splitStringByValue"

const standardOperators = ["+", "*"]

export const concatenationOperators = [...standardOperators, "||"]

const isCalibratedString = (numbers: number[], result: number, operators: string[]): boolean => {
  const possibleTotals = numbers.reduce((results, currentNum, index) => {
    if (!index) return [currentNum]

    return results.flatMap((currentTotal) => (
      operators.map(operator => {
        if (operator === "||") {
          return Number(String(currentTotal) + String(currentNum))
        }
        return eval(currentTotal + operator + currentNum)
      })
    ))
  }, [])

  return possibleTotals.some(total => total === result)
}

export const getTotalCalibrationResult = (inputArray: string[][], operators = standardOperators): number => 
  inputArray.reduce((total, calibration) => {
    const [resultString, numberString] = calibration
    const result = parseInt(resultString)
    const numbers = splitStringByValue(numberString, " ").map(Number)
    const calibratedString = isCalibratedString(numbers, result, operators)
    return calibratedString ? total + result : total
  }, 0)