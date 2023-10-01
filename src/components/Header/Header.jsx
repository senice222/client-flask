import React, {useEffect, useState} from 'react';
import style from './Header.module.scss'
import {NavLink, useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";
import ChangeLanguageButton from "../ChangeLanguageButton/ChangeLanguageButton";
import {parseCookies} from "nookies";
import LogOutButton from "../LogOutButton/LogOutButton";
import menu from '../../assets/icons8-menu-24.png'
import close from '../../assets/icons8-close-24.png'

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const location = useLocation()
    const {t, i18n} = useTranslation()
    const cookies = parseCookies()

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        setIsActive(false)
    }, [location]);

    return (

        <nav className={style.navbar}>
            <NavLink className={location.pathname === '/' ? style.active : style.link} to={'/'}>
                {t("aboutUs")}
            </NavLink>
            <input type="checkbox" id={style.toggler} checked={isActive} onChange={toggleMenu}/>
            <label htmlFor={style.toggler} className={style.hamburger}>
                <img src={isActive ? close : menu} onChange={toggleMenu} alt="/"/>
            </label>
            <div className={style.menu}>
                <ul className={style.list}>
                    {
                        cookies.admin &&
                        <NavLink className={location.pathname === '/create-news' ? style.active : style.link}
                                 to={'/create-news'}>
                            {t("CREATE-NEWS")}
                        </NavLink>
                    }
                    {i18n.language === 'uk'
                        ?
                        <NavLink className={location.pathname === '/uk_news' ? style.active : style.link}
                                 to={'/uk_news'}>
                            {t("engNews")}
                        </NavLink>
                        :
                        <NavLink className={location.pathname === '/en_news' ? style.active : style.link}
                                 to={'/en_news'}>
                            {t("engNews")}
                        </NavLink>
                    }
                    <NavLink className={location.pathname === '/category/management' ? style.active : style.link}
                             to={'/category/management'}>
                        {t("management")}
                    </NavLink>
                    <NavLink className={location.pathname === '/category/feedback' ? style.active : style.link}
                             to={'/category/feedback'}>
                        {t("feedBack2")}
                    </NavLink>
                    <div className={style.changeLanguage}>
                        <ChangeLanguageButton setIsActive={setIsActive}/>
                    </div>
                    <LogOutButton />
                </ul>
            </div>
        </nav>

    );
};

export default Header;
