import { createContext, useReducer, useEffect  } from "react";
import { isValidToken } from "../utils/jwt";
import apiService from "../app/apiService";

const initialState = {
    isInitialized: false,
    isAuthemticated: false,
    user: null,
};

const INITIALIZE = "AUTH.INITIALIZE";
const LOGIN_SUCCESS = "AUTH.LOGIN_SUCCESS";
const REGISTER_SUCCESS = "AUTH.REGISTER_SUCCESS";
const LOGOUT = "AUTH.LOGOUT";
const UPDATE_PROFILE = "AUTH.UPDATE_PROFILE";

const reducer = (state, action) => {
    switch (action.type) {
      case INITIALIZE:
        const { isAuthenticated, user } = action.payload;
        return {
          ...state,
          isInitialized: true,
          isAuthenticated,
          user,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload.user,
        };
      case REGISTER_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload.user,
        };
      case LOGOUT:
        return {
          ...state,
          isAuthenticated: false,
          user: null,
        };
      case UPDATE_PROFILE:
        const {
          name,
          avatarUrl,
          coverUrl,
          aboutMe,
          city,
          country,
          company,
          jobTitle,
          facebookLink,
          instagramLink,
          linkedinLink,
          twitterLink,
          friendCount,
          postCount,
        } = action.payload;
        return {
          ...state,
          user: {
            ...state.user,
            name,
            avatarUrl,
            coverUrl,
            aboutMe,
            city,
            country,
            company,
            jobTitle,
            facebookLink,
            instagramLink,
            linkedinLink,
            twitterLink,
            friendCount,
            postCount,
          },
        };
      default:
        return state;
    }
  };

const AuthContext = createContext({...initialState});

const setSession = (accessToken) => {
    if(accessToken) {
        window.localStorage.setItem("accessToken", accessToken);
        apiService.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
        window.localStorage.setItem("accessToken");
        delete apiService.defaults.headers.common.Authorization;
    }
}

function AuthProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const login = async ({ email, password }, callback) => {
        const response = await apiService.post("/auth/login", { email, password });
        const {user, accessToken } = response.data;

        setSession(accessToken);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: {user},
        });

        callback();
    }

    return (
        <AuthContext.Provider value={{...state, login}}>
            {children}
        </AuthContext.Provider>
    )
}

export  { AuthContext, AuthProvider };