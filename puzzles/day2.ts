import fs from "node:fs/promises";
import path from "node:path";

enum Me {
  Rock = "X",
  Paper = "Y",
  Scissors = "Z",
}

enum Opponent {
  Rock = "A",
  Paper = "B",
  Scissors = "C",
}

const playScore: { [key in `${Opponent} ${Me}`]: number } = {
  "A X": 3,
  "A Y": 6,
  "A Z": 0,
  "B X": 0,
  "B Y": 3,
  "B Z": 6,
  "C X": 6,
  "C Y": 0,
  "C Z": 3,
};
const shapeScore: { [key in Me]: number } = {
  [Me.Rock]: 1,
  [Me.Paper]: 2,
  [Me.Scissors]: 3,
};

const calculateWin = (opponent: Opponent, me: Me): number => {
  const scoreForShape = shapeScore[me];
  const scoreForPlay = playScore[`${opponent} ${me}`];

  return scoreForShape + scoreForPlay;
};

const loadInput = async (): Promise<`${Opponent} ${Me}`[]> =>
  (
    await fs.readFile(path.resolve(__dirname, "day2-input"), {
      encoding: "utf-8",
    })
  )
    .split("\n")
    .filter((round) => round !== "") as `${Opponent} ${Me}`[];

export const first = () =>
  loadInput().then((input) =>
    input
      .map((round) => {
        const [opponent, me] = round.split(" ") as [Opponent, Me];
        return calculateWin(opponent, me);
      })
      .reduce((final, curr) => final + curr, 0)
  );

enum OutcomeIndication {
  Lose = "X",
  Draw = "Y",
  Win = "Z",
}

const shapeToChoose: { [key in `${Opponent} ${OutcomeIndication}`]: Me } = {
  "A X": Me.Scissors,
  "A Y": Me.Rock,
  "A Z": Me.Paper,
  "B X": Me.Rock,
  "B Y": Me.Paper,
  "B Z": Me.Scissors,
  "C X": Me.Paper,
  "C Y": Me.Scissors,
  "C Z": Me.Rock,
};

const calculateOutcome = (
  opponent: Opponent,
  indication: OutcomeIndication
): number => {
  const myShape = shapeToChoose[`${opponent} ${indication}`];
  const scoreForShape = shapeScore[myShape];
  const scoreForPlay = playScore[`${opponent} ${myShape}`];

  return scoreForShape + scoreForPlay;
};

const second = () =>
  loadInput().then((input) =>
    input
      .map((round) => {
        const [opponent, me] = round.split(" ") as [
          Opponent,
          OutcomeIndication
        ];
        return calculateOutcome(opponent, me);
      })
      .reduce((final, curr) => final + curr, 0)
  );

export const day2 = { first, second };
