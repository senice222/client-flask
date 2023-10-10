import React, {useContext, useEffect, useState} from 'react';
import style from '../CreateNews/CreateNews.module.scss'
import {Button, Form, Input, notification, Select} from "antd";
import {MyFormItem} from "../../utils/antd";
import {useTranslation} from "react-i18next";
import * as Api from "../../api/index";
import {useNavigate, useParams} from "react-router-dom";
import EditorComponent from "../../components/Editor/Editor";
import EditNewsContext from "../../context/editNewsContext";


const EditNews = () => {
    const {t, i18n} = useTranslation();
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const {editNewsContent, setEditNewsContent} = useContext(EditNewsContext)
    const {id} = useParams()
    const [newsData, setNewsData] = useState({
        title: '',
        description: '',
        language: '',
        image_url: '',
    });

    useEffect(() => {
        document.title = 'Edit news';

        async function fetchNewsData() {
            try {
                const data = await Api.news.getDetailedNews(id)
                setNewsData({
                    title: data.title,
                    description: data.description,
                    language: data.language,
                    image_url: data.image_url
                });
                setEditNewsContent(data.text)
            } catch (e) {
                console.log(e);
            }
        }

        fetchNewsData();
    }, [id]);

    useEffect(() => {
        form.setFieldsValue({
            'title': newsData.title,
            'image_url': newsData.image_url,
            'language': newsData.language,
            'description': newsData.description,
            'text': newsData.text
        });
    }, [form, newsData]);

    const onFinish = async (values) => {
        try {
            if (values.password === '1111') {
                const updatedValues = {
                    title: values.title,
                    description: values.description,
                    image_url: values.image_url,
                    language: values.language,
                    password: values.password,
                    text: editNewsContent,
                };
                await Api.news.updateNews(id, updatedValues);

                notification.success({
                    message: 'Success! You updated the news!',
                    duration: 1,
                });
                form.resetFields();
                i18n.language === 'uk' ? navigate('/uk_news') : navigate('/en_news');
            } else {
                notification.error({
                    message: 'Something went wrong',
                    duration: 2,
                })
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className={style.area}>
            <div className={style.container}>
                <h3>{t("CREATE-NEWS")}</h3>

                <Form className={style.form} form={form}
                      name="form_item_path"
                      layout="vertical"
                      onFinish={onFinish}
                >
                    <MyFormItem rules={[{required: false, message: 'Please input your title!'}]}
                                name="title"
                                label={<p className={style.label}>{t("title")}</p>}>
                        <Input className={style.title}/>
                    </MyFormItem>

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
                                    if (!editNewsContent || editNewsContent.trim() === '') {
                                        return Promise.reject('Please input your text!');
                                    }

                                    return Promise.resolve();
                                },
                            },
                        ]}
                        label={<p className={style.label}>{t("content")}</p>}
                        validateTrigger="onChange"
                    >
                        <EditorComponent className={style.editor}
                                         editorComponent={true}
                        />
                    </MyFormItem>

                    <Button type="primary" htmlType="submit" style={{marginTop: "10px"}}>
                        {t("toPublic")}
                    </Button>
                </Form>
            </div>
        </div>
    )
};
export default EditNews;
