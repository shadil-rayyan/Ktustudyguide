import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
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

        fetch(`/${year}/${department}/${semester}/${section}/questions.json`)
          .then(response => response.json())
          .then(data => {
            console.log('Fetched questions:', data.questions);
            setQuestions(data.questions);
          })
          .catch(error => console.error('Error fetching questions:', error));
      } else {
        console.log('Invalid path format:', path);
      }
    } else {
      console.log('Path is undefined');
    }
  }, [path]);

  return (
    <div>
      <h1>Question List</h1>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <Link href={question.file}>
              {question.topic}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
