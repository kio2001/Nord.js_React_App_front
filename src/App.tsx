import * as React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Forget from "./Pages/Login/Forget";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import TopPage from "./Pages/TopPage";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/TopPage" element={<TopPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Forget" element={<Forget />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
