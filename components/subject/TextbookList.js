import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const TextbookList = () => {
  const [textbooks, setTextbooks] = useState([]);
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

        fetch(`/${year}/${department}/${semester}/${section}/textbooks.json`)
          .then(response => response.json())
          .then(data => {
            console.log('Fetched textbooks:', data.textbooks);
            setTextbooks(data.textbooks);
          })
          .catch(error => console.error('Error fetching textbooks:', error));
      } else {
        console.log('Invalid path format:', path);
      }
    } else {
      console.log('Path is undefined');
    }
  }, [path]);

  return (
    <div>
      <h1>Textbook List</h1>
      <ul>
        {textbooks.map((textbook, index) => (
          <li key={index}>
            <Link href={textbook.file}>
              {textbook.title} by {textbook.author}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TextbookList;
