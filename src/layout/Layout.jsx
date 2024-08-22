import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const Layout = () => {
    return (
        <div>
            <div className=""><Header/></div>
            <div className="w-full grid justify-items-center  min-h-screen py-10">
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;