//Core App things
import React, {Component} from 'react'
import {Route} from 'react-router';

//Core Pages
import Splash from './components/Splash';

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Splash}/>
      </div>
    )
  }
};
