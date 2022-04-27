import React, { Component } from 'react';
class NavBar extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="">Texas Breweries</a>
                    </div>
                </nav>
                <br />
            </div>
        );
    }
}
 
export default NavBar;