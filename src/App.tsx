import {
    AppstoreOutlined,
    DesktopOutlined,
    MailOutlined,
    PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import Header from "./components/Header";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem("定位监控", "1", <PieChartOutlined />, [
        getItem("定位信息查看", "infos"),
    ]),
    getItem("算法测试", "2", <DesktopOutlined />, [
        getItem("参数设置", "parameter"),
        getItem("定位复现", "recurrence")
    ]),

    getItem("定位信息管理", "3", <MailOutlined />, [
        getItem("创建定位信息", "create"),
        getItem("定位信息查询", "query"),
    ]),

    getItem("系统管理", "4", <AppstoreOutlined />, [
        getItem("用户管理", "user"),
    ]),
];

const keyToLabel = {
    infos: "定位信息查看",
    parameter: "参数设置",
    recurrence: "定位复现",
    create: "创建定位信息",
    query: "定位信息查询",
    user: "用户管理",
};

type labels = keyof typeof keyToLabel;

const App: React.FC = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState<string>("定位信息查看");

    return (
        <div className="w-screen h-screen flex flex-col">
            <Header />
            <div className="w-full h-full flex">
                <div className="w-1/5 h-full">
                    <Menu
                        defaultSelectedKeys={["1"]}
                        defaultOpenKeys={["1"]}
                        mode="inline"
                        theme="dark"
                        items={items}
                        onClick={(e) => {
                            navigate(e.key);
                            // console.log(e);
                            setTitle(keyToLabel[e.key as labels]);
                        }}
                        style={{
                            height: "100%",
                        }}
                    />
                </div>
                <div className="w-4/5 h-full p-8 flex justify-center items-center bg-gray-200">
                    <div className="w-full h-full bg-white rounded flex flex-col">
                        <div className="w-full h-16 flex items-center bg-[#4a5259]">
                            <div className="h-full ml-16 flex items-center border-b-2 border-[#ffb253]">
                                <span className="text-lg text-[#ffb253] font-bold">
                                    {title}
                                </span>
                            </div>
                        </div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;