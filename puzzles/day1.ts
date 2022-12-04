import fs from "node:fs/promises";
import path from "node:path";

const first = async () =>
  (
    await fs.readFile(path.resolve(__dirname, "day1-input"), {
      encoding: "utf-8",
    })
  )
    .split("\n")
    .reduce(
      (accum: number[], curr: string) => {
        if (curr === "") {
          return [...accum, 0];
        } else {
          const next = [...accum];
          next.splice(next.length - 1, 1, next[next.length - 1] + Number(curr));
          return next;
        }
      },
      [0]
    )
    .reduce((final, curr) => (curr > final ? curr : final), 0);

const second = async () =>
  (
    await fs.readFile(path.resolve(__dirname, "day1-input"), {
      encoding: "utf-8",
    })
  )
    .split("\n")
    .reduce(
      (accum: number[], curr: string) => {
        if (curr === "") {
          return [...accum, 0];
        } else {
          const next = [...accum];
          next.splice(next.length - 1, 1, next[next.length - 1] + Number(curr));
          return next;
        }
      },
      [0]
    )
    .sort((elve1, elve2) => (elve1 < elve2 ? 1 : -1))
    .slice(0, 3)
    .reduce((final, curr) => final + curr, 0);

export const day1 = { first, second };
