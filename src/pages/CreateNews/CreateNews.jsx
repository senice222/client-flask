import React, {useContext, useEffect, useRef, useState} from 'react';
import style from './CreateNews.module.scss'
import {Button, Form, Input, notification, Select} from "antd";
import {MyFormItem, MyFormItemGroup} from "../../utils/antd";
import {useTranslation} from "react-i18next";
import TextArea from "antd/lib/input/TextArea";
import * as Api from '../../api/index'
import {useNavigate} from "react-router-dom";
// import Button from '@mui/material/Button';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import {VisuallyHiddenInput} from "../../utils/style";
import Jodit from "../../components/JoditEditor/JoditEditor";
import EditorContext from "../../context/editorContext";


const CreateNews = () => {
    const {t, i18n} = useTranslation()
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editorContent} = useContext(EditorContext)

    useEffect(() => {
        document.title = 'Create news';
    }, []);

    const onFinish = async (values) => {
        try {
            const updatedValues = {
                title: values.user.title,
                description: values.user.description,
                image_url: values.user.image_url,
                language: values.user.language,
                password: values.user.password,
                text: editorContent
            }
            await Api.news.createNews(updatedValues)
            notification.success({
                message: 'Success! You created new news!',
                duration: 1,
            })
            form.resetFields()
            i18n.language === 'uk' ? navigate('/uk_news') : navigate('/en_news')
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <div className={style.area}>
            <div className={style.container}>
                <h3>{t("CREATE-NEWS")}</h3>

                <Form className={style.form} form={form} name="form_item_path" layout="vertical" onFinish={onFinish}>
                    <MyFormItemGroup prefix={['user']}>
                        <MyFormItemGroup prefix={[]}>
                            <MyFormItem rules={[{required: true, message: 'Please input your title!'}]}
                                        name="title"
                                        label={<p className={style.label}>{t("title")}</p>}>
                                <Input className={style.title}/>
                            </MyFormItem>
                        </MyFormItemGroup>

                        <MyFormItem name="description"
                                    rules={[{required: true, message: 'Please input your description!'}]}
                                    label={<p className={style.label}>{t("description")}</p>}>
                            <Input className={style.description}/>
                        </MyFormItem>

                        <MyFormItem name="password"
                                    rules={[{required: true, message: 'Please input your password!'}]}
                                    label={<p className={style.label}>{t("password")}</p>}>
                            <Input className={style.description}/>
                        </MyFormItem>

                        <MyFormItem name="image_url"
                                    rules={[{required: true, message: 'Please input your password!'}]}
                                    label={<p className={style.label}>{t("URL")}</p>}>
                            <Input className={style.description}/>
                        </MyFormItem>

                        <MyFormItem
                            name="language"
                            rules={[
                                {required: true, message: 'Please input your language!'},
                            ]}
                            label={<p className={style.label}>{t("language1")}</p>}
                        >
                            <Select>
                                <Select.Option value="uk">
                                    <h4>Ukrainian</h4>
                                </Select.Option>
                                <Select.Option value="en">
                                    <h4>English</h4>
                                </Select.Option>
                            </Select>
                        </MyFormItem>

                        <MyFormItem
                            name="text"
                            rules={[
                                {
                                    validator: () => {
                                        if (!editorContent || editorContent.trim() === '') {
                                            return Promise.reject('Please input your text!');
                                        }

                                        return Promise.resolve();
                                    },
                                },
                            ]}
                            label={<p className={style.label}>{t("content")}</p>}
                            validateTrigger="onChange"
                        >
                            <Jodit className={style.editor} />
                        </MyFormItem>

                    </MyFormItemGroup>

                    <Button type="primary" htmlType="submit" style={{marginTop: "10px"}}>
                        {t("toPublic")}
                    </Button>
                </Form>
            </div>
        </div>
    )
};
export default CreateNews;
