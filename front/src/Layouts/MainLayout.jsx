import { Outlet } from "react-router-dom";

import NavBar from "../components/navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <main className="w-full p-3 pt-0 mx-auto bg-gray-900 text-white flex-grow">
        <Outlet />
      </main>
      {/* <footer>
                <p>Footer content</p>
            </footer> */}
    </>
  );
};

export default MainLayout;
