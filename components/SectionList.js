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
    <div>
      <h1>Sections</h1>
      <ul>
        {sections.map((section) => (
          <li key={section.topic}>
            <Link href={`/section?path=${section.file}`}>
              {section.topic}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionList;
