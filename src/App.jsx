import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import FormPage from "./Pages/FormPage";

function App() {
  return (
    <div className="App">
        {/* <HomePage/>  */}
        <FormPage /> 
    </div>
  );
}

export default App;
