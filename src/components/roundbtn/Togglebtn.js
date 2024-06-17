import { useState } from "react";
import yesIMG from "../../data/toggleTrue.svg";

const ToggleBtn = () => {
  const [check, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck(!check);
  };
  return (
    <>
      <label className="switch" onMouseDown={() => handleCheck()}>
        <input type="checkbox" />
        <span
          className="slider round"
          style={{
            backgroundColor: check ? "#eaeaea" : "#E8E8E8",
            border: check ? "1px solid #4B00E0" : "1px solid #999999",
            // backgroundImage: `url(${yesIMG})`,
            // backgroundRepeat: "no-repeat",
          }}
        />
      </label>
    </>
  );
};
export default ToggleBtn;
