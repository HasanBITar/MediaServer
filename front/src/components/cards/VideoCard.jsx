import { formatDuration } from "../../utils/videoHelper";

const VideoCard = ({ id, thumbnail, title, duration, durationWatched }) => {
    const progress = durationWatched / duration;
    const formatedDuration = formatDuration(duration);
    return (
        <div className="inline-block w-full md:w-80 lg:w-96 md:flex-auto flex-none "> {/* Responsive width */}
            <div className="relative w-full overflow-hidden rounded-lg shadow-md bg-gray-800">
                {/* Thumbnail */}
                <div className="w-full h-0" style={{ paddingBottom: '56.25%' }}>
                    <img
                        src={thumbnail}
                        alt={title}
                        className="absolute inset-0 object-cover w-full h-full transition-transform duration-300 transform hover:scale-110"
                    />
                    {/* Video Duration */}
                    <span className="absolute bottom-2 right-2 px-2 py-1 text-xs font-semibold text-white bg-black bg-opacity-75 rounded">
                        {formatedDuration}
                    </span>
                    {/* Watched Line Progress */}
                    <div className="w-full h-1 bg-gray-300 rounded-full absolute bottom-0">
                        <div
                            className="h-full bg-blue-700 rounded-full"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>
            </div>
            {/* Video Info */}
            <div className="mt-2">
                <h3 className="text-lg font-medium text-white">{title}</h3>
                <p className="text-sm text-gray-600">{"channel"}</p>
            </div>
        </div>
    );
}

export default VideoCard;

