import ImageCard from "../cards/Images/ImageCard";

function Gallery() {
  const tagsList = [{ tag: "family" }, { tag: "friends" }, { tag: "nature" }];
  const imageData = [
    {
      src: "images/GoT/0.png",
      image_id: "svd329esvdsdv1",
      fileName: "0",
    },
    {
      src: "images/GoT/1.png",
      image_id: "svd329esvdsdv1",
      fileName: "1",
    },
    {
      src: "images/GoT/2.png",
      image_id: "svd329esvdsdv1",
      fileName: "2",
    },
    {
      src: "images/GoT/3.png",
      image_id: "svd329esvdsdv1",
      fileName: "random video",
    },
    {
      src: "images/GoT/4.png",
      image_id: "svd329esvdsdv1",
      fileName: "random video",
    },
    {
      src: "images/GoT/5.png",
      image_id: "svd329esvdsdv1",
      fileName: "random video",
    },
    {
      src: "images/GoT/6.png",
      image_id: "svd329esvdsdv1",
      fileName: "random video",
    },
    {
      src: "images/GoT/7.png",
      image_id: "svd329esvdsdv1",
      fileName: "random video",
    },
    {
      src: "images/GoT/8.png",
      image_id: "svd329esvdsdv1",
      fileName: "random video",
    },
    {
      src: "images/GoT/9.png",
      image_id: "svd329esvdsdv1",
      fileName: "random video",
    },
    {
      src: "images/GoT/10.png",
      image_id: "svd329esvdsdv1",
      fileName: "random video",
    },
    {
      src: "images/GoT/11.png",
      image_id: "svd329esvdsdv1",
      fileName: "random video",
    },
    {
      src: "images/GoT/12.png",
      image_id: "svd329esvdsdv1",
      fileName: "random video",
    },
  ];
  return (
    <div>
      <h1 className="flex ml-8 mt-6 font-bold text-4xl text-white">Gallery</h1>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        {tagsList.map((tag, i) => (
          <button
            key={i}
            type="button"
            className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
          >
            {tag.tag}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 grid-flow-dense gap-2">
        {imageData.map((image) => (
          <div
            key={image.video_id}
            className="flex flex-col  p-5 lg:p-8 mb-2 items-center justify-center"
          >
            <ImageCard
              id={image.video_id}
              thumbnail={image.src}
              title={image.fileName}
              type="PDF"
              createDate="12/10/2024"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
