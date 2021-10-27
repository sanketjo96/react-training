import React, { useState } from "react";

// import { useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Infi loop
  // if (localStorage.getItem("isLoggedIn", 1) === "1") {
  //   setIsLoggedIn(true);
  // }

  // Usage of effect hook
  // useEffect(() => {
  //   if (localStorage.getItem("isLoggedIn", 1) === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    /**
     * Post login refresh throws user out of the app
     * we need a functionality where post refresh state needs to be maintianed
     */

    localStorage.setItem("isLoggedIn", 1);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.clear("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
