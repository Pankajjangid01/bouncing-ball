import Phaser from "phaser";
import { useEffect, useRef } from "react";

const PhaserGame = ({ onBounce }) => {
  const phaserGameRef = useRef(null);
  const ballRef = useRef(null);

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 400,
      height: 400,
      parent: "phaser-container",
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 0 },
          debug: false,
        },
      },
      scene: {
        preload: function () {
          this.load.image(
            "ball",
            "https://labs.phaser.io/assets/sprites/shinyball.png"
          );
        },
        create: function () {
          ballRef.current = this.physics.add.image(200, 200, "ball");
          ballRef.current.setBounce(1, 1);
          ballRef.current.setCollideWorldBounds(true);
        },
        update: function () {},
      },
    };

    phaserGameRef.current = new Phaser.Game(config);

    return () => {
      if (phaserGameRef.current) {
        phaserGameRef.current.destroy(true);
      }
    };
  }, []);

  useEffect(() => {
    if (onBounce && ballRef.current) {
      onBounce(ballRef.current);
    }
  }, [onBounce]);

  return (
    <div id="phaser-container" style={{ width: "400px", height: "400px" }} />
  );
};

export default PhaserGame;
