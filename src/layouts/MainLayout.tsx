import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

function MainLayout() {
  return <><Navbar /><Outlet /><footer className="site-footer"></footer></>;
}
export default MainLayout;
