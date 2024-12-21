import React, { useState } from "react";
import "./App.css";
import "./Styles/general.css"
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import PrintPage from "./Pages/PrintingPage.js";
import LoginPage from "./Pages/LoginPage.js";
import Dashboard from "./Pages/Dashboard.js";


function App() {
  const [username, setUsername] = useState(null);
  const [balance, setBalance] = useState(0);

  const props = {
    username: username,
    balance: balance,

    login: (username, password) => {
      if (true || username == "kiet.nguyen9052" && password == "123") {
        username = username;
        setUsername(username);
        return true;
      }
      else {
        return false;
      }
    },
    logout: () => {
      setUsername(null);
    },
    addBalance: (pages) => {
      setBalance(parseInt(balance) + parseInt(pages));
    },
  }

  return (
    <Router>
      <div style={{ maxWidth: "900px", margin: "20px auto", padding: "20px" }}>
        <header>
          <Link to="/">
            <h1>Hệ thống in tài liệu - HCMUT SSPS</h1>
          </Link>
          {username == null ?
            <div style={{ textAlign: "right" }}>
              <Link to="/login">
                <button>Đăng nhập</button>
              </Link>
              <p>Bạn chưa đăng nhập !</p>
            </div>
            :
            <div style={{ textAlign: "right" }}>
              <button onClick={() => { props.logout(); }}>Đăng xuất</button>
              <p>{username}</p>
            </div>
          }

        </header>

        <Routes>
          <Route path="/" element={
            <Dashboard {...props}></Dashboard>
          }
          />

          <Route path="/login" element={
            <LoginPage {...props}></LoginPage>
          } />

          <Route path="/print" element={
            <PrintPage {...props}></PrintPage>
          } />
        </Routes>
      </div >
    </Router >
  );
}

export default App;
