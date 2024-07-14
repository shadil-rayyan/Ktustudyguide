import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);
  const router = useRouter();
  const { year } = router.query;

  useEffect(() => {
    if (year) {
      fetch(`/${year}/departments.json`) // Adjust the path based on your directory structure
        .then(response => response.json())
        .then(data => setDepartments(data.departments))
        .catch(error => console.error('Error fetching departments:', error));
    }
  }, [year]);

  return (
    <div>
      <h1>Departments for Year {year}</h1>
      <ul>
        {departments.map((department) => (
          <li key={department.department}>
            <Link href={`/semesters?path=${department.semester}`}>
              {department.department}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DepartmentList;
