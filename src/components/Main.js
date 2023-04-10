import React from "react";
import App from "../App";

import Sidebar from "./SideBar";

function Main() {
  return Boolean(localStorage.getItem("token")) ? (
    <Sidebar />
  ) : (
    <App />
  );
}

export default Main;
