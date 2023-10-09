import './styles/App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Management from './pages/Management/Management'
import CreateNews from "./pages/CreateNews/CreateNews";
import Feedback from "./pages/Feedback/Feedback";
import Login from "./pages/Login/Login";
import React, {useState} from "react";
import {ProtectedRoute} from "./utils/protected";
import UkrainianNews from "./pages/News/UkrainianNews/UkrainianNews";
import About from "./pages/About/About";
import DetailedNews from "./pages/DetailedNews/DetailedNews";
import {useTranslation} from "react-i18next";
import EnglishNews from "./pages/News/EnglishNews/EnglishNews";
import EditorContext from "./context/editorContext";
import EditNews from "./pages/EditNews/EditNews";
import EditNewsContext from "./context/editNewsContext";

function App() {
    const {i18n} = useTranslation()
    const [editorContent, setEditorContent] = useState('');
    const [editNewsContent, setEditNewsContent] = useState('')

    const contextValue = {
        editorContent,
        setEditorContent
    }
    const editNewsContextValue = {
        editNewsContent,
        setEditNewsContent
    }

    return (
        <EditNewsContext.Provider value={editNewsContextValue}>
            <EditorContext.Provider value={contextValue}>
                <BrowserRouter>
                    <Layout>
                        <div>
                            <Routes>
                                <Route path={'/'} element={<About />}/>
                                { i18n.language === 'uk'
                                    ?
                                    <Route path={'/uk_news'} element={<UkrainianNews/>} />
                                    :
                                    <Route path={'/en_news'} element={<EnglishNews/>}/>
                                }
                                <Route path={'/category/management'} element={<Management />}/>
                                <Route path={'/category/feedback'} element={<Feedback />}/>
                                <Route path={'/create-news'} index element={
                                    <ProtectedRoute>
                                        <CreateNews />
                                    </ProtectedRoute>
                                } />
                                <Route path={'/edit_news/:id'} index element={
                                    <ProtectedRoute>
                                        <EditNews />
                                    </ProtectedRoute>
                                } />
                                <Route path={'/news/:id'} element={<DetailedNews />} />
                                <Route path={'/login'} element={<Login />}/>
                            </Routes>
                        </div>
                    </Layout>
                </BrowserRouter>
            </EditorContext.Provider>
        </EditNewsContext.Provider>

    );
}

export default App;
