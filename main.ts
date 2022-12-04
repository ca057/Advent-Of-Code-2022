import { answers } from "./answers";
import { day1 } from "./puzzles/day1";
import { day2 } from "./puzzles/day2";

const days = [day1, day2];

const main = async () => {
  // const solution1First = await day1.first();
  // console.log(
  //   `day 1 first half: ${solution1First}`,
  //   solution1First === answers.day1.first
  // );
  // const solution1Second = await day1.second();
  // console.log(
  //   `day 1 first half: ${solution1Second}`,
  //   solution1Second === answers.day1.second
  // );

  // console.log("");
  // const solution2First = await day2.first();
  // console.log(
  //   `day 2 first half: ${solution2First}`,
  //   solution2First === answers.day2.first
  // );

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
