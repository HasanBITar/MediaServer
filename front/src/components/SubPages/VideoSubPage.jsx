import LibraryFeatured from "../containers/LibraryFeatured"
import VideoPlayListCard from "../cards/VideoPlayListCard";
import HomeSection from "../containers/HomeSection";
import Gallery from "../containers/Gallery";
import VideoCard from "../cards/VideoCard";
import GalleryItem from "../containers/GalleryItem";
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
];

const VideoSubPage = () => {
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
                        all={false}
                    />
                ))}
            </HomeSection>
            <LibraryFeatured title="Your Videos">
                <div className="">
                    {data.map((item) => (
                        <VideoCard
                            key={item.video_id}
                            id={item.video_id}
                            thumbnail={item.thumbnail}
                            title={item.fileName}
                            duration={item.duration}
                            durationWatched={item.durationWatched}
                            createDate={item.createDate}
                            all={false}
                        />
                    ))}
                    {data.map((item) => (
                        <VideoCard
                            key={item.video_id}
                            id={item.video_id}
                            thumbnail={item.thumbnail}
                            title={item.fileName}
                            duration={item.duration}
                            durationWatched={item.durationWatched}
                            createDate={item.createDate}
                            all={false}
                        />
                    ))}
                    {data.map((item) => (
                        <VideoCard
                            key={item.video_id}
                            id={item.video_id}
                            thumbnail={item.thumbnail}
                            title={item.fileName}
                            duration={item.duration}
                            durationWatched={item.durationWatched}
                            createDate={item.createDate}
                            all={false}
                        />
                    ))}
                </div>
            </LibraryFeatured>
        </div>
    )
}

export default VideoSubPage;