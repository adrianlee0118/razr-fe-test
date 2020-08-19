import { fetchDimensions } from "./index";
import { Random_100_URL } from "../../constants";
import axios from "axios";

jest.mock("axios");

describe("fetchDimensions", () => {
  it("fetches data successfully from an API", async () => {
    const result = { data: "1\r\n23\r\n3\r\n56" };
    axios.get.mockImplementationOnce(() => Promise.resolve(result));
    await expect(fetchDimensions(Random_100_URL)).resolves.toEqual(result);
    expect(axios.get).toHaveBeenCalledWith(Random_100_URL);
  });

  it("fetches erroneously data from an API", async () => {
    const errorMessage = "Network Error";
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
    await expect(fetchDimensions(Random_100_URL)).rejects.toThrow(errorMessage);
  });
});
