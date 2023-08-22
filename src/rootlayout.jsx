import { Outlet } from "react-router-dom";
import NavBar from "./navbar";
import Footer from "./footer";
function Rootlayout() {

  return (
    <div className="root-layout">
     <NavBar/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default Rootlayout;
