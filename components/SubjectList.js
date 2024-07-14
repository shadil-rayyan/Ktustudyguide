import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const SubjectList = () => {
  const [subjects, setSubjects] = useState([]);
  const router = useRouter();
  const { path } = router.query;

  useEffect(() => {
    if (path) {
      const pathParts = path.split('/').filter(Boolean);
      if (pathParts.length >= 3) {
        const year = pathParts[0];
        const department = pathParts[1];
        const semester = pathParts[2];

        fetch(`/${year}/${department}/${semester}/subjects.json`)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            console.log('Fetched subjects:', data.subjects);
            setSubjects(data.subjects);
          })
          .catch(error => console.error('Error fetching subjects:', error));
      } else {
        console.log('Invalid path format:', path);
      }
    } else {
      console.log('Path is undefined');
    }
  }, [path]);

  return (
    <div>
      <h1>Subjects</h1>
      <ul>
        {subjects.map((subject) => (
          <li key={subject.subject}>
            <Link href={`/sections?path=${subject.section}`}>
              {subject.subject}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubjectList;
