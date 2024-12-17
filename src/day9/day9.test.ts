import { day9ExampleInput, day9RawInput } from "./day9-input";
import { getFileSystemChecksum, getUnfragmentedFileSystemChecksum } from "./day9";

describe("day9", () => {
  describe("getFileSystemChecksum", () => {
    it("returns the correct total for a given file system input", () => {
      const exampleResult = getFileSystemChecksum(day9ExampleInput)
      expect(exampleResult).toBe(1928);

      const result = getFileSystemChecksum(day9RawInput)
      expect(result).toBe(6346871685398);
    });

    it("returns the correct total for a given file system input that is unfragmented", () => {
      const exampleResult = getUnfragmentedFileSystemChecksum(day9ExampleInput)
      expect(exampleResult).toBe(2858);

      // const result = getUnfragmentedFileSystemChecksum(day9RawInput)
      // expect(result).toBe(6346871685398);
    });
  });
});