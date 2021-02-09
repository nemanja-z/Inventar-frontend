import React, {useState, useContext} from "react";
import { NavLink } from "react-router-dom";
import api from '../../services/api';
import cookie from '../../services/cookie';
import { useHistory } from "react-router-dom";
import {GlobalDispatchContext} from '../../state/Store';


const NavBar = () => {
    const {dispatchUser} = useContext(GlobalDispatchContext);
    const [hidden, setHidden] = useState(true);
    const history = useHistory();
    const logOut =async()=>{
        try{
            await cookie();
            await api().get('api/logout');
            dispatchUser({type:'logout'});
            history.push("/");
        }catch(e){
            console.log(e)
        }
    }
    return(
        <nav className="items-center w-full justify-between px-2 py-3 bg-gray-300">
        
            <div className="px-2 mx-auto flex flex-wrap items-center justify-between">
                <div>
                    Inventar
                </div>
                <div className="flex flex-wrap items-center justify-between">
                    <NavLink to="/dashboard" className="px-2">Dashboard</NavLink>
                    <NavLink to="/products" className="px-2">Products</NavLink>
                    <NavLink to="/customers" className="px-2">Customer</NavLink>
                    <NavLink to="/orders" className="px-2">Orders</NavLink>
                    <NavLink to="/workers" className="px-2">Workers</NavLink>
                </div>
                <div className="flex flex-row">
                <div className="relative">
                    <a className="hover:text-green-500 dark-hover:text-green-300 text-gray-600 dark:text-gray-300">
                        <svg width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path
                                d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                    </a>
                    <div
                        className="absolute w-2 h-2 rounded-full bg-green-500
                        dark-hover:bg-green-300 right-0 mb-5 bottom-0"></div>
                </div>
                </div>
                <div className="relative inline-block text-left">
                <div>
                    <button type="button" className="inline-flex justify-center " id="options-menu" onClick={(e=>setHidden(!hidden))}>
                    <img className="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80"
                                alt="Avatar"/>
                    </button>
                </div>
                <div className="origin-top-right absolute right-0 mt-2 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className={hidden ? "hidden" : "flex-col"} aria-orientation="vertical" aria-labelledby="options-menu" role="menu">
                        <NavLink role="menuitem" className="px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" to="/profile">Account settings</NavLink>
                        <button type="submit" className="w-full text-left w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem" onClick={logOut}>
                        Sign out
                        </button>
                    </div>
                </div>
                </div>
                </div>
            </nav>
    )
}

export default NavBar;
