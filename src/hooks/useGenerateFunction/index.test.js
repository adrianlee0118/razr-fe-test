import { fetchDimensions } from "./index";
import { Random_100_URL } from "../../constants";

it("fetches 100 random numbers from API", async () => {
  const numbers = await fetchDimensions(Random_100_URL);
  expect(numbers.length - 1).toEqual(100);
});

it("fetches numbers that fall only between 1 and 100", async () => {
  const numbers = await fetchDimensions(Random_100_URL);
  let mini = 50,
    maxi = 50;
  numbers.forEach((num) =>
    num > maxi ? (maxi = num) : num < mini ? (mini = num) : num
  );
  expect(mini).toBeGreaterThanOrEqual(1);
  expect(maxi).toBeLessThanOrEqual(100);
});
