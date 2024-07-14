import React, { useEffect, useState } from 'react';

const ExternalList = () => {
  const [externalLinks, setExternalLinks] = useState([]);

  useEffect(() => {
    fetch('/path/to/externalLinks.json') // Adjust the path to your JSON file
      .then(response => response.json())
      .then(data => {
        console.log('Fetched External links:', data.externalLinks);
        setExternalLinks(data.externalLinks);
      })
      .catch(error => console.error('Error fetching External links:', error));
  }, []);

  return (
    <div>
      <h1>External Links</h1>
      <ul>
        {externalLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExternalList;
