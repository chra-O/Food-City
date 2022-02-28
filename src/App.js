import "./App.css";
import LogInPage from "./Page/LogInPage";
import { Routes, Route } from "react-router-dom";
import ForgetPassword from "./Page/ForgetPassword";
import SignUpPage from "./Page/SignUpPage";
import Home from "./Page/Home";
import Messanger from "./Page/Messanger";
import Notification from "./Page/Notification";
import Profile from "./Page/Profile";
import AllSAvedPost from "./Page/AllSAvedPost";
import EiditProfile from "./Page/EiditProfile";
import Follower from "./Page/Follower";
import ShowMassage from "./Page/ShowMassage";
import Setting from "./Page/Setting";

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
        <Route path="/allsavedpost" element={<AllSAvedPost />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/setting" element={<EiditProfile />} />
        <Route path="/follower" element={<Follower />} />
        <Route path="/showMassage" element={<ShowMassage />} />
        <Route path="/settingprofile" element={<Setting />} />
      </Routes>
    </>
  );
}

export default App;
