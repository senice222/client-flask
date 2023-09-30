import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from './Layout.module.scss'
import yourLogo from '../../assets/ВАШ ЛОГОТИП.png'

const Layout = ({children}) => {

    return (
        <div className={style.wrapper}>
            <Header/>
            <div className={style.imgWrap}>
                <img className={style.img} src={yourLogo} alt={'/'}/>
            </div>

            <div className={style.line}/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;
