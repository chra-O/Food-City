import "./App.css";
import LogInPage from "./Page/LogInPage";
import { Routes, Route } from "react-router-dom";
import ForgetPassword from "./Page/ForgetPassword";
import SignUpPage from "./Page/SignUpPage";

function App() {
  return (
    <>
      {/* <LogInPage /> */}

      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
