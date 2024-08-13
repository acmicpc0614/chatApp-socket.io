import { useEffect, useState } from "react";
import image from "../../data/generator.png";
const HARD = 2;
const MEDIUM = 1;
const EASY = 0;
const PwdGenerator = () => {
  const [password, setPassword] = useState("");
  const [ishow, setIshow] = useState(EASY);
  const [len, setLen] = useState(8);
  const [isUpper, SetIsUpper] = useState(true);
  const [isLower, SetIsLower] = useState(false);
  const [isNumber, SetIsNumber] = useState(false);
  const [isSpec, SetIsSpec] = useState(false);
  const [iscopy, Setiscopy] = useState(false);

  const data = [
    {
      title: "Weak",
      color: "Red",
    },
    {
      title: "Medium",
      color: "Orange",
    },
    {
      title: "Hard",
      color: "Green",
    },
  ];

  const UpperSerial = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const LowerSerial = "abcdefghijklmnopqrstuvwxyz";
  const NumberSerial = "0123456789";
  const SpecialSerial = "!@#$%^&*()";

  const RandFn = (size) => {
    let tmp;
    tmp = Math.floor(Date.now() * Math.random()) % size;

    // tmp = Math.floor(Math.random() * size);
    return tmp;
  };

  const generatePWD = async () => {
    let tmp = 0;
    let serial = [];
    let tmpPWD = "";
    if (isUpper) serial.push(UpperSerial);
    if (isLower) serial.push(LowerSerial);
    if (isNumber) serial.push(NumberSerial);
    if (isSpec) serial.push(SpecialSerial);

    // console.log(serial);
    let size = serial.length;
    // console.log("serial size is :", size);
    for (let i = 0; i < len; i++) {
      let rd = RandFn(size);

      // console.log(serial[rd].length);
      let pos = RandFn(serial[rd].length);
      // password = password + serial[rd][pos];
      tmpPWD += serial[rd][pos];
      // console.log("serial pos is :", tmpPWD);
    }
    // console.log(tmpPWD);
    setPassword(tmpPWD);
    // return tmpPWD;
    // console.log(password);
  };

  const checksz = () => {
    let howmuch = 0;
    if (isUpper) howmuch++;
    if (isLower) howmuch++;
    if (isNumber) howmuch++;
    if (isSpec) howmuch++;
    return howmuch;
  };

  const RandCheck = () => {
    let tmp = RandFn(4);
    console.log("randchk", tmp);
    if (checksz() === 0) {
      if (tmp === 1) SetIsUpper(true);
      if (tmp === 2) SetIsLower(true);
      if (tmp === 3) SetIsNumber(true);
      if (tmp === 0) SetIsSpec(true);
    }
  };

  useEffect(() => {
    let tmp = RandFn(4);
    SetIsUpper(false);
    SetIsLower(false);
    SetIsNumber(false);
    SetIsSpec(false);
    if (tmp === 1) SetIsUpper(true);
    if (tmp === 2) SetIsLower(true);
    if (tmp === 3) SetIsNumber(true);
    if (tmp === 0) SetIsSpec(true);
    // console.log("renderd_____________________________");
    generatePWD();
  }, []);

  useEffect(() => {
    Setiscopy(false);
    if (checksz() === 0) {
      // console.log("Warning");
      // RandCheck();
      SetIsLower(true);
    }
    if (checksz() > 0) generatePWD();
  }, [isUpper, isLower, isNumber, isSpec, len]);

  useEffect(() => {
    if (checksz() === 4) setIshow(HARD);
    else if (checksz() < 3) setIshow(EASY);
    else setIshow(MEDIUM);
  }, [password]);

  const handleCopy = async () => {
    console.log("coping");
    await navigator.clipboard.writeText(password);
    Setiscopy(true);
  };

  return (
    <>
      <div
        className="container"
        style={{
          width: "500px",
          minWidth: "300px",
          borderRadius: "1.5rem",
          boxShadow: "rgba(50, 50, 93, 0.25) 0px 0px 100px 10px",
          backgroundColor: "#ffffff",
          padding: "40px",
        }}
      >
        <div
          style={{
            textAlign: "center",
          }}
        >
          <img src={image} alt="image" />
        </div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h4>
            <b>PASSWORD GENERATOR</b>
          </h4>
          <span>
            Create strong and secure passwords to keep your accout safe online
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              border: "1px solid #333333",
              borderRadius: "10px",
              flexGrow: "11",
              marginRight: "5px",
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                marginLeft: "0.5rem",
                fontSize: "14px",
                // color: "#000",
              }}
              id="pwd"
            >
              <b>{password}</b>
            </div>
            <div
              style={{
                marginRight: "0.5rem",
              }}
              onClick={() => {
                generatePWD();
              }}
              className="fa fa-undo"
            />
          </div>
          <div
            className="pwd-copy"
            style={{
              borderRadius: "10px",
              backgroundColor: iscopy ? "#04AA6D" : "#04AA6D",
              width: "80px",
              textAlign: "center",
              color: iscopy ? "#000" : "#000",
              fontSize: "14px",
            }}
            onClick={handleCopy}
          >
            <div
              className="	fa fa-copy"
              //
              style={{
                fill: "#000",
                color: "#000",
              }}
            />
            <b>{!iscopy ? "Copy" : "Copied"}</b>
          </div>
        </div>

        {len < 8 ? (
          <div
            style={{
              color: "#ff0000",
              fontSize: "15px",
            }}
          >
            <b>Too short</b>
          </div>
        ) : (
          <div
            style={{
              fontSize: "15px",
              color: `${data[ishow].color}`,
            }}
          >
            <b>{data[ishow].title}</b>
          </div>
        )}
        <label>Password Length:&nbsp;{len}</label>

        <div className="">
          <div
            style={{
              height: "8px",
              width: `${(len / 31) * 100}%`,
              backgroundColor: "#04AA6Dee",
              borderRadius: "4px",
              marginLeft: "1px",
              marginRight: "1px",
              transform: "translate(0, 17px)",
            }}
          />
          <input
            type="range"
            min="1"
            max="30"
            value={len}
            className="mySlider"
            onChange={(e) => {
              setLen(e.target.value);
            }}
          />
        </div>
        <div>
          <label className="pwd-check">
            Uppercase
            <input
              type="checkbox"
              className="pwd-checkbox"
              onChange={() => {
                SetIsUpper(!isUpper);
              }}
              checked={isUpper ? "checked" : ""}
            />
            <span className="checkmark"></span>
          </label>
          <label className="pwd-check">
            Lowercase
            <input
              type="checkbox"
              className="pwd-checkbox"
              style={{}}
              onChange={() => {
                SetIsLower(!isLower);
              }}
              checked={isLower ? "checked" : ""}
            />
            <span className="checkmark"></span>
          </label>
          <label className="pwd-check">
            Numbers
            <input
              type="checkbox"
              className="pwd-checkbox"
              style={{}}
              onChange={() => {
                SetIsNumber(!isNumber);
              }}
              checked={isNumber ? "checked" : ""}
            />
            <span className="checkmark"></span>
          </label>
          <label className="pwd-check">
            Special Characters
            <input
              type="checkbox"
              className="pwd-checkbox"
              style={{}}
              onChange={() => {
                SetIsSpec(!isSpec);
              }}
              checked={isSpec ? "checked" : ""}
            />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
    </>
  );
};
export default PwdGenerator;
