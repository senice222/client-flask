import axios from "axios";

export const createNews = async (values) => {
    return (await axios.post('https://cherrrn.pythonanywhere.com/create-news', values)).data

}

export const getAllUkrainianNews = async () => {
    return (await axios.get(`https://cherrrn.pythonanywhere.com/uk_news`)).data
}

export const getAllEnglishNews = async () => {
    return (await axios.get(`https://cherrrn.pythonanywhere.com/en_news`)).data
}

export const getDetailedNews = async (id) => {
    return (await axios.get(`https://cherrrn.pythonanywhere.com/news/${id}`)).data
}

export const deleteNews = async (id) => {
    return (await axios.delete(`https://cherrrn.pythonanywhere.com/news/${id}/delete`))
}