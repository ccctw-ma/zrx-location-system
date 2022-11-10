import {
    DeleteOutlined,
    EditOutlined,
    PlusCircleOutlined,
    ShareAltOutlined,
} from "@ant-design/icons";
import { Table, Select, Input, Button } from "antd";
import React from "react";

const User = () => {
    const { Column, ColumnGroup } = Table;

    interface DataType {
        key: React.Key;
        name: string;
        phone: string;
        email: string;
        userSpace: string;
        permission: "管理员" | "VIP用户";
    }

    const data: DataType[] = [
        {
            key: 1,
            name: "张三",
            phone: "123456789",
            email: "123@qq.com",
            userSpace: "100MB",
            permission: "VIP用户",
        },
        {
            key: 2,
            name: "李四",
            phone: "123456789",
            email: "123@qq.com",
            userSpace: "100MB",
            permission: "VIP用户",
        },
        {
            key: 3,
            name: "王五",
            phone: "123456789",
            email: "123@qq.com",
            userSpace: "100MB",
            permission: "VIP用户",
        },
    ];
    return (
        <div className="flex  mt-8 flex-col items-center">
            <div className="flex w-4/5  justify-around gap-2">
                <span className="inline-block h-full min-w-[50px] text-lg font-bold">
                    搜索:
                </span>
                <Select
                    options={[
                        {
                            label: "全部",
                            value: "1",
                        },
                    ]}
                    defaultValue="全部"
                />
                <Input.Search
                    placeholder="输入用户名"
                    onSearch={(e) => {
                        console.log(e);
                    }}
                    enterButton
                />
                <Button
                    type="primary"
                    shape="round"
                    icon={<PlusCircleOutlined />}
                >
                    添加
                </Button>
                <Button type="primary" shape="round" icon={<DeleteOutlined />}>
                    删除
                </Button>
            </div>
            <div className="flex flex-col w-4/5 items-center mt-8 overflow-auto">
                <Table dataSource={data} className="w-full">
                    <Column
                        title="用户名"
                        dataIndex="name"
                        className="border"
                    />
                    <Column
                        title="手机号"
                        dataIndex="phone"
                        className="border"
                    />
                    <Column title="邮箱" dataIndex="email" className="border" />
                    <Column
                        title="用户可用空间大小"
                        dataIndex="userSpace"
                        className="border"
                    />
                    <Column
                        title="用户权限"
                        dataIndex="permission"
                        className="border"
                    />
                    <Column
                        className="border"
                        title="操作"
                        key="action"
                        render={(_: any, record: DataType) => (
                            <div className="flex gap-1">
                                <Button
                                    type="primary"
                                    icon={<EditOutlined />}
                                />
                                <Button
                                    type="primary"
                                    icon={<ShareAltOutlined />}
                                />
                                <Button
                                    type="primary"
                                    icon={<DeleteOutlined />}
                                />
                            </div>
                        )}
                    />
                </Table>
                {/* <Pagination defaultCurrent={1} total={50} /> */}
            </div>
        </div>
    );
};

export default User;
