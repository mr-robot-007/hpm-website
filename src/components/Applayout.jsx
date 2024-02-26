import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

function Applayout() {
  return (
    <div className="bg-gray-100 h-[100dvh] w-full overflow-y-auto ">
      <Header />
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Applayout;
