import { useEffect, useState } from "react";

const ChatBar = ({ socket }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("newUserResponse", (data) => setUsers(data));
    console.log(users);
  }, [socket, users]);
  return (
    <div className="chat__sidebar">
      <h2>Open Chat</h2>
      <div>
        <h4 className="chat__header">ACTIVE USERS</h4>
        <div className="chat__users">
          <div className="chat__users_item">
            {users.map((user) => (
              <p key={user.socketID}>{user.userName}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
