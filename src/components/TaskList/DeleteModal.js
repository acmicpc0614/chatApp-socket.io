import axios from "axios";

const DeleteModal = ({
  deleteModalOpen,
  setDeleteModalOpen,
  deleteid,
  setTasks,
}) => {
  const handleDeleteClick = () => {
    const body = {
      id: deleteid,
    };
    axios
      .post("http://192.168.144.110:2223/todos/deleteOne", body)
      .then((res) => {
        // console.log(res.status);
        // setTasks(res.data);
      })
      .catch((err) => {
        // console.log(err.response.data);
      });
    setDeleteModalOpen(false);
    axios
      .get("http://192.168.144.110:2223/todos/all")
      .then((res) => {
        // console.log(res.data);
        setTasks(res.data);
      })
      .catch((err) => {
        // console.log(err.response.data);
      });
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
          width: "450px",
          padding: "2rem",
          backgroundColor: "#eeeeee",
          boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 100px 30px",
          borderRadius: "1rem",
          justifyContent: "center",
          minWidth: "350px",
          zIndex: "101",
          padding: "2rem 5rem 2rem 5rem",
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontWeight: "bold",
            padding: "0 3rem 0 3rem",
          }}
        >
          Are you sure you want to delete this task?
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            textAlign: "center",
            marginTop: "1rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="curpo"
            style={{
              width: "100px",
              borderRadius: "0.5rem",
              backgroundColor: "rgb(96, 48, 255)",
              color: "#fff",
              padding: "0.5rem",
              margin: "0.5rem",
              fontWeight: "bold",
              boxShadow: "rgba(50, 50, 93, 0.25) 10px 11px 15px -1px",
            }}
            onClick={() => {
              handleDeleteClick();
            }}
          >
            Delete
          </div>
          <div
            className="curpo"
            style={{
              width: "100px",
              borderRadius: "0.5rem",
              border: "1px solid #aaaaaa",
              padding: "0.5rem",
              margin: "0.5rem",
              fontWeight: "bold",
              boxShadow: "rgba(50, 50, 93, 0.25) 10px 11px 15px -1px",
            }}
            onClick={() => {
              setDeleteModalOpen(false);
            }}
          >
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeleteModal;
