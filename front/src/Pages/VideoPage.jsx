import React, { useEffect, useState } from 'react';

import { API } from '../config';
import VideoPlayer from '../components/viewers/VideoPlayer';
import { useParams } from 'react-router-dom';
import SidebarLayout from '../layouts/SidebarLayout';

const VideoPage = ({}) => {
  const { videoId } = useParams();
  const [streamUrl, setStreamUrl] = useState('');

  useEffect(() => {
    const url = API.steamVideo + videoId;
    console.log(url);
    setStreamUrl(url);
  }, [videoId]);

  return (
    <SidebarLayout>
      <div className='p-2 lg:p-4 '>
        <div className='bg-red-500 flex justify-center'>
          <div className='lg:w-[80%]'>
            {streamUrl && <VideoPlayer streamUrl={streamUrl} />}
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default VideoPage;
