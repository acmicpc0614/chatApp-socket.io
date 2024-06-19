import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import Modal from "../components/Modal/Modal";

const Register = () => {
  const [name, setname] = useState("");
  const [userID, setUserID] = useState("");
  const [gender, setgender] = useState("1");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [avatarID, setavatarID] = useState("1");
  const [modalopen, setModalopen] = useState(false);
  // name, gender, birthday, password, userID, password2
  const navigate = useNavigate();
  const handleClick = () => {
    // console.log(name, userID, password, password2, gender, birthday, avatarID);
    const body = {
      name: name,
      gender: gender,
      birthday: birthday,
      password: password,
      userID: userID,
      password2: password2,
    };
    axios
      .post("http://192.168.144.110:2223/user/register", body)
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
              src={require(`../data/avatars/man-${avatarID}.png`)}
              style={{
                width: "120px",
                height: "120px",
                border: "3px solid #aaaaaa",
                borderRadius: "50%",
              }}
              onClick={() => {
                setModalopen(true);
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
                <option
                  onClick={() => {
                    setgender(1);
                  }}
                >
                  Male
                </option>
                <option
                  onClick={() => {
                    setgender(0);
                  }}
                >
                  Female
                </option>
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
            <b>Conform Password</b>
          </label>
          <input
            type="password"
            placeholder="conform Password"
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
      {modalopen && (
        <Modal setModalopen={setModalopen} setavatarID={setavatarID} />
      )}
    </div>
  );
};
export default Register;
