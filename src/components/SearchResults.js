
import React from 'react';
import ResultItem from './ResultItem';

function SearchResults({ results }) {
  return (
    <div className="search-results">
      {results.map((result, index) => (
        <ResultItem key={index} result={result} />
      ))}
    </div>
  );
}

export default SearchResults;
