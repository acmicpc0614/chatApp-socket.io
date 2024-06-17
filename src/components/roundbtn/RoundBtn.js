import { useState } from "react";

const RoundBtn = () => {
  const [click, setClick] = useState(false);
  const [over, setOver] = useState(false);
  return (
    <div>
      <button
        className="round-btn"
        style={{
          textAlign: "center",
          height: "50px",
          width: "130px",
          borderRadius: "25px",
          backgroundColor: click ? "#4B00E0" : "transparent",
          color: "#ffffff",
          border: click ? "none" : "2px solid #ffffff",
          opacity: click ? (over ? "0.8" : "1") : "1",
        }}
        onClick={() => {
          setClick(!click);
        }}
        onMouseOver={() => {
          setOver(true);
        }}
        onMouseLeave={() => {
          setOver(false);
        }}
      >
        <b>Button</b>
      </button>
    </div>
  );
};

export default RoundBtn;
