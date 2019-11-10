import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '../Main/Main.js';
import UploadVideo from '../UploadVideo/UploadVideo';


class App extends React.Component {

  render() { 
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/uploadVideo" component={UploadVideo} />
          <Route exact path="/:id" component={Main} />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
