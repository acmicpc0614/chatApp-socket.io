import { useEffect, useState } from "react";
const TestComp = () => {
  const [cities, setCities] = useState([]);
  const [tmpName, setTmpName] = useState("");

  const handleCityAdd = () => {
    if (!tmpName.trim()) return;
    const newCity = {
      name: tmpName,
      id: Date.now(),
    };
    setCities([...cities, newCity]);
    setTmpName("");
  };

  const handleFilter = (item) => {
    console.log(item, "selected...");
    let tmpCities = cities.filter((city) => city.id != item.id);
    setCities(tmpCities);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: "50px",
          gap: "1rem",
        }}
      >
        <input
          style={{
            borderRadius: "5px",
            border: "1px solid #777777",
            width: "10rem",
            height: "26px",
          }}
          placeholder="Add city"
          value={tmpName}
          onChange={(e) => setTmpName(e.target.value)}
        />
        <div
          className="curpo"
          style={{
            borderRadius: "5px",
            border: "1px solid #777777",
            width: "3rem",
            textAlign: "center",
            height: "26px",
          }}
          onClick={handleCityAdd}
        >
          Add
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          width: "10rem",
        }}
      >
        {cities.map((item, idx) => (
          <div
            key={idx}
            className="curpo"
            style={{
              backgroundColor: "#aaaaaa",
              textAlign: "center",
            }}
            onClick={() => {
              handleFilter(item);
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
    </>
  );
};
export default TestComp;
