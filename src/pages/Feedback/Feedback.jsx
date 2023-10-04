import React, {useEffect} from 'react';
import style from './Feedback.module.scss'
import {useTranslation} from "react-i18next";
import {Button, Form, Input, notification} from "antd";
import {MyFormItem, MyFormItemGroup} from "../../utils/antd";
import TextArea from "antd/lib/input/TextArea";
import * as Api from '../../api/index'
import {useNavigate} from "react-router-dom";

const Feedback = () => {
    const {t} = useTranslation()
    const navigate = useNavigate()

    useEffect(() => {
        document.title = 'Feedback';
    }, []);

    const onFinish = async (values) => {
        try {
            await Api.feedback.sendFeedback(values.user)
            notification.success({
                message: 'Success! You sent feedback!',
                duration: 1,
            })
            setTimeout(() => {
                navigate('/')
            }, 1000)
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <div className={style.area}>
            <div className={style.container}>
                <h3>{t("feedBack2")}</h3>

                <Form className={style.form} name="form_item_path" layout="vertical" onFinish={onFinish}>
                    <MyFormItemGroup prefix={['user']}>
                        <MyFormItemGroup prefix={[]}>
                            <MyFormItem rules={[
                                {required: true, message: 'Please input your name!'},
                            ]}
                                        name="name"
                                        label={<p className={style.label}>{t("name")}</p>}>
                                <Input className={style.title}/>
                            </MyFormItem>
                        </MyFormItemGroup>

                        <MyFormItem name="email"
                                    rules={[
                                        {
                                            validator: (_, value) => {
                                                if (!value) {
                                                    return Promise.reject('Please input your email');
                                                }

                                                const emailPattern = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

                                                if (!value.match(emailPattern)) {
                                                    return Promise.reject('Invalid email format');
                                                }

                                                return Promise.resolve();
                                            },
                                        },
                                    ]}
                                    label={<p className={style.label}>{t("email")}</p>}>
                            <Input className={style.description} placeholder={'@gmail.com'}/>
                        </MyFormItem>

                        <MyFormItem name="phoneNumber"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your phone number!',
                                        },
                                        {
                                            pattern: /^(?:(?:\+|00)?\d{1,3})?[1-9]\d{6,14}$/,
                                            message: 'Please enter a valid phone number containing only digits, without spaces. The number can start with a plus sign (+) or double-zero (00) followed by up to 3 digits.',
                                        }
                                    ]}
                                    label={<p className={style.label}>{t("phone")}</p>}>
                            <Input className={style.description}/>
                        </MyFormItem>

                        <MyFormItem name="introduction"
                                    rules={[{required: true, message: 'Please input your introduction!'}]}
                                    label={<p className={style.label}>{t("theme")}</p>}>
                            <Input className={style.description}/>
                        </MyFormItem>

                        <MyFormItem name="text"
                                    rules={[{required: true, message: 'Please input your main content!'}]}
                                    label={<p className={style.label}>{t("description")}</p>}>
                            <TextArea className={style.content}/>
                        </MyFormItem>
                    </MyFormItemGroup>

                    <Button className={style.btn} type="primary" htmlType="submit">
                        <p className={style.btnLabel}>{t("send")}</p>
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Feedback;
