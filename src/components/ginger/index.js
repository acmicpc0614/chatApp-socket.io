import avatar from "../../data/dog-1.svg";

import RounedBtn from "../roundedBtn"
import ServiceTable from "../serviceTable";

const Ginger = () => {
  return <>
    <div className="container mt-3"
      style={{
        backgroundColor: "#fff",
        border: "1px solid rgba(0, 0, 0, .125)",
        borderRadius: "0.5rem"
      }}>
      <div className="mycard" style={{alignItems: "center"}}>
        <img
          className="mycard-img"
          src={avatar}
          alt="avatar"
          style={{width: 72}}/>

        <h1 className="card-title"
          style={{color:"--bs-gray-gray"}}>
          Ginger
        </h1>

        <div className="card-body">Golden Retriever</div>

        <hr style={{width: "95%"}}/>
        
        <label>FAVORITE THINGS</label>
        <div className="flex flex-row" style={{
          justifyContent: "center",
          padding: "0rem 1rem"
          }}>
          <RounedBtn title="Barking" btnColor={"#F7ECEB"}/>
          <RounedBtn title="Snuggling" btnColor={"#F7ECEB"}/>
          <RounedBtn title="Giving kisses" btnColor={"#F7ECEB"}/>
          <RounedBtn title="Walks" btnColor={"#F7ECEB"}/>
          <RounedBtn title="Treats" btnColor={"#F7ECEB"}/>
        </div>


      </div>
      <ServiceTable />
  </div>
  </>
}

export default Ginger;