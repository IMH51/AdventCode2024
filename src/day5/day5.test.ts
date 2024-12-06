import { day5ExamplePageLines, day5ExampleRules, day5PageLines, day5Rules } from "./day5-input";
import { getValidPagesTotal, getFixedPagesTotal } from "./day5";

describe("day5", () => {
  it("returns the correct total for the middle pages of valid lines", () => {
    const exampleResult = getValidPagesTotal(day5ExampleRules, day5ExamplePageLines);
    expect(exampleResult).toBe(143)

    const result = getValidPagesTotal(day5Rules, day5PageLines);
    expect(result).toBe(5268)
  })

  it("returns the correct total for the middle pages of fixed lines", () => {
    const exampleResult = getFixedPagesTotal(day5ExampleRules, day5ExamplePageLines);
    expect(exampleResult).toBe(123)

    const result = getFixedPagesTotal(day5Rules, day5PageLines);
    expect(result).toBe(5799)
  })
})