import React, { useState } from 'react';
import '../style/Login.css';
import '../style/LoginError.css';
import { AnimatedPage } from "./AnimatedPage";
import myImage from '../images/cross-round-svgrepo-com.svg';
import { Navigate } from 'react-router-dom';

// Exporting the Login component to be used in other files.
// The component receives props such as currentPassword and currentUserName.
export const Login = ({
  currentPassword,
  currentUserName,
}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginFailed, setIsLoginFailed] = useState(false);
  const [isfocusedUserName, setIsFocusedUserName] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // The handleFocusUserName function sets the isfocusedUserName state to true
  // when the username field is focused.
  const handleFocusUserName = () => {
    setIsFocusedUserName(true);
  };

  // The handleBlurUserName function sets the isfocusedUserName state to false
  // when the username field loses focus.
  const handleBlurUserName = () => {
    setIsFocusedUserName(false);
  };

  // The handleFocusPassword function sets the isPasswordFocused state to true
  // when the password field is focused.
  const handleFocusPassword = () => {
    setIsPasswordFocused(true);
  };

  // The handleBlurPassword function sets the isPasswordFocused state to false
  // when the password field loses focus.
  const handleBlurPassword = () => {
    setIsPasswordFocused(false);
  };


  // The handleSubmit function is the event handler for form submission.
  // It checks the correctness of the login credentials
  // and sets the isLoggedIn and isLoginFailed states accordingly.
  const handleSubmit = (event) => {
    event.preventDefault();

    if (userName === currentUserName && password === currentPassword) {
      setIsLoggedIn(true);
      setIsLoginFailed(false);
    } else {
      setIsLoginFailed(true);
    }
  };

  // If the user is logged in (isLoggedIn is true),
  // a redirection to the "/menu" route is performed using the Navigate component.
  if (isLoggedIn) {
    return <Navigate to="/menu" />;
  }

  return (
    <AnimatedPage>
      <div className="auth-form-container">
        <div className="form-box">
          <form className="login-form" onSubmit={handleSubmit}>
            <h1 className="login-title">Login</h1>
            <div className="inputbox">
              <label className="form-label" htmlFor="name" />
              <input
                className="form-input"
                value={userName}
                placeholder={isfocusedUserName ? '' : 'Username'}
                type="text"
                id="name"
                name="name"
                autoComplete={password}
                onClick={() => setIsLoginFailed(false)}
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
                onFocus={handleFocusUserName}
                onBlur={handleBlurUserName}
              />
            </div>
            <div className="inputbox">
              <label className="form-label" htmlFor="password" />
              <input
                className="form-input"
                value={password}
                type="password"
                placeholder={isPasswordFocused ? '' : 'Password'}
                id="password"
                name="password"
                autoComplete={userName}
                onClick={() => setIsLoginFailed(false)}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                onFocus={handleFocusPassword}
                onBlur={handleBlurPassword}
              />
            </div>
            {isLoginFailed ? (
              <div className="error-inner">
                <div className="error-closebutton-container">
                  <button
                    className="error-close-button"
                    onClick={() => setIsLoginFailed(false)}
                  >
                    <img
                      src={myImage}
                      alt="cross"
                      className="error-close-button-image"
                    />
                  </button>
                </div>
                <p className="error-text">Wrong username or password.</p>
              </div>
            ) : (
              <button className="submit-button" type="submit">
                Login
              </button>
            )}
          </form>
        </div>
      </div>
    </AnimatedPage>
  );
};

// The Login component represents the login form
// where the user can enter their username and password.
// It checks the correctness of the login credentials
// and displays the unsuccessful login error message or
// performs a redirection to the "/menu" route depending on the result.