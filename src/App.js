import "./App.css";
import LogInPage from "./Page/LogInPage";
import { Routes, Route } from "react-router-dom";
import ForgetPassword from "./Page/ForgetPassword";
import SignUpPage from "./Page/SignUpPage";
import Home from "./Page/Home";
import Messanger from "./Page/Messanger";
import Notification from "./Page/Notification";
import Profile from "./Page/Profile";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/Messanger" element={<Messanger />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Notification" element={<Notification />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
