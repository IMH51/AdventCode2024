import { exampleLevelsArray, levelsArray } from "./day2-input";
import { calculateSafeLevels, calculateProblemDampenerSafeLevels } from "./day2";

describe("Day 2", () => {
  it("should calculate the number of safe levels", () => {
    const exampleSafeLevels = calculateSafeLevels(exampleLevelsArray);
    expect(exampleSafeLevels).toBe(2);

    const safeLevels = calculateSafeLevels(levelsArray);
    expect(safeLevels).toBe(230);
  });

  it("should calculate the number of safe levels when using the problem dampener", () => {
    const exampleSafeLevelsWithDampener = calculateProblemDampenerSafeLevels(exampleLevelsArray);
    expect(exampleSafeLevelsWithDampener).toBe(4);

    const safeLevelsWithDampener = calculateProblemDampenerSafeLevels(levelsArray);
    expect(safeLevelsWithDampener).toBe(301);
  });
})