const Logo = () => {
    return (
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="./images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">OpenMedia</span>
        </a>
    )
}

export default Logo;