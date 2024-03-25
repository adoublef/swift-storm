import { ulid as newUlid } from "ulid";
import { parse, string, ulid as ulidPipe } from "valibot";

/**
 * Ulid.
 */
export class Ulid {
  value: string;
  constructor(rawUlid = newUlid()) {
    if (!rawUlid) {
      rawUlid = newUlid();
    }
    try {
      this.value = parse(string([ulidPipe()]), rawUlid);
    } catch (error) {
      throw new Error(`Error parsing ULID: ${(error as Error).message}`);
    }
  }

  toString(): string {
    return this.value;
  }
}
