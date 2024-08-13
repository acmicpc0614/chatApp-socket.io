import axios from "axios";
import { useEffect, useState } from "react";

const Genders = ["Female", "Male"];
const Roles = ["", "User", "Admin", "SuperAdmin"];
const UserManagementItem = ({ user, setUsers, users }) => {
  const [birthday, setBirthday] = useState();
  const [registerTime, setregisterTime] = useState();

  const handleDeleteUser = () => {
    const body = { id: user._id };
    axios
      .post("http://192.168.144.110:2223/user/deleteOne", body)
      .then((res) => {
        setUsers(users.filter((item) => item._id !== res.data._id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    setBirthday(new Date(user.birthday).toLocaleDateString());
    setregisterTime(new Date(user.date).toLocaleDateString());
  }, []);
  return (
    <>
      <div className="d-flex flex-row user-item">
        <div>{user.name}</div>
        <div>{user.userID}</div>
        <div>{Genders[user.gender]}</div>
        <div>{birthday}</div>
        <div>{registerTime}</div>
        <div>{Roles[user.role]}</div>
        <div
          className=" fa fa-trash user-btn-del"
          onClick={handleDeleteUser}
        ></div>
      </div>
    </>
  );
};
export default UserManagementItem;
