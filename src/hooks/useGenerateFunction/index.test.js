import React from "react";
import useGenerateFunction from "./index";
import { renderHook } from "@testing-library/react-hooks";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

/*
let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("gets shapes from api", async () => {
  const fakeUser = {
    name: "Joni Baez",
    age: "32",
    address: "123, Charming Avenue",
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser),
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<User id="123" />, container);
  });

  expect(container.querySelector("summary").textContent).toBe(fakeUser.name);
  expect(container.querySelector("strong").textContent).toBe(fakeUser.age);
  expect(container.textContent).toContain(fakeUser.address);

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});
*/

test("useGenerateFunction performs GET request", async () => {
  const mock = new MockAdapter(axios); //mock network call without going on the internet!

  const mockData = "response";
  const url = "http://mock";
  mock.onGet(url).reply(200, mockData); //instruct axios-mock-adapter to return with expected data and status code of 200

  //Invoke the custom hook
  const { result, waitForNextUpdate } = renderHook(() =>
    useGenerateFunction(url)
  );

  expect(result.current.shapes).toEqual([]); //initial hook result destructured out
  expect(result.current.error).toEqual(null);

  await waitForNextUpdate(); //return async fcn and check response

  expect(result.current.shapes).toEqual("response");
});
