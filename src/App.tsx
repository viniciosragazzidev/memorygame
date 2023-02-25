import { useState } from "react";
import "./styles/global.css";
import ContextProvider from "./context/ContextApp";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <ContextProvider>
      <Outlet />
    </ContextProvider>
  );
}

export default App;
