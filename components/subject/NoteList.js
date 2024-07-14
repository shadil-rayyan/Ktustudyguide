import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const router = useRouter();
  const { path } = router.query; // Use the path from the query parameters
  
  useEffect(() => {
    if (path) {
      const pathParts = path.split('/').filter(Boolean);
      if (pathParts.length >= 4) {
        const year = pathParts[0];
        const department = pathParts[1];
        const semester = pathParts[2];
        const section = pathParts[3];

        fetch(`/${year}/${department}/${semester}/${section}/notes.json`)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            console.log('Fetched notes:', data.notes);
            setNotes(data.notes);
          })
          .catch(error => console.error('Error fetching notes:', error));
      } else {
        console.log('Invalid path format:', path);
      }
    } else {
      console.log('Path is undefined');
    }
  }, [path]);

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <Link href={note.download}>
              {note.module}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
