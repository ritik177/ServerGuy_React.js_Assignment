
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../store';

export default function Pagination({ totalResults }) {
  const dispatch = useDispatch();
  const { page } = useSelector(state => state.app);

  return (
    <div className="pagination">
      <button onClick={() => dispatch(setPage(page - 1))} disabled={page === 0}>Previous</button>
      <span>Page {page + 1}</span>
      <button onClick={() => dispatch(setPage(page + 1))} disabled={totalResults < (page + 1) * 20}>Next</button>
    </div>
  );
}
