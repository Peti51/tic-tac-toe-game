import React, { useState } from 'react';
import '../style/Login.css';
import '../style/LoginError.css';
import { AnimatedPage } from "./AnimatedPage";
import myImage from '../images/cross-round-svgrepo-com.svg';
import { Navigate } from 'react-router-dom';

// A Login komponens exportálása, hogy más fájlokban is használható legyen.
// A komponens props-okat kap, mint például currentPassword, currentUserName.
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

  // Az handleFocusUserName függvény, amely beállítja az isfocusedUserName állapotot true-ra,
  // amikor a felhasználónév mező fókuszba kerül.
  const handleFocusUserName = () => {
    setIsFocusedUserName(true);
  };

  // Az handleBlurUserName függvény, amely beállítja az isfocusedUserName állapotot false-ra,
  // amikor a felhasználónév mező elveszíti a fókuszt.
  const handleBlurUserName = () => {
    setIsFocusedUserName(false);
  };

  // Az handleFocusPassword függvény, amely beállítja az isPasswordFocused állapotot true-ra,
  // amikor a jelszó mező fókuszba kerül.
  const handleFocusPassword = () => {
    setIsPasswordFocused(true);
  };

  // Az handleBlurPassword függvény, amely beállítja az isPasswordFocused állapotot false-ra,
  // amikor a jelszó mező elveszíti a fókuszt.
  const handleBlurPassword = () => {
    setIsPasswordFocused(false);
  };


  // Az handleSubmit függvény, amely az űrlap benyújtásának eseménykezelője. 
  // Ellenőrzi a bejelentkezési adatok helyességét, 
  // és beállítja az isLoggedIn és isLoginFailed állapotokat ennek megfelelően.
  const handleSubmit = (event) => {
    event.preventDefault();

    if (userName === currentUserName && password === currentPassword) {
      setIsLoggedIn(true);
      setIsLoginFailed(false);
    } else {
      setIsLoginFailed(true);
    }
  };

  // Ha a felhasználó bejelentkezett (isLoggedIn értéke true),
  // akkor átirányítás történik a "/menu" útvonalra a Navigate komponens segítségével.
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

// A Login komponens a bejelentkező űrlapot reprezentálja,
// ahol a felhasználó megadhatja a felhasználónevet és a jelszót.
// A bejelentkezési adatok helyességét ellenőrzi,
// és az eredménytől függően megjeleníti a sikertelen bejelentkezési hibaüzenetet vagy
// átirányítást hajt végre a "/menu" útvonalra.