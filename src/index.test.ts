import { deepEqual } from "node:assert";
import test from "node:test";
import { displayBaller } from ".";
import type { FootballPlayers } from "./index";

test("DisplayBaller displays name, clubs and activeYears", () => {
  const baller = {
    name: "Love",
    clubs: ["West Ham", "AiK"],
    activeYears: 15,
  };

  const result = displayBaller(baller);
  deepEqual(result, {
    name: "Love",
    clubs: ["West Ham", "AiK"],
    activeYears: 15,
  });
});
