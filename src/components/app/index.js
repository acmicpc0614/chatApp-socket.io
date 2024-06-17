import React, { useEffect, useState } from "react";

import NoPage from "../../pages/NoPage";
import CommitPage from "../../pages/CommitPage";
import Login from "../../pages/Login";
import TopNav from "../topNav";
import ChatPage from "../../pages/ChatPage";
import TestPage from "../../pages/TestPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(JSON.parse(localStorage.getItem("is_authenticated")));
  }, []);

  return (
    // <TestPage />
    <div>
      {isLogin ? (
        <div>
          <TopNav setIsLogin={setIsLogin} isLogin={isLogin} />
          <CommitPage />
          {/* <NoPage /> */}
        </div>
      ) : (
        <Login setIsLogin={setIsLogin} isLogin={isLogin} />
      )}
    </div>
  );
};

export default App;
