import { describe, expect, test } from "vitest";
import { parse as parseBlockArray } from "./block";

describe("Ulid", () => {
  describe("new", () => {
    test("should parse Array<Block>", () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data: any = [];
      expect(() => parseBlockArray(data)).not.toThrow();
    });
  });
});
