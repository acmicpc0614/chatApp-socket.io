import React, { useEffect, useState } from "react";

import NoPage from "../../pages/NoPage";
import CommitPage from "../../pages/CommitPage";
import Homepage from "../../pages/Homepage";
import Login from "../../pages/Login";
import TopNav from "../topNav";
import ChatPage from "../../pages/ChatPage";
import TestPage from "../../pages/TestPage";

const App = () => {
  return (
    <TestPage />
    // <BrowserRouter>
    //   {isLogin ? (
    //     <TopNav setIsLogin={setIsLogin} isLogin={isLogin} socket={socket} />
    //   ) : (
    //     <></>
    //   )}
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
    //       <Route path="/register" element={<Register />} />
    //       <Route path="/home" element={<Homepage />} />
    //       <Route path="/commit" element={<CommitPage />} />
    //       <Route path="/chat" element={<ChatPage socket={socket} />} />
    //       <Route path="/test" element={<TestPage />} />
    //       <Route path="*" element={<NoPage title={"404"} />}></Route>
    //     </Routes>
    //   </div>
    // </BrowserRouter>
  );
};

export default App;
