import React, {useEffect} from 'react';
import style from "./Management.module.scss";
import {useTranslation} from "react-i18next";

const Management = () => {
    const {t} = useTranslation()


    useEffect(() => {
        document.title = 'Management';
    }, []);

    return (
        <div className={style.container}>
            <div className={style.content}>
                <h2>{t("management")}</h2>
            </div>
        </div>
    );
};

export default Management;
