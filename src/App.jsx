import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Header, ThemeToggle } from "./common/components/Header";
import { Homepage } from "./common/components/Homepage";
import { Landing } from "./common/components/Landing";
import { setAuthSetup } from "./features/auth/authSlice";
import { Login } from "./features/auth/login/Login";
import { Signup } from "./features/auth/signup/Signup";
import { SingleLabelNotes } from "./features/notes/SingleLabelNotes";
import { Account } from "./features/user/Account";
import { setupAuthExceptionHandler, setUpAuthHeaderForServiceCalls } from "./services/users";
const App = () => {
  const { authorized } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    setupAuthExceptionHandler(dispatch, navigate);
    setUpAuthHeaderForServiceCalls(localStorage.getItem("token"));
    dispatch(setAuthSetup());
  }, [dispatch, navigate]);

  function Redirector(props) {
    if (authorized) {
      return (
        <Route
          {...props}
          element={
            <Homepage />
          }
        />
      );
    } else {
      return (
        <Route
          {...props}
          element={
            <Login />
          }
        />
      );
    }
  }
  return (
    <main className="text-black dark:text-white">
      {!authorized ? (
        <div className="p-2  flex min-w-screen h-9">
          <div className="ml-auto">
            <ThemeToggle />
          </div>

        </div>)
        : (
          <Header />
        )}

      <Routes>
        <Route path="/" element={authorized ? <Homepage /> : <Landing />} />
        <Route path="/home" element={<Homepage />} />
        <Redirector path="/login" element={<Login />} />
        <Redirector path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
        <Route path="/label/:labelId" element={<SingleLabelNotes />} />
      </Routes>
    </main>
  );
};

export default App;
