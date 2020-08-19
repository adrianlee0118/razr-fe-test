import sortingFunction from "./index";

describe("sortFunction", () => {
  it("sorts a list of shape objects in decreasing order of area", async () => {
    const list = [
      { key: 0, type: "circle", radius: 2, area: 12.566 },
      { key: 1, type: "square", radius: 3, area: 9 },
      { key: 2, type: "square", radius: 1, area: 1 },
      { key: 3, type: "circle", radius: 4, area: 50.265 },
    ];
    const sortedList = sortingFunction(list);
    expect(sortedList).toEqual([
      { key: 3, type: "circle", radius: 4, area: 50.265 },
      { key: 0, type: "circle", radius: 2, area: 12.566 },
      { key: 1, type: "square", radius: 3, area: 9 },
      { key: 2, type: "square", radius: 1, area: 1 },
    ]);
  });

  it("returns a list with the same length as the argument", async () => {
    const list = [
      { key: 4, type: "circle", radius: 10, area: 314.15 },
      { key: 5, type: "square", radius: 25, area: 625 },
      { key: 6, type: "square", radius: 12, area: 144 },
      { key: 7, type: "square", radius: 30, area: 900 },
    ];
    const sortedList = sortingFunction(list);
    expect(sortedList.length).toEqual(4);
  });
});
