import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const StarCounter = () => {
  const [count, setCount] = useState(5);
  const stars = () => {
    const UpdatedStars = [];
    for (let i = 0; i < count; i++) {
      UpdatedStars.push(
        <FontAwesomeIcon
          key={i}
          icon={icon({ name: "star", style: "solid" })}
        />
      );
    }
    return <>{UpdatedStars}</>;
  };

  return (
    <div className='starCounter'>
      <h2>What do you think of my Vanilla JavaScript?</h2>
      <br />
      <div className='counterBox'>
        <button
          id='minus'
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
        >
          -
        </button>{" "}
        &nbsp;
        <div id='numberCounter'></div>
        &nbsp;
        <button
          id='plus'
          onClick={() => {
            if (count <= 4) {
              setCount(count + 1);
            }
          }}
        >
          +
        </button>
      </div>
      <br />
      <div id='stars'>{stars()}</div>
    </div>
  );
};

export default StarCounter;
