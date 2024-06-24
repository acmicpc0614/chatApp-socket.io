import { useState } from "react";
import DeleteModal from "./DeleteModal";
import axios from "axios";

const TaskItem = ({
  title,
  difficulty,
  done,
  id,
  setDeleteModalOpen,
  setEditModalOpen,
  Setdeleteid,
  setTasks,
  setTmp,
}) => {
  const diff = [
    {
      title: "Low",
      color: "Green",
    },
    {
      title: "Medium",
      color: "Orange",
    },
    {
      title: "High",
      color: "Red",
    },
  ];

  const states = ["To Do", "In Progress", "Done"];
  const colors = ["gray", "blue", "green"];
  const COLOR1 = "rgb(96, 48, 255)";
  const DONE = 2;
  const INPRO = 1;
  const TODO = 0;

  const handleDoneClick = () => {
    if (done < DONE) {
      const body = {
        title: title,
        difficulty: difficulty,
        done: done + 1,
        id: id,
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
    }
  };
  return (
    <div>
      <div
        className="container d-flex flex-row task-list-item"
        style={{
          backgroundColor: "#eeeeee",
          // margin: "1rem",
          marginTop: "1rem",
          padding: "1rem",
          borderRadius: "1rem",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "780px",
        }}
      >
        <div
          style={{
            flex: 4,
            marginLeft: "1.5rem",
          }}
        >
          <span>Task</span>
          <div>
            <b>{title}</b>
          </div>
        </div>
        <div
          style={{
            flex: 2,
          }}
        >
          <span>Priority</span>
          <div
            style={{
              color: `${diff[difficulty].color}`,
            }}
          >
            <b>{diff[difficulty].title}</b>
          </div>
        </div>
        <div
          style={{
            flex: 2,
            display: "flex",
            justifyContent: "center",
            // alignContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{
              backgroundColor: "#dddddd",
              borderRadius: "0.5rem",
              padding: "0.2rem 0.5rem 0.2rem 0.5rem",
              height: "32px",
            }}
          >
            {states[done]}
          </span>
        </div>
        <div
          style={{
            flex: 2,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {done !== INPRO ? (
            <div
              className="fa fa-circle-o fa-2x"
              style={{
                color: `${colors[done]}`,
              }}
              onClick={handleDoneClick}
            />
          ) : (
            <div
              style={{
                width: "1.5rem",
                height: "1.5rem",
                borderTop: "5px solid green",
                borderLeft: "5px solid green",
                borderRadius: "50%",
                transform: "rotate(-45deg)",
              }}
              onClick={handleDoneClick}
            />
          )}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            // width: "100px"
            flex: 1,
          }}
        >
          <div
            className="fa fa-edit fa-2x edit-btn"
            style={{
              marginRight: "1rem",
            }}
            onClick={() => {
              setEditModalOpen(true);
              const tmp = {
                title: title,
                difficulty: difficulty,
                done: done,
                id: id,
              };
              setTmp(tmp);
            }}
          />
          <div
            className="fa fa-trash fa-2x del-btn"
            onClick={() => {
              setDeleteModalOpen(true);
              Setdeleteid(id);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default TaskItem;
