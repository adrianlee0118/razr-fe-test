import React, { useState, useEffect } from "react";
import Circle from "./components/circle";
import Square from "./components/square";

import useGenerateFunction from "./hooks/useGenerateFunction";
import { Random_100_URL } from "./constants";

//App component -- handles calls to rendering of shapes determined by JSON object list passed from useGenerateFunction React hook, manages dynamic rotation of squares
const App = () => {
  const { shapes } = useGenerateFunction(Random_100_URL);
  const [angle, setAngle] = useState(0);

  //Rotate squares clockwise by 10 degrees every 500 ms ([angle] indicates a re-render is to be triggered whenever angle changes)
  useEffect(() => {
    const interval = setInterval(
      () => setAngle(angle === 80 ? 0 : angle + 10),
      500
    );
    return () => clearInterval(interval);
  }, [angle]);

  return (
    <div
      className="App"
      style={{
        "text-align": "center",
      }}
    >
      <h1>Feast your Eyes</h1>
      <div>
        {shapes.length === 0 ? (
          <p>No data: something went wrong.</p>
        ) : (
          shapes.map((shape) =>
            shape.type === "circle" ? (
              <Circle key={shape.key} radius={shape.crossdim / 2} />
            ) : (
              <Square key={shape.key} sidelen={shape.crossdim} angle={angle} />
            )
          )
        )}
      </div>
    </div>
  );
};

export default App;
