import { useState } from "react";

let bgColor = {
  selected: "#4B00E0",
  default: "transparent",
  disable: "transparent",
};
let borderColor = {
  selected: "#4B00E0",
  default: "#777777",
  disable: "#ffffff",
};

let fontColor = {
  selected: "#ffffff",
  default: "#777777",
  disable: "#ffffff",
};
let varient = {
  selected: "fa fa-check",
  default: "fa fa-close",
  disable: "fa fa-close",
};
const State = ["selected", "disable", "default"];

const RoundBtnSpan = () => {
  const [click, setClick] = useState(false);
  const [over, setOver] = useState(false);

  const [btnState, setBtnState] = useState(0); //bn

  const handleClick = () => {
    setBtnState((btnState + 1) % 3);
  };
  return (
    <div>
      <button
        className="round-btn"
        style={{
          textAlign: "center",
          height: "50px",
          width: "130px",
          borderRadius: "25px",
          backgroundColor: `${bgColor[State[btnState]]}`,
          color: `${fontColor[State[btnState]]}`,
          border: `2px solid ${borderColor[State[btnState]]}`,
          opacity: click ? (over ? "0.8" : "1") : "1",
        }}
        onClick={() => {
          handleClick();
        }}
        onMouseOver={() => {
          setOver(true);
        }}
        onMouseLeave={() => {
          setOver(false);
        }}
      >
        <b>
          <div className={`${varient[State[btnState]]}`} />
          &nbsp;Button
        </b>
      </button>
    </div>
  );
};

export default RoundBtnSpan;
