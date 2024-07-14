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
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="my-4 text-2xl font-bold">Subjects</h1>
        <ul className="flex flex-col items-center gap-4">
          {subjects.map((subject) => (
            <li key={subject.subject} className="relative">
              <Link href={`/sections?path=${subject.section}`}>
                <span className="block py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded-md cursor-pointer">
                  {subject.subject}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubjectList;
