import React from 'react';

const Header = (props) => {
    
    return (
        <header>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a href="/#" className="navbar-brand">
                            Recipe Book
                        </a>
                    </div>
    
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className={props.active === "recipe" ? "active" : ""}>
                                <a href="/#" onClick={() => props.onRecipesSelected()}>
                                    Recipes
                                </a>
                            </li>
                            <li className={props.active === "shopping" ? "active" : ""}>
                                <a href="/#" onClick={() => props.onShoppingListSelected()}>
                                    Shopping List
                                </a>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a className="dropdown-toggle" href="/#">Manage <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="/#">Save Data</a></li>
                                    <li><a href="/#   ">Fetching Data</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );

};

export default Header;