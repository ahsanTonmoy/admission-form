import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import '../style.css'
const Layout = () => {
    return (
        <div>
            <div className=""><Header/></div>
            <div className="max-w-screen-2xl mx-auto min-h-screen py-10">
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;