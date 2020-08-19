import React from "react";

//Handle rendering of circle components based on some radius argument
const Circle = ({ radius }) => {
  const circleStyle = {
    padding: 10,
    margin: 20,
    display: "inline-block",
    backgroundColor: "blue",
    borderRadius: "50%",
    width: radius * 2,
    height: radius * 2,
  };
  return <div style={circleStyle}></div>;
};

export default Circle;
