import { Link } from "react-router-dom";
import { formatString, formatDate } from "../../utils/helpers";


const AudioCard = ({ id, thumbnail, title, type, createDate, artisit }) => {
    const formatedTitle = formatString(title, 20);
    const formatedDate = formatDate(createDate);
    return (
        <Link to={`/view/${id}`} className="inline-block w-1/3 md:w-44 lg:w-52 md:flex-auto flex-none ">
            <div className="relative w-full overflow-hidden rounded-full shadow-md bg-gray-800">
                {/* Thumbnail */}
                <div className="w-full h-0 rotate-continuous" style={{ paddingBottom: '100%' }}>
                    <img
                        src={thumbnail}
                        alt={formatedTitle}
                        className="absolute inset-0 object-cover w-full h-full rounded-full transition duration-500 ease-in-out"
                    />
                </div>
            </div>
            {/* Video Info */}
            <div className="mt-2 text-center">
                <h3 className="text-lg font-medium text-white">{formatedTitle}</h3>
                <p className="text-md font-medium text-gray-400">2000 • Artist</p>
            </div>
        </Link>
    );
};

export default AudioCard;