import React from "react";
import ReactDOM from "react-dom";
import Router, { Switch } from "react-router-dom";

import LoginBaek from './pages/jinsubaek/Login/Login';
import MainBaek from './pages/jinsubaek/Main/Main';

import LoginKang from './pages/junheekang/Login/Login';
import MainKang from './pages/junheekang/Main/Main';

import LoginJung from './pages/yujungjung/Login/Login';
import MainJung from './pages/yujungjung/Main/Main';

import LoginKim from './pages/mingikim/Login/Login';
import MainKim from './pages/mingikim/Main/Main';

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
class Router extends React.Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path='/login-baek' component={LoginBaek} />
                    <Route exact path='/main-baek' component={MainBaek} />

                    <Route exact path='/login-kang' component={LoginKang} />
                    <Route exact path='/main-kang' component={MainKang} />

                    <Route exact path='/login-jung' component={LoginJung} />
                    <Route exact path='/main-jung' component={MainJung} />
                    
                    <Route exact path='/login-kim' component={LoginKim} />
                    <Route exact path='/main-kim' component={MainKim} />
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<Router />,document.getElementById("root"));