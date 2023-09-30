import React from 'react';
import style from "../Header/Header.module.scss";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {parseCookies} from "nookies";
import * as Api from "../../api";
import {useTranslation} from "react-i18next";

const LogOutButton = () => {
    const cookies = parseCookies()
    const {t} = useTranslation()
    const location = useLocation()
    const navigate = useNavigate()

    const handleClick = () => {
        Api.login.logout(cookies)
        navigate('/')
    }

    return (
        <>
            {
                cookies.admin || cookies.user
                    ?
                    <p className={style.logout} onClick={handleClick}>{t("logout")}</p>
                    :
                    <NavLink className={location.pathname === '/login' ? style.active : style.link}
                             to={'/login'}>
                        {t("login")}
                    </NavLink>
            }
        </>
    );
};

export default LogOutButton;
