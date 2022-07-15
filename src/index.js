import App from "./App";
import './styles.css';
import reactDom from "react-dom";
import { ResultContextProvider } from "./contexts/ResultContextProvider";
import { BrowserRouter as Router } from "react-router-dom";


reactDom.render(
<ResultContextProvider>
<Router>
    <App/>
</Router>
</ResultContextProvider>
,document.getElementById('root'))