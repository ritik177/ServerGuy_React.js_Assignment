

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Pagination from './Pagination';
import Header from './Header';
import ResultItem from './ResultItem';
import {setData} from '../store';
import SearchFilters from './SearchFilters';

export default function Dashboard() {
  const dispatch = useDispatch();

  const { user, data, query, page } = useSelector(state => state.app);

  useEffect(() => {
    fetchData();
  }, [query, page]);

  const fetchData = async () => {
    const result = await axios.get(`https://hn.algolia.com/api/v1/search`, {
      params: { query, page }
    });
    dispatch(setData(result.data.hits));
  };

  
  return (
    <div>
        <Header/>      
    <div className="dashboard-container">
        
      <h2>Welcome, {user}!</h2>
      <SearchFilters />
      
      <div className="results">
     
        {data.map(item => (
           
          <div key={item.objectID}>
             
            <a href={item.url} target="_blank" rel="noreferrer">{item.title}</a>
            <ResultItem key={item.objectID}/>
          </div>
        ))}
      </div>
      <Pagination/>
    </div>
    </div>
  );
}
