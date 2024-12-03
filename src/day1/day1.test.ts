import { leftExampleInput, rightExampleInput, leftRawInput, rightRawInput } from "./day1-input";
import { calculateDistance, calculateSimilarityScore } from "./day1";

describe("Day 1", () => {
  it("should calculate the distance between two arrays of inputs", () => {
    const exampleDistance = calculateDistance(leftExampleInput, rightExampleInput);
    expect(exampleDistance).toBe(11)

    const distance = calculateDistance(leftRawInput, rightRawInput);
    expect(distance).toBe(2430334);
  });

  it("should calculate the similarity score between two arrays of inputs", () => {
    const exampleSimilarityScore = calculateSimilarityScore(leftExampleInput, rightExampleInput);
    expect(exampleSimilarityScore).toBe(31)

    const similarityScore = calculateSimilarityScore(leftRawInput, rightRawInput);
    expect(similarityScore).toBe(28786472);
  });
})