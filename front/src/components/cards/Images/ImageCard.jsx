/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { formatString, formatDate } from "../../../utils/helpers";

const ImageCard = ({ id, thumbnail, title, type, createDate }) => {
  const formatedTitle = formatString(title);
  const formatedDate = formatDate(createDate);
  return (
    <Link
      to={`/view/images/${title}`}
      className="inline-block w-[45%] md:w-52 lg:w-60 xl:64 md:flex-auto flex-none "
    >
      <div className="relative w-full overflow-hidden rounded-xl shadow-md bg-gray-800">
        {/* Thumbnail */}
        <div className="w-full h-0" style={{ paddingBottom: "100%" }}>
          <img
            src={thumbnail}
            alt={formatedTitle}
            className="absolute inset-0 object-cover w-full h-full transition-transform duration-300 transform hover:scale-110"
          />
        </div>
      </div>
      {/* Video Info */}
      <div className="mt-2 px-1">
        <h3 className="text-lg font-medium text-white overflow-hidden text-ellipsis whitespace-nowrap">
          {formatedTitle}
        </h3>

        <p className="text-md font-medium text-gray-400">{formatedDate}</p>
      </div>
    </Link>
  );
};

export default ImageCard;
