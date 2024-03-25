import {
  array,
  BaseSchema,
  fallback,
  lazy,
  object,
  optional,
  parse as parseSchema,
  record,
  string,
  transform,
  ulid,
  unknown,
} from "valibot";
import { Ulid } from "../ulid/ulid";
import { useQuery } from "@tanstack/react-query";

type Input = {
  id: string;
  component: string;
  props?: Record<string, unknown>;
  children?: Array<Input>;
};

export type Block = {
  id: Ulid;
  component: string; // TODO needs to be a defined list
  props?: Record<string, unknown>;
  children?: Array<Block>;
};

const schema: BaseSchema<Input, Block> = object({
  id: transform(string([ulid()]), (input) => new Ulid(input)),
  component: string(),
  props: optional(record(string(), unknown())),
  children: optional(array(lazy(() => schema))),
});

/**
 * Parse an unknown input into a block array.
 * @param input - An unknown input.
 * @returns - A block array
 */
export function parse(input: unknown): Array<Block> {
  return parseSchema(fallback(array(schema), []), input);
}

/**
 * Query api for block data.
 */
export function useQueryBlock() {
  return useQuery({ queryKey: ["blocks"], queryFn: fetchBlock });
}

async function fetchBlock(): Promise<Block[]> {
  const res = await fetch("/api/b/query.json");
  const data = await res.json() as { blocks: unknown };
  return parse(data.blocks);
}
