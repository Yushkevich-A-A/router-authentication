import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import AuthProvider from "./Providers/AuthProvider/AuthProvider";
import PageProvider from "./Pages/PageProvider/PageProvider";
import AuthPage from "./Pages/AuthPage/AuthPage";
import UserPage from './Pages/UserPage/UserPage';
import Page404 from "./Pages/Page404/Page404";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={AuthPage}/>
          <Route path='/news' component={UserPage}/>
          <Route component={Page404}/>
        </Switch>
      </Router>
        {/* <PageProvider/> */}
    </AuthProvider>
  );
}

export default App;
