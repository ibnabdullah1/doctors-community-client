import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/NAvbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
