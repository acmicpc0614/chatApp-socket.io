import man from "../../data/man.svg";
import avatar from "../../data/star.svg";

const Sitter = () => {
  return <>
    <div className="container mt-3"
      style={{
        backgroundColor: "#fff",
        border: "1px solid rgba(0, 0, 0, .125)",
        borderRadius: "0.5rem"
      }}>
        <div className="flex flex-row m-4">
          <div style={{flex:1, marginTop: "2rem"}}>
            <img
              src={man}
              alt="avatar"
              style={{width: 72}}/>
          </div>

          <div className="flex"
            style={{
              flex: 3,
              marginLeft: "30px",
              justifyContent: "center"
            }}>
            <p>Your sitter</p>
            <label><b>Andrew Couldwell</b></label>
            <p>4.8&nbsp;rating</p>
          </div>
          <div style={{flex:"1", textAlign:"right", marginRight: "0"}}>
            <button className="btn btn-secondary mt-3"
            style={{
              width: "7rem",
              background: "#F0F1F7",
              border: "none",
              color: "#000000"
            }}>
              <img src={avatar}/><span>&nbsp;Reviews</span>
            </button>
          </div>
        </div>
    </div>
  </>
}

export default Sitter;