import avatar from "../../data/happy.svg";


const EmptySitter = () => {
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
              src={avatar}
              alt="avatar"
              style={{width: 72}}/>
          </div>

          <div className="flex"
            style={{
              flex: 4,
              marginLeft: "30px",
              justifyContent: "center"
            }}>
            <p>Your sitter</p>
            <label><b>Not assigned yet</b></label>
            <p>Sitters are assigned 72 hours before service</p>
          </div>

        </div>
    </div>
  </>
}

export default EmptySitter;