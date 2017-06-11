import React from 'react';
import { NavLink } from 'react-router-dom'
import Logo from '../shared/logo/index';
import * as styles from './style.css';

class Splash extends React.Component {
  render(){
    return (
      <div className={styles.indexAppContent}>
        <NavLink to="/home"  className={styles.index}>
          <Logo />
          <div>Jamie</div>
        </NavLink>
      </div>
    );
  }
}

export default Splash;
