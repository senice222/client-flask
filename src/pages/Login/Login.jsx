import React, {useEffect, useState} from 'react';
import style from './Login.module.scss'
import {Button, Input, Form, notification} from "antd";
import {MyFormItem, MyFormItemGroup} from "../../utils/antd";
import {useTranslation} from "react-i18next";
import { useNavigate } from 'react-router-dom';
import * as Api from "../../api";
import {setCookie} from "nookies";
import {onFinish} from "../../utils/onFinish";

const Login = () => {
    const {t} = useTranslation()
    const navigate = useNavigate();
    const [err, setErr] = useState(false)

    useEffect(() => {
        document.title = 'Login';
    }, []);

    const handleLogin = async (values) => {
        await onFinish(values, navigate, setErr)
    };

    return (
        <div className={style.area}>
            <div className={style.container}>
                <div className={style.loginDiv}><h3>{t("LOGIN")}</h3></div>
                <Form name="form_item_path" layout="vertical" onFinish={handleLogin}>
                    <MyFormItemGroup prefix={['user']}>
                        <MyFormItemGroup prefix={[]}>
                            <MyFormItem rules={[{required: true, message: 'Please input your username!'}]}
                                        name="username"
                                        label={<p className={style.label}>{t("username")}</p>}>
                                <Input className={style.inputFont} />
                            </MyFormItem>
                        </MyFormItemGroup>

                        <MyFormItem name="password"
                                    rules={[{required: true, message: 'Please input your password!'}]}
                                    label={<p className={style.label}>{t("password")}</p>}>
                            <Input.Password className={style.inputFont}/>
                        </MyFormItem>
                        {err && <p style={{color: "red", marginBottom: '10px'}}>{t("exist")}</p>}

                    </MyFormItemGroup>

                    <Button type="primary" htmlType="submit">
                        <p className={style.label}>{t("send")}</p>
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;
