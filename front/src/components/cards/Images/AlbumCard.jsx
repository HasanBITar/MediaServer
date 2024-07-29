/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

//THE SHIT GETS FUCKY ON SMALL SCREENS. FIX LATER.
function AlbumCard({ id }) {
  const albumTitle = "Album1";
  const albumCreationDate = "12/10/2024";
  //we fetch 4 images based on the id instead of this mockup data
  const albumData = [
    {
      src: "images/GoT/0.png",
      image_id: "svd329esvdsdv1",
      fileName: "random video",
    },
    {
      src: "images/GoT/1.png",
      image_id: "svd329esvdsdv1",
      fileName: "random video",
    },
    {
      src: "images/GoT/2.png",
      image_id: "svd329esvdsdv1",
      fileName: "random video",
    },
    {
      src: "images/GoT/3.png",
      image_id: "svd329esvdsdv1",
      fileName: "random video",
    },
  ];

  return (
    <div>
      <Link
        to={`/view/images/albums/${id}`}
        className="w-full  md:w-72 lg:w-96 "
      >
        <div className="border-4 border-black grid grid-cols-2   md:w-52 lg:w-96  md:flex-auto flex-none w-full overflow-hidden rounded-xl shadow-md bg-gray-800 transition-transform duration-300 transform hover:scale-110 mx-6 mt-6">
          {albumData.map((item) => (
            <img
              key={item.image_id}
              className=" max-w-full rounded-lg border-2 border-black inset-0 object-cover w-full h-full "
              src={item.src}
              alt={item.fileName}
            />
          ))}
        </div>
        <div className="mt-2 px-1 ml-6">
          <h3 className="text-lg font-medium text-white overflow-hidden text-ellipsis whitespace-nowrap">
            {albumTitle}
          </h3>

          <p className="text-md font-medium text-gray-400">
            {albumCreationDate}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default AlbumCard;
