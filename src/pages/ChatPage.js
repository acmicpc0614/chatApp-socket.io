import { useEffect, useRef, useState } from "react";
import ChatBody from "../components/chat/ChatBody";
import ChatBar from "../components/chat/ChatBar";
import ChatFooter from "../components/chat/ChatFooter";

const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState("");
  const lastMessageRef = useRef(null);

  useEffect(() => {
    socket.on(
      "messageResponse",
      (data) => {
        setMessages([...messages, data]);
      },
      [socket, messages]
    );
  });

  useEffect(() => {
    socket.on("typingResponse", (data) => setTypingStatus(data));
  }, [socket]);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // console.log("___________>", socket);
  return (
    <div className="chat">
      <ChatBar socket={socket} />
      <div className="chat__main">
        <ChatBody
          socket={socket}
          messages={messages}
          lastMessageRef={lastMessageRef}
        />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;
