import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const body = { userID: email, password: password };

    axios
      .post("http://localhost:2223/user/login", body)
      .then((res) => {
        // console.log(res.data);
        localStorage.setItem("is_authenticated", true);
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("userID", res.data.userID);

        props.setIsLogin(true);

        Swal.fire({
          timer: 500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            Swal.fire({
              icon: "success",
              title: "Successfully logged in!",
              showConfirmButton: false,
              timer: 1500,
            });
          },
        });
        navigate("/commit");
      })
      .catch((err) => {
        let error = err.response.data.error;
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            Swal.fire({
              icon: "error",
              title: "Error!",
              text: `${error}`,
              showConfirmButton: true,
            });
          },
        });
      });
  };

  return (
    <div
      className="container d-flex"
      style={{
        justifyContent: "center",
        alignContent: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <div
        className="container"
        style={{
          width: "500px",
          // height: "300px",
          // padding: "10rem",
          backgroundColor: "#eeeeeeee",
          boxShadow: "rgba(50, 50, 93, 0.25) 0px 0px 100px 10px",
          borderRadius: "0.5rem",
          // border: "1px solid #000",
          minWidth: "300px",
          padding: "2rem",
        }}
      >
        {/* <h1>Admin Login</h1> */}
        <label htmlFor="email">UserID</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="UserID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="***********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ border: password === "" ? "1px solid #ff0000" : "" }}
        />

        {password === "" ? (
          <div
            style={{
              color: "#ff0000",
            }}
          >
            <i>Please choose a password.</i>
          </div>
        ) : (
          <></>
        )}
        <div
          className="d-flex"
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <button
              style={{
                marginTop: "25px",
                width: "100%",
              }}
              onClick={handleLogin}
            >
              Sign In
            </button>
          </div>
          <div
            className="register-btn"
            onClick={() => {
              navigate("/register");
            }}
          >
            <b>Register</b>
            {/* <b>Forgot Password?</b> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
