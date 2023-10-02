import axios from "axios";
import {destroyCookie} from "nookies";

export const authorization = async (values) => {
    const {data} = await axios.post('https://igorchern.pythonanywhere.com/login', values)
    return data
}
export const logout = (cookies) => {

    if (cookies.admin) {
        destroyCookie(null, 'admin', {
            path: '/'
        })
    } else {
        destroyCookie(null, 'user', {
            path: '/'
        })
    }
}