import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const VivaList = () => {
  const [vivaQuestions, setVivaQuestions] = useState([]);

  useEffect(() => {
    fetch('/path/to/vivaQuestions.json') // Adjust the path to your JSON file
      .then(response => response.json())
      .then(data => {
        console.log('Fetched Viva questions:', data.vivaQuestions);
        setVivaQuestions(data.vivaQuestions);
      })
      .catch(error => console.error('Error fetching Viva questions:', error));
  }, []);

  return (
    <div>
      <h1>Viva Questions</h1>
      <ul>
        {vivaQuestions.map((viva, index) => (
          <li key={index}>
            <Link href={viva.file} download>
              {viva.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VivaList;
