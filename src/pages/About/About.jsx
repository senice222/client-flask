import React from 'react';
import style from './About.module.scss'
import {useTranslation} from "react-i18next";

const About = () => {
    const {t} = useTranslation()

    return (
        <div className={style.container}>
            <div className={style.content}>
                <h2>{t("aboutUs")}</h2>
            </div>
        </div>
    );
};

export default About;
