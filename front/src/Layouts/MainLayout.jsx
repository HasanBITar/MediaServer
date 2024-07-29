import { Outlet } from 'react-router-dom';

import Navbar from "../components/navbar/Navbar";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main className="w-full p-2 mx-auto max-w-8xl bg-gray-900 text-white">
                <Outlet />
            </main> 
            {/* <footer>
                <p>Footer content</p>
            </footer> */}
        </>
    )
}

export default MainLayout;



