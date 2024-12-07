import { day6ExampleInputArray, day6RawInputArray } from "./day6-input";
import { getTotalGuardSteps } from "./day6";

describe("Day 6", () => {
  it("should return the correct number of steps for a given input", () => {
    const exampleResult = getTotalGuardSteps(day6ExampleInputArray)
    expect(exampleResult).toBe(41)

    // const result = getTotalGuardSteps(day6RawInputArray)
    // expect(result).toBe(0)
  })
})