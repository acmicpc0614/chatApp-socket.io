import ServiceTable from "../serviceTable";
import avatar from "../../data/dog-1.svg";
import pen from "../../data/pen.svg";

const Profile = () => {
  return <>
    <div className="container mt-3"
      style={{
        backgroundColor: "#fff",
        border: "1px solid rgba(0, 0, 0, .125)",
        borderRadius: "0.5rem"
      }}>
        <div className="flex flex-row m-4">
          <img
            src={avatar}
            alt="avatar"
            style={{width: 72}}/>
          <div className="flex"
            style={{
              marginLeft: "30px",
              justifyContent: "center"
            }}>
            <p>Service for</p>
            <label>Ginger Fisher</label>
          </div>
          <div style={{flex:"1", textAlign:"right", marginRight: "0"}}>
            <button className="btn btn-secondary mt-3"
            style={{
              width: "7rem",
              background: "#F0F1F7",
              border: "none",
              color: "#000000"
            }}>
              <img src={pen}/><span>&nbsp;Edit</span>
            </button>
          </div>
        </div>
      <ServiceTable />
    </div>
  </>
}

export default Profile;