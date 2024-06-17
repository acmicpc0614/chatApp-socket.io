const TopNav = (props) => {
  // useEffect(() => {
  //   setIsLogin(JSON.parse(localStorage.getItem("is_authenticated")));
  // }, []);
  const logOut = () => {
    // console.log("logOut btn called.");
    props.setIsLogin(false);
    localStorage.setItem("is_authenticated", null);
  };
  return (
    <>
      <div className="topnav">
        <div>Home</div>
        <div>Chat</div>
        <div>Commit</div>
        <div onClick={logOut}>Logout</div>
      </div>
    </>
  );
};
export default TopNav;
