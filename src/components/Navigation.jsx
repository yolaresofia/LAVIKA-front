import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/Auth'
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'
import {Flex} from 'rebass'
class Navigation extends Component {
  render() {
    // `user`, `logout`, `isLoggedIn` are coming from the AuthProvider 
    // and are injected by the withAuth HOC
    const { user, logout, isLoggedIn } = this.props;

    return (
      <ThemeProvider theme={theme}>
      <Flex className="navbar">
        <Link to={'/'} id='home-btn'>
          <h4>Home</h4>
        </Link>
        {
          isLoggedIn
            ? <div className="navbar-btns">
              <Link to={'/profile'} id='profile-btn'>
                <h4>{user.username}</h4>
              </Link>
              <Link to={'/xp'} id='xp-btn'>
              <h4>XP</h4>
               </Link>
              <Link to={'/comunity'} id='comunity-btn'>
              <h4>COMUNITY</h4>
               </Link>
              <button onClick={logout}> Logout </button>
            </div>
            : (
              <>
                <Link to="/login">
                  {' '}
                  <button className="navbar-button">Login</button>{' '}
                </Link>
                <br />
                <Link to="/signup">
                  {' '}
                  <button className="navbar-button">Sign Up</button>{' '}
                </Link>
              </>
            )}
      </Flex>
      </ThemeProvider>
    );
  }
}

export default withAuth(Navigation);