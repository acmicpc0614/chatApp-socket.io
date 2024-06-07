import clock from "../../data/clock.svg";
import map from "../../data/map.svg";
import poop from "../../data/poop.svg";
import pees from "../../data/pees.svg";
import pos from "../../data/position.svg";

const Location = () => {
  return <>
    <div className="container mt-3"
    style={{
        backgroundColor: "#fff",
        border: "1px solid rgba(0, 0, 0, .125)",
        borderRadius: "0.5rem"}}>
      <label className="m-4">Arrival: 10:00 AM, Departure: 10:30 AM</label>
      <div className="flex flex-row"
      style={{
        // alignItems: "center",
        justifyContent: "center"
      }}>
        <div style={{marginBottom: "2rem", marginLeft: "1rem"}}>
          <img
            src={map}
          />
        </div>
      <div className=" flex-col" style={{
       marginLeft:"1rem", marginRight:"1rem", marginBottom: "3rem", justifyContent: "space-between", }}>
      <div>
          <button className="btn btn-outline-secondary"
              style={{
                background: "#FFFFFF",
                color: "#9597A6",
                width: "7rem"
              }}>
                <img src={pos} style={{width: "1rem"}}/><span>&nbsp;2 miles</span>
          </button>
        </div>
        <div>
          <button className="btn btn-outline-secondary"
              style={{
                background: "#FFFFFF",
                color: "#9597A6",
                width: "7rem"
              }}>
                <img src={clock} style={{width: "1rem"}}/><span>&nbsp;30 mins</span>
          </button>
        </div>
        <div>
          <button className="btn btn-outline-secondary"
              style={{
                background: "#FFFFFF",
                color: "#9597A6",
                width: "7rem"
              }}>
                <img src={poop} style={{width: "1rem"}}/><span>&nbsp;1 poop</span>
          </button>
        </div>
        <div>
          <button className="btn btn-outline-secondary "
              style={{
                background: "#FFFFFF",
                color: "#9597A6",
                width: "7rem",
              }}>
                <img src={pees} style={{width: "1rem"}}/><span>&nbsp;2 pees</span>
          </button>
        </div>
</div>
      </div>
    </div>
  </>
}

export default Location;