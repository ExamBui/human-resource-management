import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import ResetPassword from "./pages/ResetPassword";

import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import { useEffect } from "react";

function App() {
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('access-token')) {
      history.push(`/dashboard`);
    } else {
      history.push(`/sign-in`)
    }
  }, [history])
  
  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/forgot-password" exact component={ResetPassword} />
        <Main>
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Redirect from="*" to="/dashboard" />
        </Main>
      </Switch>
    </div>
  );
}

export default App;
