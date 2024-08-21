import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <div className="w-full grid justify-items-center bg-[#f5f5f5] min-h-screen">
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;