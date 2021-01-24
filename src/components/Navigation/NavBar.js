import React from "react";

const NavBar = () => {


    return(
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand">Inventar</a>
                </div>
                <ul className=".d-flex flex-row nav navbar-nav">
                    <li className="active"><a>Home</a></li>
                    <li><a>Products</a></li>
                    <li><a>Category</a></li>
                    <li><a>Customer</a></li>
                    <li><a>Orders</a></li>
                    <li><a>Warehouse</a></li>
                    <li><a>Workers</a></li>
                </ul>
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Settings
                    <span className="caret"></span></button>
                        <ul className="dropdown-menu">
                            <li><a></a></li>
                            <li><a>Profile</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;