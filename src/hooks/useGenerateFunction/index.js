import { useState, useEffect } from "react";
import axios from "axios";

import sortingFunction from "../../utils/sortFunction";

//React hook for calling random number API and assembling sorted list of JSON representations of randomly-sized circles and squares
const useGenerateFunction = (url) => {
  const [shapes, setShapes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDimensions();
  }, []);

  const fetchDimensions = async () => {
    try {
      const result = await axios(url);
      const numbers = result.data.split(/\r?\n/).map((num) => parseInt(num));
      makeShapes(numbers);
    } catch (error) {
      setError(error);
    }
  };

  const makeShapes = (numbers) => {
    if (numbers.length === 0) return;
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

  return { shapes, error };
};

export default useGenerateFunction;
