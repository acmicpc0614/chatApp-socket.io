import { useNavigate } from "react-router";

const TopNav = (props) => {
  const navigate = useNavigate();

  const logOut = () => {
    // console.log("logOut btn called.");
    props.setIsLogin(false);
    localStorage.removeItem("is_authenticated");
    localStorage.removeItem("is_authenticated");
    localStorage.removeItem("userName");
    localStorage.removeItem("userAvatar");
    navigate("/");
  };
  const isLogin = localStorage.getItem("is_authenticated");
  const userName = localStorage.getItem("userName");
  const userAvatar = localStorage.getItem("userAvatar");

  const handleConnect = () => {
    props.socket.emit("newUser", { userName, socketID: props.socket.id });
    navigate("/chat");
  };
  return (
    <>
      <div className="topnav d-flex">
        <img
          src={require(`../../data/avatars/man-${userAvatar}.png`)}
          style={{
            alignContent: "center",
            justifyContent: "center",
            width: "25px",
            height: "25px",
            borderRadius: "50%",
          }}
        />

        <div
          onClick={() => {
            navigate("/home");
          }}
        >
          Home
        </div>
        <div
          onClick={() => {
            handleConnect();
          }}
        >
          Chat
        </div>
        <div
          onClick={() => {
            navigate("/commit");
          }}
        >
          Commit
        </div>
        <div onClick={logOut}>Logout</div>
        <h5
          style={{
            textAlign: "center",
          }}
        >
          {isLogin ? `Hello, ${userName}` : "No"}
        </h5>
      </div>
    </>
  );
};
export default TopNav;
