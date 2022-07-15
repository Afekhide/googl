import React, {useState} from 'react';
import { useResultContext } from '../contexts/ResultContextProvider';

const Search = () => {

  const [cleared, setCleared] = useState(false);
  const {searchTerm, setSearchTerm} = useResultContext();
  const handleKeyStroke = (event) => {
    let text = event.target.value;
    let keyCode = event.keyCode || event.which;
    if(keyCode === 13) setSearchTerm(text)
    return;
  }
  return (
    <div className="shadow-md py-1 px-5 justify-between text-md rounded-full flex bg-white">
      
      <input onKeyPress={ev => handleKeyStroke(ev)} type="text"
      defaultValue = {cleared? '': searchTerm}
      
      className="font-semibold text-gray-500 p-3 bg-transparent border-0 focus:border-0 outline-0"/>
      <button onClick={ev => setCleared('')} className="p-2 font-black dark:text-gray-700"></button>
    </div>
  )
}

export default Search;