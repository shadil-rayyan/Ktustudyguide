import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const YoutubeList = () => {
  const [youtubePlaylist, setYoutubePlaylist] = useState([]);
  const router = useRouter();
  const { path } = router.query;

  useEffect(() => {
    if (path) {
      const pathParts = path.split('/').filter(Boolean);
      if (pathParts.length >= 4) {
        const year = pathParts[0];
        const department = pathParts[1];
        const semester = pathParts[2];
        const section = pathParts[3];

        fetch(`/${year}/${department}/${semester}/${section}/youtubeplaylist.json`)
          .then(response => response.json())
          .then(data => {
            console.log('Fetched YouTube playlist:', data.youtubePlaylist);
            setYoutubePlaylist(data.youtubePlaylist);
          })
          .catch(error => console.error('Error fetching YouTube playlist:', error));
      } else {
        console.log('Invalid path format:', path);
      }
    } else {
      console.log('Path is undefined');
    }
  }, [path]);

  return (
    <div>
      <h1>YouTube Playlist</h1>
      <ul>
        {youtubePlaylist.map((video, index) => (
          <li key={index}>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.videoId}`}
              title={video.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YoutubeList;
