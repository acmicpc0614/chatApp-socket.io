import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import avatar from "../data/avatars/male-1.svg";
import Swal from "sweetalert2";

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
        Swal.fire({
          timer: 500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            Swal.fire({
              icon: "success",
              title: "Successfully registered!",
              showConfirmButton: false,
              timer: 1500,
            });
          },
        });
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
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
          width: "80%",
          padding: "3rem",
          backgroundColor: "#eeeeeeee",
          boxShadow: "rgba(50, 50, 93, 0.25) 0px 0px 100px 10px",
          borderRadius: "2rem",
          justifyContent: "center",
          minWidth: "600px",
        }}
      >
        <h1>Register</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p>Please fill in this form to create an account.</p>
          <p
            className="register-btn"
            onClick={() => {
              navigate("/");
            }}
          >
            <b>go back</b>
          </p>
        </div>
        <div
          className="d-flex flex-row"
          style={{
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              flex: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={avatar}
              style={{
                width: "120px",
                height: "120px",
                border: "1px solid Blue",
                borderRadius: "50%",
              }}
            />
          </div>
          <div
            style={{
              flex: 4,
              margin: "0 1rem 0 1rem",
            }}
          >
            <div>
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
            </div>

            <div>
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
            </div>
          </div>

          <div
            style={{
              flex: 4,
            }}
          >
            <div>
              <label>
                <b>Birthday</b>
              </label>
              <input
                type="date"
                placeholder="2000.10.10"
                value={birthday}
                onChange={(e) => {
                  {
                    setBirthday(e.target.value);
                  }
                }}
              />
            </div>

            <div>
              <label>
                <b>Gender</b>
              </label>
              <select
                className="form-select"
                style={{
                  backgroundColor: "#eeeeee",
                }}
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>
        </div>
        <div>
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
        </div>

        <div>
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
        </div>

        <div>
          <button
            className="registerbtn"
            onClick={handleClick}
            style={{
              width: "100%",
              marginTop: "1rem",
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};
export default Register;
