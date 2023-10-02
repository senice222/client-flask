import axios from "axios";

export const sendFeedback = async (values) => {
    return (await axios.post('https://igorchern.pythonanywhere.com/category/feedback', values)).data
}