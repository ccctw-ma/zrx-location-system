import { Button, Select } from "antd";
import React, { useEffect, useState } from "react";
import map from "../assets/map.jpg";
import data from "../assets/data.json";
import axios from "axios";

type Point = [number, number];
let preCenter = [300.0, 300.0];
let timer: NodeJS.Timeout | null = null;
let i = 0,
    n = data.length;

const Info = () => {
    const [center, setCenter] = useState<Point>([0.0, 0.0]);
    const [particles, setParticles] = useState<Array<Point>>([[0.0, 0.0]]);
    const [run, setRun] = useState(false);
    useEffect(() => {
        if (run) {
            timer = setInterval(() => {
                // let px = preCenter[0],
                //     py = preCenter[1];

                // let x = (Math.random() - 0.5) * 50 + px,
                //     y = (Math.random() - 0.5) * 50 + py;
                // x = x < 0 ? 5 : x > 600 ? 590 : x;
                // y = y < 0 ? 5 : y > 600 ? 590 : y;

                // let arr = [];
                // for (let i = 0; i < 10; i++) {
                //     let rx = (Math.random() - 0.5) * 50 + x;
                //     let ry = (Math.random() - 0.5) * 50 + y;
                //     arr.push([rx, ry]);
                // }
                // console.log(preCenter);
                // preCenter = [x, y];

                // console.log(data[i]);
                let loc = data[i].location;
                let x = loc.x / 2,
                    y = loc.y / 2;

                let ps = data[i].debugpoints;
                ps = ps.substring(1, ps.length - 1);
                let ds = ps.split(",");
                let arr = [];
                for (let j = 0; j < ds.length; j += 2) {
                    arr.push([
                        Number.parseInt(ds[j].trim()) / 2,
                        Number.parseInt(ds[j + 1].trim()) / 2,
                    ]);
                }
                i = (i + 1) % n;

                setCenter([x, y]);
                setParticles(arr as Array<Point>);
            }, 1000);
        } else {
            !!timer && clearInterval(timer);
        }
    }, [run]);

    useEffect(() => {
        (async () => {
            //  通过这里申请访问接口, axios.get(url, options)
            // const res = await axios.get(
            //     "https://raw.hellogithub.com/hosts.json"
            // );
            // console.log(res);
        })();
    }, []);

    return (
        <div className="w-full h-full flex flex-col items-center overflow-y-scroll">
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
            <div className=" bg-slate-200 relative">
                <img src={map} width="500px" height="500px" alt="" />

                <div
                    className="absolute bg-red-600 w-4 h-4 rounded-full"
                    style={{
                        left: `${center[0]}px`,
                        top: `${center[1]}px`,
                    }}
                />
                {particles.map((p, index) => {
                    return (
                        <div
                            key={index}
                            className={`absolute bg-green-600 w-1 h-1 rounded-full`}
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
