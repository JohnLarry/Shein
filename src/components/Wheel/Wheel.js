import React, { useState } from "react";
import WheelComponent from "react-wheel-of-prizes";

const Wheel = () => {
  const [winner, setWinner] = useState("0");
  const segments = ["0", "5", "10", "25", "40", "50", "75", "100"];
  const segColors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9000",
  ];
  function getRandomItem(arr) {
    const randomIndex = Math.random() * arr.lenght;
    const item = arr[randomIndex];
    return item;
  }
  const onFinished = (winner) => {
    console.log(winner);
    setWinner(winner);
  };
  return (
    <div className="container max-w-[1080px] mx-auto p-5 text-center">
      <div>
        <WheelComponent
          className="w-full"
          segments={segments}
          segColors={segColors}
          winningSegment={getRandomItem(segments)}
          onFinished={(winner) => onFinished(winner)}
          primaryColor="black"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={true}
          size={150}
          upDuration={500}
          downDuration={1000}
          fontFamily="Arial"
        />
      </div>
      <h1>
        You win: <span>{winner}</span>
      </h1>
    </div>
  );
};

export default Wheel;
