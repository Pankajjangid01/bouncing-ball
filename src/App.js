import React, { useState, useRef } from "react";
import PhaserGame from "./PhaserGame";
import "./App.css";

const App = () => {
  const [bounceDirection, setBounceDirection] = useState(null);
  const ballRef = useRef(null);

  const handleButtonClick = (direction) => {
    if (bounceDirection !== direction) {
      setBounceDirection(direction);
    }
  };

  const handleBounce = (ball) => {
    if (ball) {
      const speed = 200;

      switch (bounceDirection) {
        case "top-left":
          ball.setVelocity(-speed, -speed);
          break;
        case "top-right":
          ball.setVelocity(speed, -speed);
          break;
        case "bottom-left":
          ball.setVelocity(-speed, speed);
          break;
        case "bottom-right":
          ball.setVelocity(speed, speed);
          break;
        case "left-top":
          ball.setVelocity(-speed, -speed);
          break;
        case "left-bottom":
          ball.setVelocity(-speed, speed);
          break;
        case "right-top":
          ball.setVelocity(speed, -speed);
          break;
        case "right-bottom":
          ball.setVelocity(speed, speed);
          break;
        default:
          ball.setVelocity(0, 0);
      }
    }
  };

  return (
    <div className="container">
      <div className="buttons top-buttons">
        <button onClick={() => handleButtonClick("top-left")}>Top Left</button>
        <button onClick={() => handleButtonClick("top-right")}>
          Top Right
        </button>
      </div>

      <div className="phaser-container">
        <PhaserGame onBounce={handleBounce} ballRef={ballRef} />
      </div>

      <div className="buttons bottom-buttons">
        <button onClick={() => handleButtonClick("bottom-left")}>
          Bottom Left
        </button>
        <button onClick={() => handleButtonClick("bottom-right")}>
          Bottom Right
        </button>
      </div>

      <div className="buttons left-buttons">
        <button onClick={() => handleButtonClick("left-top")}>Left Top</button>
        <button onClick={() => handleButtonClick("left-bottom")}>
          Left Bottom
        </button>
      </div>

      <div className="buttons right-buttons">
        <button onClick={() => handleButtonClick("right-top")}>
          Right Top
        </button>
        <button onClick={() => handleButtonClick("right-bottom")}>
          Right Bottom
        </button>
      </div>
    </div>
  );
};

export default App;
