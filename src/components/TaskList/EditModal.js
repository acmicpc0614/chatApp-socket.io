import { useEffect, useState } from "react";
import { post } from "../../utilites";
import axios from "axios";

const HIGH = 2;
const MEDIUM = 1;
const LOW = 0;
const DONE = 2;
const INPRO = 1;
const TODO = 0;

const EditModal = ({ setEditModalOpen, editModalOpen, tmp, setTasks }) => {
  const [title, setTitle] = useState(tmp.title);
  const [difficulty, setDiff] = useState(tmp.difficulty);
  const [done, setDone] = useState(tmp.done);
  console.log(title, difficulty, done);
  const handleEditClick = async () => {
    const body = {
      title: title,
      difficulty: difficulty,
      done: done,
      id: tmp.id,
    };
    axios
      .post("http://192.168.144.110:2223/todos/change", body)
      .then((res) => {
        console.log("successfuly changed.");
      })
      .catch((err) => {
        // console.log(err.response.data);
      });
    axios
      .get("http://192.168.144.110:2223/todos/all")
      .then(async (res) => {
        // console.log(res.data);
        await setTasks(res.data);
      })
      .catch((err) => {
        // console.log(err.response.data);
      });
    setEditModalOpen(false);
  };
  return (
    <div
      style={{
        zIndex: "100",
        width: "100%",
        height: "100vh",
        backgroundColor: "#cccccc88",
        position: "absolute",
        justifyContent: "center",
        alignContent: "center",
        display: "flex",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <div
        className="container "
        style={{
          width: "600px",
          padding: "2rem",
          backgroundColor: "#eeeeee",
          boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 100px 30px",
          borderRadius: "1rem",
          minWidth: "350px",
          zIndex: "101",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="d-flex"
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            color: "#000",
            fontSize: "24px",
          }}
        >
          <b>Edit Task</b>
          <div
            className="	fa fa-close"
            onClick={() => {
              setEditModalOpen(false);
            }}
          />
        </div>
        <span className="modal-text">Task</span>
        <input
          type="text"
          placeholder="send article to editor"
          style={{
            borderRadius: "1rem",
          }}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <span className="modal-text">Priority</span>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            className="addTask1-btn"
            style={{
              backgroundColor: difficulty === HIGH ? "red" : "",
              color: difficulty === HIGH ? "#fff" : "",
            }}
            onClick={() => {
              setDiff(HIGH);
            }}
          >
            High
          </div>
          <div
            className="addTask2-btn"
            style={{
              backgroundColor: difficulty === MEDIUM ? "orange" : "",
              color: difficulty === MEDIUM ? "#fff" : "",
            }}
            onClick={() => {
              setDiff(MEDIUM);
            }}
          >
            Medium
          </div>
          <div
            className="addTask3-btn"
            style={{
              backgroundColor: difficulty === LOW ? "green" : "",
              color: difficulty === LOW ? "#fff" : "",
            }}
            onClick={() => {
              setDiff(LOW);
            }}
          >
            Low
          </div>
        </div>
        <div
          className="d-flex"
          style={{
            justifyContent: "end",
          }}
        >
          <button
            style={{
              borderRadius: "0.5rem",
              backgroundColor: "rgb(96, 48, 255)",
              border: "none",
              justifyContent: "end",
              boxShadow: "rgba(50, 50, 93, 0.25) 10px 11px 15px -1px",
              width: "100px",
            }}
            onClick={handleEditClick}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};
export default EditModal;
