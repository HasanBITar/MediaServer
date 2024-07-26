
import Logo from './Logo'
import ProfileMenu from './ProfileMenu'
import NavList from './NavList';

const NavBar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <NavList />
        <ProfileMenu />
      </div>
    </nav>

  );
}

export default NavBar;