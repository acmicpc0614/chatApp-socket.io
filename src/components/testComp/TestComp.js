import { useEffect, useState } from "react";
import axios from "axios";
const TestComp = () => {
  let input;
  const [value, setvalue] = useState(30);
  const handle = () => {
    setvalue(input.value);
  };

  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    if (scrolled === 100) alert("mhhh");
    document.getElementById("myBar").style.width = scrolled + "%";
  }

  return (
    <div>
      <h1>Progress bar</h1>
      <div
        className="container"
        style={{
          backgroundColor: "#775555",
          borderRadius: "50px",
          padding: "3px",
        }}
      >
        <div
          className="skills js"
          style={{
            width: `${value}%`,
            borderRadius: "50px",
          }}
        >
          {value}%
        </div>
      </div>
      <h>Input Percentage:</h>
      <input
        id="value"
        type="value"
        name="value"
        placeholder="50"
        value={value}
        onChange={(e) => setvalue(e.target.value)}
        style={{
          width: "50px",
          borderRadius: "25px",
        }}
      />
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>end</h1>
    </div>
  );
};
export default TestComp;
