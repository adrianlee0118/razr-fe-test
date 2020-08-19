import React from "react";

//Handle rendering of square components based on some side length argument passed
const Square = ({ sidelen, angle }) => {
  const squareStyle = {
    padding: 10,
    margin: 20,
    display: "inline-block",
    height: sidelen,
    width: sidelen,
    backgroundColor: "red",
    transform: `rotate(${angle}deg)`,
  };
  return <div style={squareStyle}></div>;
};

export default Square;
