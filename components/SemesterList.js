import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const SemesterList = () => {
  const [semesters, setSemesters] = useState([]);
  const router = useRouter();
  const { path } = router.query;
  
  useEffect(() => {
    if (path) {
      // Split the path to extract year and department
      const pathParts = path.split('/').filter(Boolean); // filter(Boolean) removes empty strings
      if (pathParts.length >= 3) {
        const year = pathParts[0];
        const department = pathParts[1];
        
        fetch(`/${year}/${department}/semesters.json`) // Adjust the path based on your directory structure
          .then(response => response.json())
          .then(data => {
            console.log('Fetched semesters:', data.semesters);
            setSemesters(data.semesters);
          })
          .catch(error => console.error('Error fetching semesters:', error));
      } else {
        console.log('Invalid path format:', path);
      }
    } else {
      console.log('Path is undefined');
    }
  }, [path]);
  
  return (
    <div>
      <h1>Semesters</h1>
      <ul>
        {semesters.map((semester) => (
          <li key={semester.semester}>
            <Link href={`/subject?path=${semester.subjects}`}>
              {semester.semester}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SemesterList;
