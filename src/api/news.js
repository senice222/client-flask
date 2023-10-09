import axios from "axios";

export const createNews = async (values) => {
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
export const updateNews = async (id, values) => {
    return (await axios.post(`https://igorchern.pythonanywhere.com/edit_news/${id}`, values))
}