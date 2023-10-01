import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import {useTranslation} from "react-i18next";
import style from './ChangeLanguageButton.module.scss'
import {useNavigate} from "react-router-dom";
import {setCookie} from "nookies";

const ChangeLanguageButton = ({setIsActive}) => {
    const {t, i18n} = useTranslation()
    const navigate = useNavigate()
    const location = window.location.pathname

    const handleClick = (language, popupState) => {
        if (location === '/uk_news') {
            navigate('/en_news')
        } else if (location === '/en_news') {
            navigate('/uk_news')
        }
        setCookie(null, `language`, language, {
            path: '/'
        })
        i18n.changeLanguage(language);
        popupState.close();
        setIsActive(false)
    };

    return (
        <PopupState className={style.popup} variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <p className={style.language} {...bindTrigger(popupState)}>
                        {t("LANGUAGE")}
                    </p>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={() => handleClick('uk', popupState)}>Ukranian</MenuItem>
                        <MenuItem onClick={() => handleClick('en', popupState)}>English</MenuItem>
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
};

export default ChangeLanguageButton;
