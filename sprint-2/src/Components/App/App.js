import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '../Main/Main.js';
import UploadVideo from '../UploadVideo/UploadVideo';
import NotFound from '../NotFound/NotFound';


class App extends React.Component {

  render() { 
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/uploadVideo" component={UploadVideo} />

          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
