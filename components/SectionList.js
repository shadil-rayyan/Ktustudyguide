import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const SectionList = () => {
  const [sections, setSections] = useState([]);
  const router = useRouter();
  const { path } = router.query;

  useEffect(() => {
    if (path) {
      const pathParts = path.split('/').filter(Boolean);
      if (pathParts.length >= 4) {
        const year = pathParts[0];
        const department = pathParts[1];
        const semester = pathParts[2];
        const subject = pathParts[3];

        fetch(`/${year}/${department}/${semester}/${subject}/sections.json`)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            console.log('Fetched sections:', data.sections);
            setSections(data.sections);
          })
          .catch(error => console.error('Error fetching sections:', error));
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
        <h1 className="my-4 text-2xl font-bold">Sections</h1>
        <ul className="flex flex-col items-center gap-4">
          {sections.map((section) => (
            <li key={section.topic} className="relative">
              <Link href={`/section?path=${section.file}`}>
                <span className="block py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded-md cursor-pointer">
                  {section.topic}
                </span>
              </Link>
            </li>
        ))}
      </ul>
    </div>
  </div>
  );
};

export default SectionList;
