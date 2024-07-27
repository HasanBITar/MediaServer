import HomeSection from "../components/container/HomeSection";
import VideoCard from "../components/cards/VideoCard";

const data = [
    {
        video_id: 'svd329esvdsdv1',
        thumbnail: '/images/thumb.jpeg',
        title: 'random video',
        duration: 1000,
        durationWatched: 12304
    },
    {
        video_id: 'svd329esvdsdv2',
        thumbnail: '/images/thumb.jpeg',
        title: 'random video',
        duration: 1000,
        durationWatched: 12304
    },
    {
        video_id: 'svd329esvdsdv3',
        thumbnail: '/images/thumb.jpeg',
        title: 'random video',
        duration: 1000,
        durationWatched: 12304
    },
    {
        video_id: 'svd329esvdsdv4',
        thumbnail: '/images/thumb.jpeg',
        title: 'random video',
        duration: 1000,
        durationWatched: 12304
    },
    {
        video_id: 'svd329esvdsdv5',
        thumbnail: '/images/thumb.jpeg',
        title: 'random video',
        duration: 1000,
        durationWatched: 12304
    },
]

const HomePage = () => {
    return (
        <>
            <HomeSection title={'Recently Watched Videos'}>
                {data.map((item) => (
                    <VideoCard key={item.video_id} id={item.video_id} thumbnail={item.thumbnail} title={item.title} duration={item.duration} durationWatched={item.durationWatched} />
                ))}
            </HomeSection>

            <hr className="my-7 border-t-2 border-gray-700"/>
        </>
    )
}

export default HomePage;