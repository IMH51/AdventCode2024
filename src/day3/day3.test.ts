import { exampleDay3Input, exampleDay3ConditionalInput, day3RawInput } from "./day3-input";
import { sumValidMultiples, sumValidMultiplesWithConditions } from "./day3";

describe("Day 3", () => {
  it("should calculate the sum of valid multiples", () => {
    const exampleSum = sumValidMultiples(exampleDay3Input);
    expect(exampleSum).toBe(161);

    const validSum = sumValidMultiples(day3RawInput);
    expect(validSum).toBe(174336360);
  });

  it('should calculate the sum of valid multiples with conditions', () => {
    const exampleSum = sumValidMultiplesWithConditions(exampleDay3ConditionalInput);
    expect(exampleSum).toBe(48);

    const validSum = sumValidMultiplesWithConditions(day3RawInput);
    expect(validSum).toBe(88802350);
  })
})