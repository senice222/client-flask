import * as Api from "../api";
import {setCookie} from "nookies";
import {notification} from "antd";

export const onFinish = async (values, navigate, setErr) => {
    try {
        const data = await Api.login.authorization(values.user)
        const expectedFirstTwoLetters = "Se";
        const receivedFirstTwoLetters = data.substring(0, 2);

        if (receivedFirstTwoLetters === expectedFirstTwoLetters) {
            
            setCookie(null, 'admin', data, {
                path: '/'
            })
            notification.success({
                message: "You authorized successfully!",
                duration: 1
            })
            setTimeout(() => {
                navigate('/')
            }, 1000)

        } else {

            setCookie(null, 'user', data, {
                path: '/'
            })
            notification.success({
                message: "You authorized successfully!",
                duration: 1
            })
            setTimeout(() => {
                navigate('/')
            }, 1000)

        }
    } catch (e) {
        console.log(e)
        setErr(true)
    }
};