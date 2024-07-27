import { Outlet } from 'react-router-dom';

import NavBar from "../components/navbar/NavBar";

const MainLayout = () => {
    return (
        <>
            <NavBar />
            <main className="w-full lg:p-8 p-6 mx-auto max-w-8xl bg-gray-900 text-white h-screen">
                <Outlet />
            </main> 
            {/* <footer>
                <p>Footer content</p>
            </footer> */}
        </>
    )
}

export default MainLayout;



