import avatar from "../../data/quoteMark.svg"
import zoomAvatar from "../../data/zoomAvatar.svg"
import message from "../../data/message.svg"


const ServiceQuote = () => {
  return <>
       <div className="container mt-3"
      style={{
        backgroundColor: "#fff",
        border: "1px solid rgba(0, 0, 0, .125)",
        borderRadius: "0.5rem"
      }}>
        <div className="flex flex-row m-4"
          style={{
            minWidth: "300px"
          }}
        >
        <div style={{flex:"1"}}>
          <img
            className="mt-3"
            src={avatar}
            alt="avatar"
            style={{width: 72}}/>
        </div>

        <div style={{flex:"3"}}>
          <div className="flex"
            style={{
              marginLeft: "30px",
              justifyContent: "center"
            }}>
            <p>Please be sure to give her the antibiotics, they’re on the kitchen counter… <u>Read more</u></p>
          </div>

          <button className="btn btn-secondary mt-3"
            style={{
              width: "7rem",
              background: "#F0F1F7",
              border: "none",
              color: "#000000"
            }}>
               <img src={message}/><span>&nbsp;Chat</span>
            </button>
        </div>

          <div style={{flex:"2", textAlign:"right", marginRight: "0"}}>
            <img
              src={zoomAvatar}
              alt="avatar"
              style={{width: 140}}/>

              </div>
          </div>
    </div>
  </>
}

export default ServiceQuote;