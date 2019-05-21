import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IndexTop from "./component/index";
import StoreCore from "./component/store"



export default class castomRouter extends React.Component{
    render(){
        return(
        <Router>
            <Switch>
            <Route exact path="/" component={IndexTop}/>
            <Route exact path="/StoreCore" component={StoreCore}/>
            </Switch>
        </Router>
        )
    }

}