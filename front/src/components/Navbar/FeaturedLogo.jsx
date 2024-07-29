import { Link } from "react-router-dom";

const FeaturedLogo = () => {
    return (
        <Link to="/" className="flex flex-col items-center justify-center p-4">
            <img src="./images/logo.svg" className="h-40 w-40 mb-4" alt="OpenMedia Logo" />
            <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">OpenMedia</span>
        </Link>
    )
}

export default FeaturedLogo;