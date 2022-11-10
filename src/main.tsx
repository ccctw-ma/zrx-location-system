import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import "antd/dist/antd.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import User from "./pages/User";
import Info from "./pages/Info";
import Parameter from "./pages/Parameter";
import CreateLocationInfos from "./pages/CreateLocationInfos";
import QuertLocationInfos from "./pages/QuertLocationInfos";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "user",
                element: <User />,
            },
            {
                path: "infos",
                element: <Info />,
            },
            {
                path: "parameter",
                element: <Parameter />,
            },
            {
                path: "create",
                element: <CreateLocationInfos />,
            },
            {
                path: "query",
                element: <QuertLocationInfos />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
