import { useState, useEffect } from "react";
import axios from "axios";

import sortingFunction from "../../utils/sortingFunction";

//Function handles asynchronous call to the random number API -- isolated for ease of testing
const fetchDimensions = async (url) => {
  const result = await axios(url);
  return result.data
    .split(/\r?\n/)
    .map((num) => parseInt(num))
    .slice(0, -1);
};

//Custom react hook for calling random number API fetch and assembling sorted list of JSON representations of randomly-sized circles and squares
const useGenerateFunction = (url) => {
  const [shapes, setShapes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetch = async () => {
      const numbers = await fetchDimensions(url);
      await makeShapes(numbers);
    };
    fetch();
  }, []);

  const makeShapes = (numbers) => {
    let list = [];
    for (let i = 0; i < numbers.length; i++) {
      list = [
        ...list,
        {
          key: i,
          type: i < 50 ? "circle" : "square",
          crossdim: numbers[i],
          area: getArea(i < 50 ? "circle" : "square", numbers[i]),
        },
      ];
    }
    const sortedShapes = sortingFunction(list);
    sortedShapes.map((shape) => console.log(toString(shape)));
    setShapes(sortedShapes);
    setIsLoading(false);
  };

  const getArea = (shapeType, crossDim) => {
    return shapeType === "circle"
      ? Math.PI * (crossDim / 2) ** 2
      : crossDim ** 2;
  };

  const toString = (shape) => {
    return (
      (shape.type === "circle"
        ? `Circle: Radius = ${shape.crossdim / 2}`
        : `Square: Size = ${shape.crossdim}`) + `, Area = ${shape.area}`
    );
  };

  return { shapes, isLoading };
};

export default useGenerateFunction;

export { fetchDimensions };
