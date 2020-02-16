import React, { useState, Fragment } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import { Link } from "react-router-dom";
import "./Nav.css";

const NavBar = () => {
  const [display, setDisplay] = useState(false);
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const toggleDisplay = () => {
    if (display === true) {
      setDisplay(false)
    } else {
      setDisplay(true)
    }
  }

  const openIcon = <img className='icon' src={require('../../assets/menu-dark.svg')} />
  const closeIcon = <img className='icon' src={require('../../assets/close-dark.svg')} />

  const loginButton = () => {
    //console.log('isAuthenticated')
    //console.log(isAuthenticated)
    if (isAuthenticated) {
      return <a hreh='#' className='menu-link' onClick={() => logout()}>Log out</a>;
    } else if (isAuthenticated === false) {
      return <a href='#' className='menu-link' onClick={() => loginWithRedirect({})}>Log in</a>;
    }
  }

    const menu = () => {
    if (display === true) {
      return (
        <div className='menu open'>
          <h1 className='menu-title'><Link to="/">Dashboard</Link></h1>
          <div className='menu-links'>
            {isAuthenticated && (
              <Fragment>
                <div><Link to="/">Home</Link></div>
              <div><Link to="/profile">Profile</Link></div>
              <div><Link to="/messages">Messages</Link></div>
              </Fragment>
            )}
            <div>{loginButton()}</div>
          </div>

        </div>
      )
    } else {
      return (
        <div className='menu'>
          <h1 className='menu-title'><Link to="/">Dashboard</Link></h1>
          {isAuthenticated && (
            <div className='menu-links'>
              <div><Link to="/">Home</Link></div>
              <div><Link to="/profile">Profile</Link></div>
              <div><Link to="/messages">Messages</Link></div>
              <div>{loginButton()}</div>
            </div>
          )}
        </div>
      )
    }
  }

  return (
    <div>
      <button className='fab' onClick={toggleDisplay}>
        {display === true ? closeIcon : openIcon}
      </button>
      {menu()}
    </div>
  );

};


export default NavBar;