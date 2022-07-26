import { useContext } from "react";
import { AuthContext  } from "../contexts/AuthContext";

const useAuth = () => {
    console.log("s",AuthContext);
    return useContext(AuthContext);
}

export default useAuth;