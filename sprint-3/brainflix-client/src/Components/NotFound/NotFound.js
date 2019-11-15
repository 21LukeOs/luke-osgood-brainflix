import React from 'react';
import './NotFound.scss';
import { Link } from 'react-router-dom';
import Uturn from '../../Assets/Images/u-turn.svg';


class App extends React.Component {

  render() { 
    return (
      <div className="not-found">
        <Link to='/'>
          <div className="not-found__uturn" >
            <img className="not-found__svg" src={Uturn} alt=""/>
            <p className="not-found__text">Take A U-Turn</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default App;