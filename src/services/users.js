import axios from "axios";
import { BASE_URL } from "./api";

export function setUpAuthHeaderForServiceCalls(token) {
  if (token) {
    return (axios.defaults.headers.common["Authorization"] = token);
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}

export function setupAuthExceptionHandler(dispatch, removeToken, navigate) {
  const UNAUTHORIZED = 401;
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === UNAUTHORIZED) {
        localStorage.clear();
        dispatch(removeToken());
        // dispatch(refreshUserPosts());
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
}

export async function UserSignUp({ name, username, password, email }) {
  try {
    const userDetails = { userDetails: { name, username, password, email } };
    const response = await axios.post(BASE_URL + "/users/signup", userDetails);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("errror occured while signining in ", error?.message);
    return error.response.data;
  }
}

export async function UserSignIn(userDetails) {
  try {
    console.log({ userDetails });
    const response = await axios.post(BASE_URL + "/users/login", {
      userDetails,
    });
    console.log(response);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("errror occured while signining in ", error?.message);
    return error.response.data;
  }
}
