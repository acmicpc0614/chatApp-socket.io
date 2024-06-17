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

const ColorPickerItem = ({ color, setSelect, id }) => {
  const handleClick = () => {
    setSelect(id);
  };

  return (
    <>
      <div
        style={{
          height: "100px",
          width: "30%",
          backgroundColor: `${color}`,
          borderRadius: "0.3rem",
          marginTop: "1rem",
          textAlign: "center",
          fontSize: "2rem",
          justifyItems: "center",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          display: "flex",
          color: `${Colors[id]}`,
        }}
        onClick={() => handleClick()}
      >
        {color}
      </div>
    </>
  );
};

export default ColorPickerItem;
