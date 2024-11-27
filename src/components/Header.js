
import React, { useState } from 'react';
import SearchBar from './Searchbar';
import { FaHackerrank } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";


function Header({ onSearch }) {
  const [query] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="header">
      <FaHackerrank className="logo"/> 
      <div className="header">Search <br/> Hacker News</div>
 
      <div className="search-bar">
        <div className="search-bar search-input">
          <SearchBar  onClick={handleSearch}/>
         
        </div>
        <IoIosSettings className=' header setting-logo' />
      </div>
    </div>
  );
}

export default Header;

// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import SearchBar from './Searchbar';
// import { FaHackerrank } from "react-icons/fa";


// function Header({ onSearch }) {
//   const [query] = useState('');
//   const user = useSelector(state => state.app.user);

//   const handleSearch = () => {
//     onSearch(query);
//   };

//   return (
//     <div className="header">
//       <div className="logo"><FaHackerrank /> Search Hacker News</div>
 
//         <SearchBar  onClick={handleSearch}className="search-container"/>
        
//         <div  className="header">{user ? `Hello, ${user}` : 'Welcome!'}</div>
//     </div>
//   );
// }

// export default Header;
// import React from 'react';
// import { useSelector } from 'react-redux';
// import SearchBar from './Searchbar';

// export default function Header() {
//   const user = useSelector(state => state.app.user);


//   return (
//     <header className="header">
      
//       <h1>Hacker News Search  </h1>
     
//       
   
//       <div  className="header">{user ? `Hello, ${user}` : 'Welcome!'}</div>
      
  
//     </header>
//   );
// }


// import React, { useState } from 'react';

// function Header({ onSearch }) {
//   const [query, setQuery] = useState('');

//   const handleSearch = () => {
//     onSearch(query);
//   };

//   return (
//     <div className="header">
//       <div className="logo">H Search Hacker News</div>
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search stories by title, URL, or author"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           className="search-input"
//         />
//         <button onClick={handleSearch} className="search-button">Search</button>
//       </div>
//     </div>
//   );
// }

// export default Header;




