import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export function useAuth () {
    return useContext(AuthContext);
}