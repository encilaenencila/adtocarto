import { Outlet } from "react-router-dom";
import NavBar from "./navbar";

function Rootlayout() {

  return (
    <div className="root-layout">
     <NavBar/>
      <main>
        <Outlet />
      </main>
    
    </div>
  );
}

export default Rootlayout;
