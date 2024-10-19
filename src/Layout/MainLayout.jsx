import { Outlet } from "react-router-dom";
import NavBar from "../Component/NavBar/NavBar";


const MainLayout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
};

export default MainLayout;