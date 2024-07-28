
import HomeSection from "../components/container/HomeSection";
import VideoCard from "../components/cards/VideoCard";
import MediaCard from "../components/cards/MediaCard";

const data = [
    {
        video_id: 'svd329esvdsdv1',
        thumbnail: 'images/thumb.jpeg',
        fileName: 'random video sdvksdv sdvksdv sdv kblos osiw isvd svvsd iwev',
        duration: 1000,
        durationWatched: 20,
        createDate: '12/10/2024'
    },
    {
        video_id: 'svd329esvdsdv2',
        thumbnail: '/images/thumb.jpeg',
        fileName: 'random video',
        duration: 1000,
        durationWatched: 400,
        createDate: '12/10/2024'
    },
    {
        video_id: 'svd329esvdsdv3',
        thumbnail: '/images/thumb.jpeg',
        fileName: 'random video',
        duration: 1000,
        durationWatched: 0,
        createDate: '12/10/2024'
    },
    {
        video_id: 'svd329esvdsdv4',
        thumbnail: '/images/thumb.jpeg',
        fileName: 'random video',
        duration: 1000,
        durationWatched: 400,
        createDate: '12/10/2024'
    },
    {
        video_id: 'svd329esvdsdv5',
        thumbnail: '/images/thumb.jpeg',
        fileName: 'random video',
        duration: 1000,
        durationWatched: 400,
        createDate: '12/10/2024'
    },
]

const HomePage = () => {
    return (
        <>
            <HomeSection title={'Recent Videos'}>
                {data.map((item) => (
                    <VideoCard
                        key={item.video_id}
                        id={item.video_id}
                        thumbnail={item.thumbnail}
                        title={item.fileName}
                        duration={item.duration}
                        durationWatched={item.durationWatched}
                        createDate={item.createDate}
                    />
                ))}
            </HomeSection>

            <hr className="my-7 border-t-2 border-gray-700" />
            
            <HomeSection fileName={'Recent Photos'}>
                {data.map((item) => (
                    <MediaCard
                        key={item.video_id}
                        id={item.video_id}
                        thumbnail={item.thumbnail}
                        title={item.fileName}
                        type="PDF"
                        createDate="12/10/2024"
                    />
                ))}
            </HomeSection>

        </>
    )
}

export default HomePage;