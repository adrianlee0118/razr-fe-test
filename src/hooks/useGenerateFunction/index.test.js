import { fetchDimensions } from "./index";
import { Random_100_URL } from "../../constants";
import axios from "axios";

jest.mock("axios", () => {
  return {
    get: jest.fn(() => Promise.resolve({ data: "1\n32\n12\n98\n2" })),
  };
});

describe("fetchDimensions", () => {
  /*
  Some preliminary isolated testing calling the actual network

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

  afterEach(() => {
    jest.resetAllMocks();
  });

  /*
  const mockUrl = "/api/numbers";
  const mockNumbers = {
    data: "1\n32\n12\n98\n2",
  };
  const getNumbers = jest.fn((url) => mockNumbers);

  it("returns numbers from an api call", () => {
    expect(getNumbers(mockUrl)).toBe(mockNumbers);
    console.log(getNumbers);
  });

  it("called getNumbers with a mockUrl", () => {
    expect(getNumbers).toHaveBeenCalledWith(mockUrl);
  });

  it("returns a list of numbers", async () => {
    const mockResponse = {
      data: "1\n32\n12\n98\n2",
    };
    axios.get.mockResolvedValue(mockResponse);

    let numbers = await fetchDimensions(Random_100_URL);
    expect(numbers.length).toEqual(5);
  });
  */

  it("should return undefined when axios.get failed", async () => {
    const getError = new Error("network error");
    axios.get.mockRejectedValue(getError);
    const actualValue = await fetchDimensions(Random_100_URL);
    expect(actualValue).toEqual(undefined);
    expect(axios.get).toBeCalled(1);
  });

  it("should return numbers when axios.get successful", async () => {
    const mockedNumbers = {
      data: "1\n32\n12\n98\n2",
    };
    const actualValue = await fetchDimensions(Random_100_URL);
    expect(actualValue).toEqual(mockedNumbers);
    expect(axios.get).toBeCalled(1);
  });
});
