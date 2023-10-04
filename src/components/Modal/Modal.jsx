import React from 'react';
import styles from './Modal.module.scss'
import style from '../Header/Header.module.scss'


const Modal = ({modalOpen, setModalOpen, handleDelete}) => {

    return (
        <div className={modalOpen ? `${styles.modal} ${styles.active} ${style.navbar} global` : `${styles.modal} ${style.navbar}`}
             onClick={() => setModalOpen(false)}>
            <div className={modalOpen ? `${styles.modalContent} ${styles.active} ` : `${styles.modalContent}`} onClick={(e) => e.stopPropagation()}>
                <div className={styles.content}>
                    <h3>Вы уверены что хотите удалить новость?</h3>
                    <button onClick={() => handleDelete()}>Да</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
