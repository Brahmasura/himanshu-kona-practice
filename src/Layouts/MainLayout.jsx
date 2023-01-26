import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <div className="fluid">
      <div className="row">
        <div className="left-side col-lg-2">
          <Sidebar />
        </div>
        <div className="right-side col-lg-10">
          <Navbar />
            
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
