import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <div className="h-screen w-screen">
            <Outlet />
        </div>
    );
};

export default AppLayout;
