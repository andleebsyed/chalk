import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Header, ThemeToggle } from "./common/components/Header";
import { Homepage } from "./common/components/Homepage";
import { Landing } from "./common/components/Landing";
import { setAuthSetup } from "./features/auth/authSlice";
import { Login } from "./features/auth/login/Login";
import { Signup } from "./features/auth/signup/Signup";
import { Account } from "./features/user/Account";
import { setupAuthExceptionHandler, setUpAuthHeaderForServiceCalls } from "./services/users";
const App = () => {
  const { authorized } = useSelector(state => state.auth)
  console.log(authorized)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    console.log("auth setter up and running")
    setupAuthExceptionHandler(dispatch, navigate);
    setUpAuthHeaderForServiceCalls(authorized);
    dispatch(setAuthSetup());
  }, [dispatch, navigate]);
  return (
    <main className="text-black dark:text-white">
      {!authorized ? (
        <div className="p-2 fixed  flex   min-w-screen right-0 h-9">
          <ThemeToggle />
        </div>)
        : (
          <Header />
        )}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home/*" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </main>
  );
};

export default App;
