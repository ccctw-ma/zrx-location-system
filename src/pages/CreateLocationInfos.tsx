import { UploadOutlined } from "@ant-design/icons";
import {
    Form,
    Select,
    Input,
    DatePicker,
    Button,
    Upload,
    Radio,
    Checkbox,
    Switch,
    message,
} from "antd";
import React from "react";

const CreateLocationInfos = () => {
    const onFinish = (values: any) => {
        console.log("Success:", values);
        message.success("设置成功");
    };
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            style={{
                marginTop: "4rem",
            }}
        >
            <Form.Item label="上传定位信息文件" name="file">
                <Upload name="file">
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
            </Form.Item>

            <Form.Item label="设置定位信息类型" name="type">
                <Radio.Group>
                    <Radio.Button value="a">对比信息</Radio.Button>
                    <Radio.Button value="b">原始信息</Radio.Button>
                    <Radio.Button value="c">自定义</Radio.Button>
                </Radio.Group>
            </Form.Item>

            <Form.Item label="版本" name="version">
                <Select
                    options={[
                        {
                            label: "1",
                            value: 1,
                        },
                    ]}
                />
            </Form.Item>

            <Form.Item label="定位信息名称" name="name">
                <Input placeholder="请输入名称" />
            </Form.Item>

            <Form.Item label="描述" name="desc">
                <Input.TextArea placeholder="任务备注" />
            </Form.Item>
            <Form.Item label="是否公开" name="open">
                <Switch defaultChecked />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
                <Button type="primary" shape="round" htmlType="submit">
                    设置完成
                </Button>
                <Button className="ml-4" shape="round">
                    取消
                </Button>
            </Form.Item>
        </Form>
    );
};

export default CreateLocationInfos;
