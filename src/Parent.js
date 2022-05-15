import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor); //initial color state
  const [childrenColor, setChildrenColor] = useState("#FFF");

  function handleChangeColor(newChildColor){
    const newRandomColor = getRandomColor();
    setColor(newRandomColor); //Updates color state to a new value
    setChildrenColor(newChildColor);
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      {/* state changing function passed as a prop to both Child components 
      to allow color change when either child is clicked*/}
      <Child onChangeColor={handleChangeColor} color={childrenColor} />
      <Child onChangeColor={handleChangeColor} color={childrenColor} />
    </div>
  );
}

export default Parent;
