import React, { useEffect, useState } from 'react';

import { API } from '../config';
import VideoPlayer from '../components/viewers/VideoPlayer';
import { useParams } from 'react-router-dom';

const VideoPage = () => {
  const { videoId } = useParams();
  const [streamUrl, setStreamUrl] = useState('');

  useEffect(() => {
    const url = API.steamVideo + videoId;
    setStreamUrl(url);
  }, [videoId]);

  return (
    <div>
      {streamUrl && <VideoPlayer streamUrl={streamUrl} title={'random test'} thumbnail={"http://localhost:5000/api/v1/thumbnails/d49ea858-6066-47b8-acd5-21ec6234b4cd--1722685920787__2K%20Video%20Demo%20[hddwAIXbKZo].png"} />}
    </div>
  );
};

export default VideoPage;
