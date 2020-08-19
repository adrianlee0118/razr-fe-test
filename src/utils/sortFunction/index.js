//Function for sorting an array of JSON objects representing shapes as created by useGenerateFunction
const sortingFunction = (shapeList) => {
  return shapeList.sort((a, b) => b.area - a.area);
};

export default sortingFunction;
