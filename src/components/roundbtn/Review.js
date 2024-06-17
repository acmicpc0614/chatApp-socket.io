import { useState } from "react";
import empty from "../../data/starEmpty.svg";
import fill from "../../data/starFill.svg";
import { click } from "@testing-library/user-event/dist/click";
let bg = {
  happy: fill,
  default: empty,
};

const State = ["default", "happy"];
let btns = [
  {
    happy: 0,
  },
  {
    happy: 0,
  },
  {
    happy: 0,
  },
  {
    happy: 0,
  },
  {
    happy: 0,
  },
];

const Review = () => {
  const [current, setCurrent] = useState(0);
  const btnClick = (number) => {
    if (number === current) {
      for (let i = 0; i < number; i++) btns[i].happy = (btns[i].happy + 1) % 2;
      setCurrent(0);
    }
    //console.log(number);
    else {
      for (let i = 1; i <= number; i++) btns[i - 1].happy = 1;
      for (let i = number + 1; i <= 5; i++) btns[i - 1].happy = 0;
      setCurrent(number);
    }

    // console.log(current);
  };
  // window.addEventListener("keydown", (event) => {
  //   console.log(event);
  //   if (event.key === "ArrowUp") {
  //     if (current !== 5) btnClick(current + 1);
  //   } else if (event.key === "ArrowDown") btnClick(current - 1);
  //   else if (event.key === "ArrowRight") btnClick(current + 1);
  //   else if (event.key === "ArrowLeft") btnClick(current - 1);
  // });

  return (
    <>
      <div className="flex-colume d-flex container">
        <div className="m-2">
          <img src={bg[State[btns[0].happy]]} onClick={() => btnClick(1)} />
          <div
            style={{
              textAlign: "center",
              color: "#4B00E0",
              display: !btns[0].happy ? "none" : "block",
            }}
          >
            1
          </div>
        </div>
        <div className="m-2">
          <img src={bg[State[btns[1].happy]]} onClick={() => btnClick(2)} />
          <div
            style={{
              textAlign: "center",
              color: "#4B00E0",
              display: !btns[1].happy ? "none" : "block",
            }}
          >
            2
          </div>
        </div>
        <div className="m-2">
          <img src={bg[State[btns[2].happy]]} onClick={() => btnClick(3)} />
          <div
            style={{
              textAlign: "center",
              color: "#4B00E0",
              display: !btns[2].happy ? "none" : "block",
            }}
          >
            3
          </div>
        </div>
        <div className="m-2">
          <img src={bg[State[btns[3].happy]]} onClick={() => btnClick(4)} />
          <div
            style={{
              textAlign: "center",
              color: "#4B00E0",
              display: !btns[3].happy ? "none" : "block",
            }}
          >
            4
          </div>
        </div>
        <div className="m-2">
          <img src={bg[State[btns[4].happy]]} onClick={() => btnClick(5)} />
          <div
            style={{
              textAlign: "center",
              color: "#4B00E0",
              display: !btns[4].happy ? "none" : "block",
            }}
          >
            5
          </div>
        </div>
      </div>
    </>
  );
};
export default Review;
