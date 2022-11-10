import {
    DeleteOutlined,
    EditOutlined,
    ShareAltOutlined,
} from "@ant-design/icons";
import { Button, Input, Pagination, Select, Space, Table, Tag } from "antd";
import React from "react";

const QuertLocationInfos = () => {
    const { Column, ColumnGroup } = Table;

    interface DataType {
        key: React.Key;
        createTime: string;
        id: string;
        name: string;
        fileSize: string;
        type: "对比信息" | "原始信息" | "自定义";
        createrID: string;
        url: string;
    }

    const data: DataType[] = [
        {
            key: 1,
            createTime: "2022-10-01",
            id: "12",
            name: "张三",
            fileSize: "17M",
            type: "原始信息",
            createrID: "200333",
            url: "https://modao.cc/app/design/pbl3fngoivbu0d3j",
        },
        {
            key: 2,
            createTime: "2022-10-01",
            id: "12",
            name: "张三",
            fileSize: "17M",
            type: "原始信息",
            createrID: "200333",
            url: "https://modao.cc/app/design/pbl3fngoivbu0d3j",
        },
        {
            key: 3,
            createTime: "2022-10-01",
            id: "12",
            name: "张三",
            fileSize: "17M",
            type: "原始信息",
            createrID: "200333",
            url: "https://modao.cc/app/design/pbl3fngoivbu0d3j",
        },
    ];
    return (
        <div className="flex  mt-8 flex-col items-center">
            <div className="flex w-4/5  justify-around gap-2">
                <Select
                    options={[
                        {
                            label: "我的定位信息",
                            value: "1",
                        },
                    ]}
                    defaultValue="我的定位信息"
                />
                <Input.Search
                    placeholder="搜索"
                    onSearch={(e) => {
                        console.log(e);
                    }}
                    enterButton
                />
                <Button type="primary" shape="round" icon={<DeleteOutlined />}>
                    删除
                </Button>
            </div>
            <div className="flex flex-col w-4/5 items-center mt-8 overflow-auto">
                <Table dataSource={data} className="w-full">
                    <Column
                        title="创建时间"
                        dataIndex="createTime"
                        className="border"
                    />
                    <Column title="ID" dataIndex="id" className="border" />
                    <ColumnGroup title="数据集信息" className="border">
                        <Column
                            title="名称"
                            dataIndex="name"
                            className="border"
                        />
                        <Column
                            title="文件大小"
                            dataIndex="fileSize"
                            className="border"
                        />
                        <Column
                            title="类型"
                            dataIndex="type"
                            className="border"
                        />
                        <Column
                            title="创建人ID"
                            dataIndex="createrID"
                            className="border"
                        />
                        <Column
                            title="url"
                            dataIndex="url"
                            // ellipsis
                            className="border max-w-[200px]"
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
                    </ColumnGroup>
                </Table>
                {/* <Pagination defaultCurrent={1} total={50} /> */}
            </div>
        </div>
    );
};

export default QuertLocationInfos;
