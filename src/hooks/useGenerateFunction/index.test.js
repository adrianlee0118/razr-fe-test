import { fetchDimensions } from "./index";
import { Random_100_URL } from "../../constants";
import axios from "axios";

jest.mock("axios");

describe("fetchDimensions", () => {
  /*
  it("fetches 100 random numbers from API", async () => {
    const numbers = await fetchDimensions(Random_100_URL);
    expect(numbers.length).toEqual(100);
  });

  it("fetches numbers that fall only between 1 and 100", async () => {
    const numbers = await fetchDimensions(Random_100_URL);
    expect(Math.min(...numbers)).toBeGreaterThanOrEqual(1);
    expect(Math.max(...numbers)).toBeLessThanOrEqual(100);
  });
  */
  it("returns a list of numbers", async () => {
    axios.get.mockResolvedValue({
      data: "1\n32\n12\n98\n2",
    });
    const numbers = await fetchDimensions(Random_100_URL);
    expect(numbers).toEqual([1, 32, 12, 98, 2]);
  });
});
