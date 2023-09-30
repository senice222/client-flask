import {parseCookies} from "nookies";
import {Navigate} from "react-router-dom";

export const ProtectedRoute = ({children}) => {
    const cookies = parseCookies()
    if (!cookies.admin) {
        return <Navigate to="/"/>;
    }
    return children
};