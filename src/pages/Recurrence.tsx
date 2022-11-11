import { Form, Button, Select, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Recurrence: React.FC = () => {
    const navigate = useNavigate();
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            initialValues={{ remember: true }}
            onFinish={() => {}}
            autoComplete="off"
            style={{
                marginTop: "4rem",
            }}
        >
            <Form.Item label="选择定位信息" name="location">
                <Select
                    options={[
                        {
                            label: "科研楼01",
                            value: 1,
                        },
                    ]}
                    defaultValue="选择定位信息"
                />
            </Form.Item>

            <Form.Item label="选择类型" name="type">
                <Select
                    options={[
                        {
                            label: "对比信息",
                            value: 1,
                        },
                        {
                            label: "原始信息",
                            value: 2,
                        },
                        {
                            label: "自定义",
                            value: 3,
                        },
                    ]}
                    defaultValue="选择类型"
                />
            </Form.Item>

            <Form.Item label="版本" name="version">
                <Select
                    options={[
                        {
                            label: "1",
                            value: 1,
                        },
                        {
                            label: "2",
                            value: 2,
                        },
                        {
                            label: "3",
                            value: 3,
                        },
                    ]}
                    defaultValue="1"
                />
            </Form.Item>

            <Form.Item label="描述" name="desc">
                <Input.TextArea placeholder="任务备注" />
            </Form.Item>
            <Form.Item label="公网IP地址" name="ip">
                <Input placeholder="请输入" />
            </Form.Item>

            <Form.Item label="服务器名称" name="servername">
                <Select
                    options={[
                        {
                            label: "s1",
                            value: "1",
                        },
                    ]}
                    defaultValue="请选择"
                />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
                <Button
                    type="primary"
                    shape="round"
                    htmlType="submit"
                    onClick={() => {
                        navigate("../infos")
                    }}
                >
                    设置完成
                </Button>
                <Button className="ml-4" shape="round">
                    取消
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Recurrence;
