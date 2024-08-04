import React, { useEffect, useState } from 'react';

import { API } from '../config';
import VideoPlayer from '../components/viewers/VideoPlayer';
import { useParams } from 'react-router-dom';
import SidebarLayout from '../layouts/SidebarLayout';

const VideoPage = ({ }) => {
  const { videoId } = useParams();
  const [streamUrl, setStreamUrl] = useState('');

  useEffect(() => {
    const url = API.steamVideo + videoId;
    console.log(url);
    setStreamUrl(url);
  }, [videoId]);

  return (
    <SidebarLayout>
      <div className='p-4 '>
        <h1 className="flex pb-5 font-bold text-2xl md:text-4xl text-white">Cool Video</h1>
        <div className='flex justify-center'>
          <div className='lg:h-[80%]'>
            {streamUrl && <VideoPlayer streamUrl={streamUrl} />}
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default VideoPage;
