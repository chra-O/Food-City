import "./App.css";
import LogInPage from "./Page/LogInPage";
import { Routes, Route } from "react-router-dom";
import ForgetPassword from "./Page/ForgetPassword";

function App() {
  return (
    <>
      {/* <LogInPage /> */}

      <Routes>
      <Route path="/" element={<LogInPage />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
      </Routes>
    </>
  );
}

export default App;
