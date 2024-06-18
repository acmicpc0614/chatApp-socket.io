import React, { useEffect, useState } from "react";

import NoPage from "../../pages/NoPage";
import CommitPage from "../../pages/CommitPage";
import Homepage from "../../pages/Homepage";
import Login from "../../pages/Login";
import TopNav from "../topNav";
import ChatPage from "../../pages/ChatPage";
import TestPage from "../../pages/TestPage";
import socketIO from "socket.io-client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../../pages/Register";

// const socket = socketIO.connect("http://localhost:2223");
const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(JSON.parse(localStorage.getItem("is_authenticated")));
  }, []);
  return (
    // <div
    //   className="p-3"
    //   style={{
    //     backgroundColor: "#0d3a2a",
    //     height: "100vh",
    //     display: "flex",
    //     alignItems: "center",
    //     alignContent: "center",
    //   }}
    // >
    //   <TestPage />
    // </div>
    <BrowserRouter>
      {isLogin ? <TopNav setIsLogin={setIsLogin} isLogin={isLogin} /> : <></>}
      <div>
        <Routes>
          <Route
            path="/"
            element={<Login setIsLogin={setIsLogin} isLogin={isLogin} />}
          />
          <Route
            path="/login"
            element={<Login setIsLogin={setIsLogin} isLogin={isLogin} />}
          />
          <Route path="/register" element={<Register />} />

          <Route path="/home" element={<Homepage />} />
          <Route path="/commit" element={<CommitPage />} />
          {/* <Route path="/chat" element={<ChatPage socket={socket} />} /> */}
          <Route path="/test" element={<TestPage />} />
          <Route path="*" element={<NoPage title={"404"} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
