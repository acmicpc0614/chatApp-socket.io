import React from "react";

const ChatBody = ({ messages, typingStatus, lastMessageRef }) => {
  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    window.location.reload();
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
            <div className="Card-container" key={message.id}>
              <p className="sender__name">You</p>
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
                  <p>{message.text}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="Card-container" key={message.id}>
              <p>{message.name}</p>
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
                <p>{message.text}</p>
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
