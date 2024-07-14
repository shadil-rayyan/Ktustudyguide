import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const SolvedQuestionList = () => {
  const [solvedQuestions, setSolvedQuestions] = useState([]);
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

        fetch(`/${year}/${department}/${semester}/${section}/solvedQuestions.json`)
          .then(response => response.json())
          .then(data => {
            console.log('Fetched solved questions:', data.solvedQuestions);
            setSolvedQuestions(data.solvedQuestions);
          })
          .catch(error => console.error('Error fetching solved questions:', error));
      } else {
        console.log('Invalid path format:', path);
      }
    } else {
      console.log('Path is undefined');
    }
  }, [path]);

  return (
    <div>
      <h1>Solved Question List</h1>
      <ul>
        {solvedQuestions.map((solvedQuestion, index) => (
          <li key={index}>
            <Link href={solvedQuestion.file}>
              {solvedQuestion.topic}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SolvedQuestionList;
