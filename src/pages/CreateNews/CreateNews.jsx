import React, {useEffect, useState} from 'react';
import style from './CreateNews.module.scss'
import {Form, Input, notification} from "antd";
import {MyFormItem, MyFormItemGroup} from "../../utils/antd";
import {useTranslation} from "react-i18next";
import TextArea from "antd/lib/input/TextArea";
import * as Api from '../../api/index'
import {useNavigate} from "react-router-dom";
// import Button from '@mui/material/Button';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import {VisuallyHiddenInput} from "../../utils/style";

const CreateNews = () => {
    const {t, i18n} = useTranslation()
    const [form] = Form.useForm();
    const navigate = useNavigate()
    // const [selectedFile, setSelectedFile] = useState(null);
    //
    // const handleFileChange = (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //         setSelectedFile(file);
    //     } else {
    //         setSelectedFile(null);
    //     }
    // };

    useEffect(() => {
        document.title = 'Create news';
    }, []);

    const onFinish = async (values) => {
        try {
            await Api.news.createNews(values.user)
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
                                    label={<p className={style.label}>{t("URL")}</p>}>
                            <Input className={style.description}/>
                        </MyFormItem>

                        {/*<MyFormItem name="image_file"*/}
                        {/*            label={<p className={style.label}>{t("imgFile")}</p>}*/}
                        {/*>*/}
                        {/*    <div>*/}
                        {/*        <Button component="label" variant="contained" onChange={handleFileChange}*/}
                        {/*                startIcon={<CloudUploadIcon/>}>*/}
                        {/*            <p>Upload File</p>*/}
                        {/*            <VisuallyHiddenInput type="file"/>*/}
                        {/*        </Button>*/}
                        {/*        <p style={{marginTop: "15px"}}>{selectedFile ?*/}
                        {/*            <p className={style.isChose}>Файл выбран</p>*/}
                        {/*            : <p className={style.isChose}>Файл не выбран</p>}</p>*/}
                        {/*    </div>*/}
                        {/*</MyFormItem>*/}

                        <MyFormItem
                            name="language"
                            rules={[
                                {required: true, message: 'Please input your language!'},
                                {type: 'string', max: 2, message: 'Language code must be at most 2 characters long.'},
                            ]}
                            label={<p className={style.label}>{t("language1")}</p>}
                        >
                            <Input className={style.description} placeholder={'en or uk'}/>
                        </MyFormItem>

                        <MyFormItem name="text"
                                    rules={[{required: true, message: 'Please input your text!'}]}
                                    label={<p className={style.label}>{t("content")}</p>}>
                            <TextArea className={style.content}/>
                        </MyFormItem>
                    </MyFormItemGroup>

                    <button className={style.btn}>
                        <p className={style.btnLabel}>{t("toPublic")}</p>
                    </button>
                </Form>
            </div>
        </div>
    )
};
export default CreateNews;
