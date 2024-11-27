
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './store';
import Login from './pages/Login';
import Dashboard from './components/Dashboard';
import { Provider } from 'react-redux';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Login />}/>

          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;


// import React, { useState } from 'react';
// import Header from './components/Header';
// import SearchResults from './components/SearchResults';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { store } from './store';
// import Login from './pages/Login';
// import Dashboard from './components/Dashboard';
// import { Provider } from 'react-redux';

// function App() {
//   const [searchResults] = useState([]);

//   const handleSearch = (query) => {
//     // Fetch data and update searchResults
//   };

//   return (
//     <div className="app-container">
//       <Header onSearch={handleSearch} />
//       <SearchResults results={searchResults} />
//       <Provider store={store}>
//      <Router>
//             <Routes>
//            <Route path='/' element={<Login />}/>
    
//             <Route path="/dashboard" element={<Dashboard/>}/>
//             </Routes>
//          </Router>
//        </Provider>
//     </div>
 
//   );
// }

// export default App;

