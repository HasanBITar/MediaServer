import LibraryFeatured from "../containers/LibraryFeatured"
import VideoPlayListCard from "../cards/VideoPlayListCard";
import HomeSection from "../containers/HomeSection";
import VideoCard from "../cards/VideoCard";
import Pagination from "../helpers/Pagination";

const data = [
    {
        video_id: "svd329esvdsdv1",
        thumbnail: "images/thumb.jpeg",
        fileName:
            "random video sdvksdv sdvksdv sdv kblos osiw isvd svvsd iwev svdisdv sjv jsdvdj sdvj jsvd jwro q;b wo wjv wvh",
        duration: 1000,
        durationWatched: 20,
        createDate: "12/10/2024",
    },
    {
        video_id: "svd329esvdsdv2",
        thumbnail: "/images/thumb.jpeg",
        fileName: "random video",
        duration: 1000,
        durationWatched: 400,
        createDate: "12/10/2024",
    },
    {
        video_id: "svd329esvdsdv3",
        thumbnail: "/images/thumb.jpeg",
        fileName: "random video",
        duration: 1000,
        durationWatched: 0,
        createDate: "12/10/2024",
    },
    {
        video_id: "svd329esvdsdv4",
        thumbnail: "/images/thumb.jpeg",
        fileName: "random video",
        duration: 1000,
        durationWatched: 400,
        createDate: "12/10/2024",
    },
    {
        video_id: "svd329esvdsdv5",
        thumbnail: "/images/thumb.jpeg",
        fileName: "random video",
        duration: 1000,
        durationWatched: 400,
        createDate: "12/10/2024",
    },
    {
        video_id: "svd329esvdsdv6",
        thumbnail: "/images/thumb.jpeg",
        fileName: "random video",
        duration: 1000,
        durationWatched: 400,
        createDate: "12/10/2024",
    },
    {
        video_id: "svd329esvdsdv7",
        thumbnail: "/images/thumb.jpeg",
        fileName: "random video",
        duration: 1000,
        durationWatched: 400,
        createDate: "12/10/2024",
    },
    {
        video_id: "svd329esvdsdv8",
        thumbnail: "/images/thumb.jpeg",
        fileName: "random video",
        duration: 1000,
        durationWatched: 400,
        createDate: "12/10/2024",
    },
    {
        video_id: "svd329esvdsdv9",
        thumbnail: "/images/thumb.jpeg",
        fileName: "random video",
        duration: 1000,
        durationWatched: 400,
        createDate: "12/10/2024",
    },
    {
        video_id: "svd329esvdsdv10",
        thumbnail: "/images/thumb.jpeg",
        fileName: "random video",
        duration: 1000,
        durationWatched: 400,
        createDate: "12/10/2024",
    },
    {
        video_id: "svd329esvdsdv11",
        thumbnail: "/images/thumb.jpeg",
        fileName: "random video",
        duration: 1000,
        durationWatched: 400,
        createDate: "12/10/2024",
    },
    {
        video_id: "svd329esvdsdv12",
        thumbnail: "/images/thumb.jpeg",
        fileName: "random video",
        duration: 1000,
        durationWatched: 400,
        createDate: "12/10/2024",
    },
];

const VideoSubPage = () => {

    const handlePageChange = (newPage) => {

    }

    return (
        <div className="relative">
            <HomeSection title={'Your Playlists'}>
                {data.map((item) => (
                    <VideoPlayListCard
                        key={item.video_id}
                        id={item.video_id}
                        thumbnail={item.thumbnail}
                        title={item.fileName}
                        duration={item.duration}
                        durationWatched={item.durationWatched}
                        createDate={item.createDate}
                        scroll={false}
                    />
                ))}
            </HomeSection>
            <LibraryFeatured title="Your Videos">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                    {data.map((item) => (
                        <VideoCard
                            key={item.video_id}
                            id={item.video_id}
                            thumbnail={item.thumbnail}
                            title={item.fileName}
                            duration={item.duration}
                            durationWatched={item.durationWatched}
                            createDate={item.createDate}
                            scroll={false}
                        />
                    ))}
                </div>
            </LibraryFeatured>
            
            <Pagination
                totalItems = {123}
                currentPage = {1}
                onPageChange = {handlePageChange}
            />

        </div>
    )
}

export default VideoSubPage;