import axios from "axios";

export const sendFeedback = async (values) => {
    return (await axios.post('http://cherrrn.pythonanywhere.com/category/feedback', values)).data
}