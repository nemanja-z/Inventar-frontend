import React, {useContext, useEffect} from "react";
import NavBar from "../Navigation/NavBar";
import Dashboard from './components/Dashboard';
import Product from './components/Product';
import Worker from './components/Worker';
import Customer from './components/Customer';
import Profile from './components/Profile';
import Order from './components/Order';
import api from '../../services/api';
import cookie from '../../services/cookie';
import {GlobalStateContext} from '../../state/Store';
import {GlobalDispatchContext} from '../../state/Store';

import {
  Route,
  Switch,
} from "react-router-dom";


const Main = () => {
  const {user,company, worker, customer, product} = useContext(GlobalStateContext);
  const {dispatchCompany, dispatchCustomer, dispatchProduct, dispatchWorker} = useContext(GlobalDispatchContext);
  console.log(user)
  useEffect(()=>{
    const company = async()=>{
      try{
        await cookie();
        const {data} = await api().get('api/company/'+user.id);
        console.log(data, 'daaaaa')
        if(data){
          dispatchCompany({type:'init', payload:data});
          dispatchCustomer({type:'init', payload:data.customer});
          dispatchProduct({type:'init', payload:data.product});
          dispatchWorker({type:'init', payload:data.worker});
        }
      }catch(e){
        console.log(e)
      }
    }
    company(); 
  },[])


    return(
    <>
    <NavBar/>
    <Switch>
        <Route path="/dashboard">
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