import { useState } from "react";
import ColorPickerItem from "./ColorPickerItem";

let Colors = [
  "#000000",
  "#ffffff",
  "#ffffff",
  "#ffffff",
  "#ffffff",
  "#ffffff",
  "#000000",
  "#ffffff",
  "#ffffff",
  "#000000",
  "#000000",
  "#ffffff",
  "#000000",
  "#ffffff",
  "#ffffff",
];
const ColorPicker = () => {
  // size is 15, 0~14
  const [select, setSelect] = useState(12);
  const data = [
    "LightGray",
    "Pink",
    "Purple",
    "DarkGreen",
    "Blue",
    "DarkBlue",
    "Green",
    "Red",
    "DarkRed",
    "LightGreen",
    "Yellow",
    "Orange",
    "White",
    "Black",
    "Brown",
  ];
  // console.log(select);
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div
        className="d-flex flex-column"
        style={{
          backgroundColor: `${data[select]}`,
          width: "100%",
          height: "200px",
          borderRadius: "0.5rem",
          padding: "50px",
          color: `${Colors[select]}`,
          alignItems: "center",
          textAlign: "center",
          border: "1px solid #707070",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontSize: "32px",
          }}
        >
          Selected color:
        </div>
        <h1
          style={{
            lineHeight: "0",
            fontSize: "48px",
            color: `${Colors[select]}`,
          }}
        >
          {data[select]}
        </h1>
      </div>
      <div
        className="d-flex flex-wrap"
        style={{
          justifyContent: "space-between",
        }}
      >
        {data.map((item) => (
          <ColorPickerItem
            key={item}
            color={item}
            setSelect={setSelect}
            id={data.indexOf(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
