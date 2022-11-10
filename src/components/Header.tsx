import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import React from "react";

export default function Header() {
    return (
        <div className="flex w-full h-16 bg-[#032653] justify-between items-center">
            <div className=" ml-6 text-white text-lg">算法管理平台</div>
            <div className="justify-self-end mr-4">
                <Avatar size="default" icon={<UserOutlined />} />
                <span className="text-white ml-2">用户</span>
            </div>
        </div>
    );
}
