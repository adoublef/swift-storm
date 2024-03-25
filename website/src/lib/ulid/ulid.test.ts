import { describe, expect, test } from "vitest";
import { Ulid } from "./ulid";

describe("Ulid", () => {
  describe("new", () => {
    test("should create a new Ulid", () => {
      expect(() => new Ulid()).not.toThrow();
    });
    test("should throw if input is invalid", () => {
      expect(() => new Ulid("invalid")).toThrow();
    });
  });
});
