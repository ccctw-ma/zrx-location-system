import { DownloadOutlined } from "@ant-design/icons";
import {
    Button,
    Checkbox,
    DatePicker,
    Form,
    Input,
    message,
    Select,
    Table,
    TimePicker,
} from "antd";
import test from "node:test";
import { type } from "os";
import React, { useState } from "react";

const Parameter = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const onFinish = (values: any) => {
        message.success("设置成功");
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    type Cell = {
        param: string;
        value: string;
    };
    interface InputProps {
        value?: Cell[];
        onChange?: (value: Cell[]) => void;
    }

    const ParameterConfig: React.FC<InputProps> = ({
        value = [
            {
                param: "参数一",
                value: "",
            },
            {
                param: "参数二",
                value: "",
            },
            {
                param: "参数三",
                value: "",
            },
        ],
        onChange,
    }) => {
        const [cells, setCells] = useState<Cell[]>(value);

        const triggerChange = (changedValue: Cell[]) => {
            // console.log(changedValue);
            onChange?.(changedValue);
        };
        return (
            <div className="flex flex-col">
                <div className="flex w-full bg-[#bebebe]">
                    <div className="flex-1  text-center p-4 border-r-2 border-white">
                        参数
                    </div>
                    <div className="flex-1 text-center p-4">数值</div>
                </div>
                {cells.map((cell, index) => {
                    return (
                        <div className="flex w-full" key={index}>
                            <input
                                type="text"
                                className="p-4 text-center outline-none w-1/2 border"
                                value={cell.param}
                                onChange={(e) => {
                                    let temp = [...cells];
                                    temp[index].param = e.target.value;
                                    setCells(temp);
                                    triggerChange(temp);
                                }}
                            />
                            <input
                                type="text"
                                className="p-4 text-center outline-none w-1/2 border"
                                value={cell.value}
                                onChange={(e) => {
                                    let temp = [...cells];
                                    temp[index].value = e.target.value;
                                    setCells(temp);
                                    triggerChange(temp);
                                }}
                            />
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            style={{
                marginTop: "4rem",
            }}
        >
            <Form.Item label="选择算法" name="algorithm">
                <Select options={[{ label: "粒子滤波", value: "filter" }]} />
            </Form.Item>

            <Form.Item label="调参配置" name="parameter">
                <ParameterConfig />
            </Form.Item>

            <Form.Item label="上传时间" name="time">
                <DatePicker showTime />
            </Form.Item>

            <Form.Item label="描述" name="description">
                <Input.TextArea placeholder="模型备注" />
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

export default Parameter;
