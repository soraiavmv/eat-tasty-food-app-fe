import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component.jsx";
import HomePage from "./pages/homepage/homepage.component.jsx";

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}



/*   useEffect(() => {
   fetch(`${config['api-url']}/categories`)
       .then((response) => response.json())
       .then((result) => setSections(result));
}, []);*/
export default App;