import "./App.css";
import LogInPage from "./Page/LogInPage";
import { Routes, Route } from "react-router-dom";
import ForgetPassword from "./Page/ForgetPassword";
import SignUpPage from "./Page/SignUpPage";
import Home from "./Page/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
