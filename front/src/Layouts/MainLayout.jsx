import { Outlet } from 'react-router-dom';

import NavBar from "../components/NavBar/NavBar";

const MainLayout = () => {
    return (
        <>
            <NavBar />
            <main className="w-full px-4 mx-auto max-w-8xl">
                <Outlet />
            </main>
            {/* <footer>
                <p>Footer content</p>
            </footer> */}
        </>
    )
}

export default MainLayout;



