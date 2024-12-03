import { leftInput, rightInput } from "./day1-input";
import { calculateDistance, calculateSimilarityScore } from "./day1";

describe("Day 1", () => {
  it("should calculate the distance between two arrays", () => {
    const distance = calculateDistance(leftInput, rightInput);
    expect(distance).toBe(2430334);
  });

  it("should calculate the similarity score between two arrays", () => {
    const similarityScore = calculateSimilarityScore(leftInput, rightInput);
    expect(similarityScore).toBe(28786472);
  });
})