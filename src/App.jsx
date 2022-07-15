import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Routes from './components/Routes';

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);
    useEffect(() => console.log(darkTheme), [darkTheme])

  return (
    <div className={darkTheme ? "dark" : ""}>
        <div className="font-medium bg-gray-50 dark:bg-gray-700 dark:text-white min-h-screen">
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
            <Routes/>
            <Footer/>
        </div>
    </div>
  )
}


export default App;

