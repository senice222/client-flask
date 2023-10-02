import axios from "axios";

export const createNews = async (values, file) => {
    // const formData = new FormData();
    // formData.append("title", values.email)
    // formData.append("text", values.text)
    // formData.append("description", values.username)
    // formData.append("password", values.password)
    // formData.append("language", values.language)
    // formData.append("image_file", file.originFileObj)
    // formData.append("image_url", values.image_url)
    //
    // const config = {
    //     headers: { "Content-Type": "multipart/form-data" },
    // };

    return (await axios.post('https://igorchern.pythonanywhere.com/create-news', values)).data
}

export const getAllUkrainianNews = async () => {
    return (await axios.get(`https://igorchern.pythonanywhere.com/uk_news`)).data
}

export const getAllEnglishNews = async () => {
    return (await axios.get(`https://igorchern.pythonanywhere.com/en_news`)).data
}

export const getDetailedNews = async (id) => {
    return (await axios.get(`https://igorchern.pythonanywhere.com/news/${id}`)).data
}

export const deleteNews = async (id) => {
    return (await axios.delete(`https://igorchern.pythonanywhere.com/news/${id}/delete`))
}