import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import CreateModal from "./CreateModal";
import DeleteModal from "./DeleteModal";
import axios from "axios";
import EditModal from "./EditModal";
import Notification from "../notification/Notification";
const HIGH = 2;
const MEDIUM = 1;
const LOW = 0;

const DONE = 2;
const INPRO = 1;
const TODO = 0;

const TaskList = () => {
  const [tmp, setTmp] = useState({});
  const [tasks, setTasks] = useState([]);
  const [searchtxt, setSearchTxt] = useState("");
  const [deleteid, Setdeleteid] = useState(0);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [CreateModalopen, setCreateModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const initGet = () => {
    axios
      .get("http://192.168.144.110:2223/todos/all")
      .then((res) => {
        // console.log(res.data);
        setTasks(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  useEffect(() => {
    initGet();
  }, []);

  const addTodo = (newTask) => {
    setTasks([newTask].concat(tasks));
  };

  const handleSearch = async () => {
    const body = { searchtxt: searchtxt };
    await axios
      .post("http://192.168.144.110:2223/todos/search", body)
      .then((res) => {
        // console.log(res.data);
        setTasks(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  useEffect(() => {
    if (!searchtxt.trim()) initGet();
  }, [searchtxt]);
  return (
    <>
      <div
        className="container"
        style={{
          width: "1000px",
        }}
      >
        <div
          className="d-flex align-items-center justify-content-between"
          style={{
            marginTop: "3rem",
          }}
        >
          <div
            style={{
              fontSize: "36px",
              color: "#000",
              fontWeight: "bold",
            }}
          >
            Task List
          </div>
          <div>
            <input
              type="text"
              style={{
                // border: "1px solid #141414",
                boxShadow: "rgba(50, 50, 93, 0.25) 10px 11px 15px -1px",
                backgroundColor: "#eeeeff",
              }}
              placeholder="search"
              value={searchtxt}
              onChange={(e) => {
                setSearchTxt(e.target.value);
                handleSearch();
              }}
            />
          </div>
          <div>
            <button
              style={{
                borderRadius: "0.5rem",
                backgroundColor: "rgb(96, 48, 255)",
                border: "none",
                boxShadow: "rgba(50, 50, 93, 0.25) 10px 11px 15px -1px",
                width: "150px",
              }}
              onClick={() => setCreateModalOpen(true)}
            >
              + Add Task
            </button>
          </div>
        </div>

        <div className="">
          {tasks.map((item) => (
            <TaskItem
              key={item._id}
              id={item._id}
              title={item.title}
              difficulty={item.difficulty}
              done={item.done}
              setDeleteModalOpen={setDeleteModalOpen}
              setEditModalOpen={setEditModalOpen}
              Setdeleteid={Setdeleteid}
              setTasks={setTasks}
              setTmp={setTmp}
            />
          ))}
        </div>
      </div>
      {CreateModalopen && (
        <CreateModal
          setCreateModalOpen={setCreateModalOpen}
          CreateModalopen={CreateModalopen}
          addTodo={addTodo}
        />
      )}

      {deleteModalOpen && (
        <DeleteModal
          deleteModalOpen={deleteModalOpen}
          setDeleteModalOpen={setDeleteModalOpen}
          deleteid={deleteid}
          setTasks={setTasks}
        />
      )}
      {editModalOpen && (
        <EditModal
          setEditModalOpen={setEditModalOpen}
          editModalOpen={editModalOpen}
          tmp={tmp}
          setTasks={setTasks}
        />
      )}
    </>
  );
};
export default TaskList;
