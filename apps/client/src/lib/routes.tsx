import { RouteObject } from "react-router-dom";
import AppLayout from "@/components/templates/app-layout";
import Login from "@/pages/Login";
import Home from "@/pages/Home";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
];

export default routes;
