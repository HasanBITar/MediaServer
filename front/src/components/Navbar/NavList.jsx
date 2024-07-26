import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NavList = ({ children }) => {

    const location = useLocation();
    const [currentPage, setCurrentPage] = useState(location.pathname);

    useEffect(() => {
        setCurrentPage(location.pathname);
    }, [location]);

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Videos', path: '/videos' },
        { label: 'Photos', path: '/photos' },
        { label: 'Music', path: '/music' },
        { label: 'Documents', path: '/Documents' },
    ];

    return (
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {navItems.map((item) => (
                    <li key={item.label}>
                        <Link
                            to={item.path}
                            className={`block py-2 px-3 ${currentPage === item.path
                                ? 'text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
                                : 'text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                }`}
                            aria-current={currentPage === item.path ? 'page' : null}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

    );
}

export default NavList;