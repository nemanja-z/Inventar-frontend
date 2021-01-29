import React from "react";
import NavBar from "../Navigation/NavBar";
import {
  Route,
  Switch,
} from "react-router-dom";


const Main = () => {

    return(
    <>
    <NavBar/>
    <Switch>
        <Route path="/home">

        </Route>
        <Route path="/products">
        </Route>
        <Route path="/category">
        </Route>
        <Route path="/customers">
        </Route>
        <Route path="/orders">
        </Route>
        <Route path="/warehouse">
        </Route>
        <Route path="/workers">
        </Route>
        <Route path="profile">
        </Route>
    </Switch>
    </>)
}

export default Main;