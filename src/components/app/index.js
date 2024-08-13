import React, { useEffect, useState } from "react";

import NoPage from "../../pages/NoPage";
import CommitPage from "../../pages/CommitPage";
import Homepage from "../../pages/Homepage";
import Login from "../../pages/Login";
import TopNav from "../topNav";
import ChatPage from "../../pages/ChatPage";
import Register from "../../pages/Register";
import TestPage from "../../pages/TestPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserManagement from "../../pages/UserManagement";
// import { Socket } from "socket.io-client";
import socketIO from "socket.io-client";

// const socket = socketIO.connect("http://192.168.144.110:2223");

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  // console.log(socket);
  return (
    <TestPage />
    // <BrowserRouter>
    //   {" "}
    //   {/* {isLogin ? <TopNav setIsLogin={setIsLogin} isLogin={isLogin} /> : <></>} */}{" "}
    //   <div>
    //     <Routes>
    //       <Route
    //         path="/"
    //         element={<Login setIsLogin={setIsLogin} isLogin={isLogin} />}
    //       />
    //       <Route
    //         path="/login"
    //         element={<Login setIsLogin={setIsLogin} isLogin={isLogin} />}
    //       />
    //       <Route path="/register" element={<Register />} />{" "}
    //       <Route path="/home" element={<Homepage />} />{" "}
    //       <Route path="/commit" element={<CommitPage />} />{" "}
    //       {/* <Route path="/chat" element={<ChatPage />} /> */}{" "}
    //       {/* <Route path="/test" element={<TestPage />} /> */}{" "}
    //       <Route path="/users" element={<UserManagement />} />{" "}
    //       <Route path="*" element={<NoPage title={"404"} />}></Route>
    //     </Routes>{" "}
    //   </div>{" "}
    // </BrowserRouter>
  );
};

export default App;
