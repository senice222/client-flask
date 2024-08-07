import React from 'react';
import style from './Footer.module.scss'
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Footer = () => {
    const {t} = useTranslation()

    return (
        <footer>
            <div className={style.line}/>
            <div className={style.footerContent}>
                <div className={style.footerSection}>
                    <h3>{t("Contact")}</h3>
                    <p>{t("phone")}: 123-456-7890</p>
                    <p>{t("email")}: info@example.com</p>
                    <p>{t("address")}: 123 Main St, City, Country</p>
                </div>
                <div className={style.footerSection}>
                    <h3>{t("QuickLinks")}</h3>
                    <ul>
                        <li><NavLink className={style.links} to="/">{t("about")}</NavLink></li>
                        <li><NavLink className={style.links} to="/category/feedback">{t("Contact")}</NavLink></li>
                    </ul>
                </div>
                <div className={style.footerSection}>
                    <h3>{t("FollowUs")}</h3>
                    <ul className={style.socialMedia}>
                        <li><NavLink to="/"><i className="fab fa-twitter"></i></NavLink></li>
                        <li><NavLink to="/"><i className="fab fa-facebook"></i></NavLink></li>
                        <li><NavLink to="/"><i className="fab fa-instagram"></i></NavLink></li>
                    </ul>
                </div>
            </div>
            <div className={style.footerBottom}>
                <p>&copy; 2023 Your Company. All rights reserved.</p>
            </div>
        </footer>

    );
};

export default Footer;
