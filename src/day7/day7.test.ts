import { day7ExampleInputArrays, day7InputArrays } from "./day7input";
import { getTotalCalibrationResult, concatenationOperators } from "./day7";

describe("day7", () => {
  it("returns the correct total for a given array", () => {
    const exampleResult = getTotalCalibrationResult(day7ExampleInputArrays)
    expect(exampleResult).toEqual(3749)

    const result = getTotalCalibrationResult(day7InputArrays)
    expect(result).toEqual(8401132154762)
  })

  it('returns the correct total for a given array with concatenation operators', () => {
    const exampleResult = getTotalCalibrationResult(day7ExampleInputArrays, concatenationOperators)
    expect(exampleResult).toEqual(11387)

    const result = getTotalCalibrationResult(day7InputArrays, concatenationOperators)
    expect(result).toEqual(95297119227552)
  })
})