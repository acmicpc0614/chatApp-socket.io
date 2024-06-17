import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const Register = () => {
  const [name, setname] = useState("");
  const [userID, setUserID] = useState("");
  const [gender, setgender] = useState("1");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  // name, gender, birthday, password, userID, password2
  const navigate = useNavigate();
  const handleClick = () => {
    console.log(name, userID, password, password2);
    const body = {
      name: name,
      gender: gender,
      birthday: birthday,
      password: password,
      userID: userID,
      password2: password2,
    };
    axios
      .post("http://localhost:2223/user/register", body)
      .then((res) => {
        console.log(res.body);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div
        className="container"
        style={{
          width: "80%",
          height: "60%",
          padding: "3rem",
          backgroundColor: "#eeeeeeee",
          boxShadow: "rgba(50, 50, 93, 0.25) 0px 0px 100px 10px",
          borderRadius: "2rem",
          marginTop: "5%",
          justifyContent: "center",
          alignContent: "center",
          minWidth: "600px",
        }}
      >
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>

        <label>
          <b>Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />

        <label>
          <b>UserID</b>
        </label>
        <input
          type="text"
          placeholder="Enter UserID"
          value={userID}
          onChange={(e) => {
            {
              setUserID(e.target.value);
            }
          }}
        />

        <label>
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => {
            {
              setPassword(e.target.value);
            }
          }}
        />

        <label>
          <b>Repeat Password</b>
        </label>
        <input
          type="password"
          placeholder="Repeat Password"
          value={password2}
          onChange={(e) => {
            {
              setPassword2(e.target.value);
            }
          }}
        />
        <p>By creating an account you agree to our </p>

        <button className="registerbtn" onClick={handleClick}>
          Register
        </button>
        <label
          onClick={() => {
            navigate("/");
          }}
        >
          login
        </label>
      </div>
    </>
  );
};
export default Register;
