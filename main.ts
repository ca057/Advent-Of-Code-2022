import { answers } from "./answers";
import { day1 } from "./puzzles/day1";
import { day2 } from "./puzzles/day2";

const days = [day1, day2];

const main = async () => {
  const solutions: {
    first: [unknown, boolean];
    second: [unknown, boolean];
  }[] = [];

  let index = 0;
  for await (const day of days) {
    const [first, second] = await Promise.all([day.first(), day.second()]);
    solutions.push({
      first: [first, answers[index].first === first],
      second: [second, answers[index].second === second],
    });
    index++;
  }

  console.table(solutions);
};

main();
