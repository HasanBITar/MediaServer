import VideoCard from "../components/cards/VideoCard";
import HomeSection from "../components/containers/HomeSection";

function Videos() {
  const MovieData = [
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
  ];
  const ShowData = [
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
  const VideoData = [
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

  return (
    <div>
      <HomeSection title={"Movies"}>
        {MovieData.map((item) => (
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
      </HomeSection>
      <HomeSection title={"Shows"}>
        {ShowData.map((item) => (
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
      </HomeSection>
      <HomeSection title={"Other Videos"}>
        {VideoData.map((item) => (
          <VideoCard
            key={item.video_id}
            id={item.video_id}
            thumbnail={item.thumbnail}
            title={item.fileName}
            duration={item.duration}
            durationWatched={item.durationWatched}
            createDate={item.createDate}
            all={true}
          />
        ))}
      </HomeSection>
    </div>
  );
}

export default Videos;
