import React, {useState} from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [hidden, setHidden] = useState(true);

    return(
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-300">
            <div className="px-4 mx-auto flex flex-wrap items-center justify-between">
                <div>
                    Inventar
                </div>
                <div className="px-4 mx-auto flex flex-wrap items-center justify-between">
                    <NavLink to="/home" className="px-1">Home</NavLink>
                    <NavLink to="/products" className="px-1">Products</NavLink>
                    <NavLink to="/category" className="px-1">Category</NavLink>
                    <NavLink to="/customers" className="px-1">Customer</NavLink>
                    <NavLink to="/orders" className="px-1">Orders</NavLink>
                    <NavLink to="/warehouse" className="px-1">Warehouse</NavLink>
                    <NavLink to="/workers" className="px-1">Workers</NavLink>
                </div>
                <div className="relative inline-block text-left">
                <div>
                    <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" onClick={(e=>setHidden(!hidden))}>
                    Settings
                    </button>
                </div>
                <div className="origin-top-right absolute right-0 mt-2 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className={hidden ? "hidden" : "flex-col"} aria-orientation="vertical" aria-labelledby="options-menu" role="menu">
                        <NavLink role="menuitem" className="px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"to="/profile">Account settings</NavLink>
                        <button type="submit" className="w-full text-left w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
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

