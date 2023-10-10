import React from 'react';
import style from "./DeleteOrEditButton.module.scss";
import {NavLink} from "react-router-dom";
import edit from "../../assets/icons8-edit-64.png";
import basket from "../../assets/icons8-delete-64.png";

const DeleteOrEditButton = ({setShow, show, id}) => {

    return (
        <div className={style.editContainer}>
            <NavLink to={`/edit_news/${id}`}><img src={edit} className={style.editIcon} alt={'/'}/></NavLink>
            <img src={basket} alt={'/'} onClick={() => setShow(!show)} className={style.deleteIcon} />
        </div>
    );
};

export default DeleteOrEditButton;
