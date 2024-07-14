import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const AudioNoteList = () => {
  const [audioNotes, setAudioNotes] = useState([]);
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

        fetch(`/${year}/${department}/${semester}/${section}/audionotes.json`)
          .then(response => response.json())
          .then(data => {
            console.log('Fetched audio notes:', data.audioNotes);
            setAudioNotes(data.audioNotes);
          })
          .catch(error => console.error('Error fetching audio notes:', error));
      } else {
        console.log('Invalid path format:', path);
      }
    } else {
      console.log('Path is undefined');
    }
  }, [path]);

  return (
    <div>
      <h1>Audio Notes</h1>
      <ul>
        {audioNotes.map((audioNote, index) => (
          <li key={index}>
            <Link href={audioNote.file}>
              {audioNote.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AudioNoteList;
