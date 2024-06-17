import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const Login = (props) => {
  const [email, setEmail] = useState("admin");
  const [password, setPassword] = useState("123456");

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
      })
      .catch((err) => {
        // console.log(err.response.data);
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
              text: "Incorrect email or password.",
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
        marginTop: "10%",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div
        style={{
          width: "80%",
          height: "60%",
          padding: "10rem",
          backgroundColor: "#eeeeeeee",
          boxShadow: "rgba(50, 50, 93, 0.25) 0px 0px 100px 10px",
          borderRadius: "2rem",
          // border: "1px solid #000",
          minWidth: "600px",
        }}
      >
        <h1>Admin Login</h1>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="admin@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="qwerty"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          style={{
            marginTop: "25px",
            width: "100%",
          }}
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};
export default Login;
