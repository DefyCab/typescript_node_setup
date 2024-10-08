import { deepEqual } from "node:assert";
import test from "node:test";

const data = [
  { id: "12-n1", name: "Love" },
  { id: "12-n2", name: "Erik" },
];

type Person = {
  id: string;
  name: string;
};

function uppercaseNames(names: Person[]) {
    return names
}

test("UpperCaseNames works with empty array", () => {
  const result = uppercaseNames([]);
  deepEqual(result, []);
});
