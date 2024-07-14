import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Syllabus = () => {
  const [syllabus, setSyllabus] = useState([]);
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

        fetch(`/${year}/${department}/${semester}/${section}/syllabus.json`)
          .then(response => response.json())
          .then(data => {
            console.log('Fetched syllabus:', data.syllabus);
            setSyllabus(data.syllabus);
          })
          .catch(error => console.error('Error fetching syllabus:', error));
      } else {
        console.log('Invalid path format:', path);
      }
    } else {
      console.log('Path is undefined');
    }
  }, [path]);

  return (
    <div>
      <h1>Syllabus</h1>
      <ul>
        {syllabus.map((module, index) => (
          <li key={index}>
            <Link href={module.file}>
              {module.topic}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Syllabus;
