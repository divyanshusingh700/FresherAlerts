// src/components/RelatedSearches.js

import React from 'react';
import { Button } from 'react-bootstrap';

const RelatedSearches = () => {
  const searches = [
    'Software Engineer Jobs',
    'Developer Jobs in Bangalore',
    'Entry-Level IT Jobs',
    // ...more searches
  ];

  return (
    <div className="related-searches container">
      <h4>Related Searches</h4>
      <div>
        {searches.map((search, index) => (
          <Button
            key={index}
            variant="outline-primary"
            className="m-1"
            onClick={() => console.log(`Search for ${search}`)}
          >
            {search}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default RelatedSearches;
