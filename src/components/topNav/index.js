import { useNavigate } from "react-router";

const TopNav = (props) => {
  const navigate = useNavigate();

  const logOut = () => {
    // console.log("logOut btn called.");
    props.setIsLogin(false);
    localStorage.setItem("is_authenticated", null);
    navigate("/");
  };

  return (
    <>
      <div className="topnav">
        <div
          onClick={() => {
            navigate("/home");
          }}
        >
          Home
        </div>
        <div
          onClick={() => {
            navigate("/chat");
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
      </div>
    </>
  );
};
export default TopNav;
