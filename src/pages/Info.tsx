import { Button, Select } from "antd";
import React, { useEffect, useState } from "react";

type Point = [number, number];
let preCenter = [300.0, 300.0];
let timer: NodeJS.Timeout | null = null;
const Info = () => {
    const [center, setCenter] = useState<Point>([300.0, 300.0]);
    const [particles, setParticles] = useState<Array<Point>>([[10.0, 20.0]]);
    const [run, setRun] = useState(false);
    useEffect(() => {
        if (run) {
            timer = setInterval(() => {
                let px = preCenter[0],
                    py = preCenter[1];

                let x = (Math.random() - 0.5) * 50 + px,
                    y = (Math.random() - 0.5) * 50 + py;
                x = x < 0 ? 5 : x > 600 ? 590 : x;
                y = y < 0 ? 5 : y > 600 ? 590 : y;

                let arr = [];
                for (let i = 0; i < 10; i++) {
                    let rx = (Math.random() - 0.5) * 50 + x;
                    let ry = (Math.random() - 0.5) * 50 + y;
                    arr.push([rx, ry]);
                }
                console.log(preCenter);
                setCenter([x, y]);
                preCenter = [x, y];
                setParticles(arr as Array<Point>);
            }, 500);
        } else {
            !!timer && clearInterval(timer);
        }
    }, [run]);

    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="flex w-full h-8 justify-center space-x-10 mt-16">
                <strong className="inline-block text-center leading-8">
                    城市
                </strong>
                <Select
                    options={[
                        {
                            value: "北京",
                            label: "北京",
                        },
                    ]}
                    style={{
                        width: 120,
                    }}
                />
                <strong className="inline-block text-center leading-8">
                    楼宇
                </strong>
                <Select
                    options={[
                        {
                            value: "科研楼",
                            label: "科研楼",
                        },
                    ]}
                    style={{
                        width: 120,
                    }}
                />
                <strong className="inline-block text-center leading-8">
                    楼层
                </strong>
                <Select
                    options={[
                        {
                            value: "一层",
                            label: "一层",
                        },
                    ]}
                    style={{
                        width: 120,
                    }}
                />
            </div>
            <div className="flex w-full justify-center mt-8">
                <Button
                    type="primary"
                    danger={run}
                    shape="round"
                    size="large"
                    onClick={() => setRun((p) => !p)}
                >
                    {run ? "结束监控" : "开始监控"}
                </Button>
            </div>
            <div className="mt-4">相关信息</div>
            <div className="w-[600px] h-[600px] bg-slate-200 relative">
                <div
                    className="absolute bg-red-600 w-5 h-5 rounded-full"
                    style={{
                        left: `${center[0]}px`,
                        top: `${center[1]}px`,
                    }}
                />
                {particles.map((p, index) => {
                    return (
                        <div
                            key={index}
                            className={`absolute bg-green-600 w-2 h-2 rounded-full`}
                            style={{
                                left: `${p[0]}px`,
                                top: `${p[1]}px`,
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Info;
