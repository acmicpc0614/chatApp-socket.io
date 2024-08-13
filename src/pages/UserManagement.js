import axios from "axios";
import { useEffect, useState } from "react";
import UserManagementItem from "../components/userManagementItem/UserManagementItem";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.144.110:2223/user/getallusers")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  return (
    <>
      <div
        className="d-flex flex-row"
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="d-flex flex-row"
          style={{
            width: "80%",
            padding: "20px",
            textAlign: "center",
            justifyContent: "center",
            borderBottom: "1px solid #333333",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span> Name </span> <span> UserId </span> <span> Gender </span>{" "}
          <span> Birthday </span> <span> Register Time </span>{" "}
          <span> Role </span> <span> </span>{" "}
        </div>{" "}
        {users.map((item, idx) => (
          <UserManagementItem
            key={idx}
            user={item}
            setUsers={setUsers}
            users={users}
          />
        ))}{" "}
      </div>{" "}
    </>
  );
};
export default UserManagement;
