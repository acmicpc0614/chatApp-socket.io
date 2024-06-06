import { useState } from "react";

const NoPage = () => {
  const [num, setNem] = useState(0);
  const clickFn =() => {
    setNem(num + 1);
  }
return <>
    <div className="container m-5">
      <button className="btn btn-primary" onClick = {() => clickFn()}>{num} clicked.</button>
    </div>
  </>
};

export default NoPage;