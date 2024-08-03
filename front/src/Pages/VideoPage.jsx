import React, { useEffect, useState } from 'react';

import { API } from '../config';
import VideoPlayer from '../components/viewers/VideoPlayer';


const VideoPage = () => {
  const { videoId } = useParams();
  const [streamUrl, setStreamUrl] = useState('');

  useEffect(() => {
    const url = API.steamVideo + videoId;
    setStreamUrl(url);
  }, [videoId]);

  return (
    <div>
      <h1>Video Player</h1>
      {streamUrl && <VideoPlayer streamUrl={streamUrl} />}
    </div>
  );
};

export default VideoPage;
