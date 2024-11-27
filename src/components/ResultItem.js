// src/components/ResultItem.js
import React from 'react';


function ResultItem({ title, url, points, author, created_at, comments }) {
  return (
    <div className="result-item">
      <a href={url} target="_blank" rel="noopener noreferrer" className="result-title">{title}</a>
      <p className="result-meta">
        {points} points by {author} | {new Date(created_at).toLocaleDateString()} | {comments} comments
      </p>
    </div>
  );
}

export default ResultItem;
