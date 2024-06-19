import React from "react";
import { useNavigate } from "react-router";

const ChatBody = ({ messages, typingStatus, lastMessageRef }) => {
  const navigate = useNavigate();
  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    // window.location.reload();
    navigate("/commit");
  };

  return (
    <>
      <header className="chat__mainHeader">
        <p>Hello, {localStorage.getItem("userName")}</p>
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          LEAVE CHAT
        </button>
      </header>

      <div className="message__container">
        {messages.map((message) =>
          message.name === localStorage.getItem("userName") ? (
            <div
              className="Card-container flex-row d-flex"
              key={message.id}
              style={{
                justifyContent: "end",
              }}
            >
              <div>
                <div className="sender__name">You</div>
                <div
                  className="message__sender"
                  style={{
                    backgroundColor: "#8472FC",
                    color: "#ffffff",
                    borderRadius: "  50px 0px 30px 8px",
                    width: "fit-content",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                    paddingRight: "30px",
                    paddingLeft: "30px",
                  }}
                >
                  <div className="storyContent">
                    <div>{message.text}</div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={require(`../../data/avatars/man-${localStorage.getItem(
                    "userAvatar"
                  )}.png`)}
                  style={{
                    margin: "10px",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "1px solid #333333",
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="Card-container d-flex flex-row" key={message.id}>
              <div>
                <img
                  src={require(`../../data/avatars/man-${localStorage.getItem(
                    "userAvatar"
                  )}.png`)}
                  style={{
                    margin: "10px",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "1px solid #333333",
                  }}
                />
              </div>
              <div>
                <div>{message.name}</div>
                <div
                  className="message__recipient"
                  style={{
                    backgroundColor: "#696969",
                    color: "#ffffff",
                    borderRadius: "   0px 30px 8px 50px",
                    width: "fit-content",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                    paddingRight: "30px",
                    paddingLeft: "30px",
                  }}
                >
                  <div>{message.text}</div>
                </div>
              </div>
            </div>
          )
        )}

        <div className="message__status">
          <p>{typingStatus}</p>
        </div>
        <div ref={lastMessageRef} />
      </div>
    </>
  );
};

export default ChatBody;
