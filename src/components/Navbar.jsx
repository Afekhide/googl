import React from 'react';
import {Link} from 'react-router-dom';
import Search from './Search';

const Navbar = ({darkTheme, setDarkTheme}) => {
  return (
    <div className="p-3 pb- flex flex-wrap sm:flex-col sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-full">
        <Link to="/">
          <p className="text-2xl px-4 py-1 bg-blue-400 text-white rounded-sm font-bold dark:bg-grey-600 dark:text-white">Googl</p>
        </Link>
        <Search/>
        <button className="py-2 px-3 flex items-center rounded-full font-medium dark:bg-white bg-gray-600" type="button" onClick={(ev) => setDarkTheme(!darkTheme)}>
          {darkTheme? <span className="text-md dark:text-gray-500">Light &nbsp; &#9728;</span> : <span className="text-md text-white">Dark &nbsp;&#9729;</span>}
        </button>
      </div>
      
    </div>
  )
}

export default Navbar;  