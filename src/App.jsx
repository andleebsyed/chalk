import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Header, ThemeToggle } from "./common/components/Header";
import { Homepage } from "./common/components/Homepage";
import { Landing } from "./common/components/Landing";
import { setAuthSetup } from "./features/auth/authSlice";
import { Login } from "./features/auth/login/Login";
import { Signup } from "./features/auth/signup/Signup";
import { fetchNotesData } from "./features/notes/notesSlice";
import { SingleLabelNotes } from "./features/notes/SingleLabelNotes";
import { Account } from "./features/user/Account";
import { setupAuthExceptionHandler, setUpAuthHeaderForServiceCalls } from "./services/users";
const App = () => {
  const { authorized, authSetupStatus } = useSelector(state => state.auth)
  const { notesFetchstatus } = useSelector(state => state.notes)
  console.log(authorized)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    console.log("auth setter up and running")
    setupAuthExceptionHandler(dispatch, navigate);
    setUpAuthHeaderForServiceCalls(localStorage.getItem("token"));
    dispatch(setAuthSetup());
  }, [dispatch, navigate]);

  useEffect(() => {
    if (notesFetchstatus === "idle" && authSetupStatus) {
      dispatch(fetchNotesData())
    }

  }, [notesFetchstatus, authSetupStatus])
  return (
    <main className="text-black dark:text-white">
      {!authorized ? (
        <div className="p-2 sticky top-0  flex self-start   min-w-screen right-0 h-9">
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
        <Route path="/label/:labelId" element={<SingleLabelNotes />} />
      </Routes>
    </main>
  );
};

export default App;
