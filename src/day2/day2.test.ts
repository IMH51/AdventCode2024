import { levelsArray } from "./day2-input";
import { calculateSafeLevels, calculateProblemDampenerSafeLevels } from "./day2";

describe("Day 2", () => {
  it("should calculate the number of safe levels", () => {
    const safeLevels = calculateSafeLevels(levelsArray);
    expect(safeLevels).toBe(230);
  });

  it("should calculate the number of safe levels when using the problem dampener", () => {
    const safeLevels = calculateProblemDampenerSafeLevels(levelsArray);
    expect(safeLevels).toBe(301);
  });
})