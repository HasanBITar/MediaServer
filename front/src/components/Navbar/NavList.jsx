import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
const NavList = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Videos", path: "/videos" },
    { label: "Images", path: "/images" },
    { label: "Music", path: "/music" },
    { label: "Documents", path: "/documents" },
  ];

  return (
    <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium border rounded-lg lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0  dark:border-gray-700">
      {navItems.map((item) => (
        <li key={item.label}>
          <Link
            to={item.path}
            className={`block py-2 px-3 rounded lg:p-0 lg:dark:hover:text-blue-500 dark:border-gray-700
                            ${
                              currentPage === item.path
                                ? "text-white bg-blue-700 lg:bg-transparent lg:text-blue-700 lg:dark:text-blue-500"
                                : "text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                            }`}
            aria-current={currentPage === item.path ? "page" : null}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

<li>
  <a
    href="#"
    className="block py-2 px-3 text-white bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0 lg:dark:text-blue-500"
    aria-current="page"
  >
    Home
  </a>
</li>;

export default NavList;
