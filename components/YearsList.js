import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const YearList = () => {
  const [years, setYears] = useState([]);

  useEffect(() => {
    fetch('/years.json')
      .then(response => response.json())
      .then(data => setYears(data.years));
  }, []);
  
  return (
    <div>
      <h1>Years</h1>
      <ul>
        {years.map((year) => (
          <li key={year.year}>
            <Link href={`/department?year=${year.year}`}>{year.year}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YearList;
