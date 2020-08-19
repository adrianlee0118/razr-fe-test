import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Circle from "./index";

describe("Circle", () => {
  //Component test
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Circle />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //Snapshot test
  test("has a valid snapshot", () => {
    const component = renderer.create(<Circle />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
