import React, {useEffect} from "react";
import NavBar from "../Navigation/NavBar";
import Dashboard from './components/Dashboard';
import Product from './components/Product';
import Worker from './components/Worker';
import Customer from './components/Customer';
import Warehouse from './components/Warehouse';
import Profile from './components/Profile';
import Order from './components/Order';
import api from '../../services/api';
import cookie from '../../services/cookie';

import {
  Route,
  Switch,
} from "react-router-dom";


const Main = () => {


  useEffect(()=>{
    const company = async()=>{
      try{
        await cookie();
        const {data} = await api().get('api/company');
        console.log(data)
      }catch(e){
        console.log(e)
      }
    }
    company(); 
  })


    return(
    <>
    <NavBar/>
    <Switch>
        <Route path="/Dashboard">
          <Dashboard/>
        </Route>
        <Route path="/products">
         <Product/>
        </Route>
        <Route path="/customers">
          <Customer/>
        </Route>
        <Route path="/orders">
          <Order/>
        </Route>
        <Route path="/warehouse">
          <Warehouse/>
        </Route>
        <Route path="/workers">
          <Worker/>
        </Route>
        <Route path="profile">
          <Profile/>
        </Route>
    </Switch>
    </>)
}

export default Main;