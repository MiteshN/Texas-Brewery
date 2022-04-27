import axios from "axios";
import React, { Component } from "react";
import BreweryCard from "./breweryCard";

class Brewery extends Component { 
    state = { 
        breweries: []
    }; 
    
    componentDidMount() {
        this.getBreweries();
    }

    getBreweries() {
        axios.get("https://api.openbrewerydb.org/breweries?by_state=texas").then(response => { 
            this.setState({breweries: response.data});
        })
    }
    
    render() { 
        return (
            <div>
                <div className="row g-5">
                    {this.state.breweries.map(brewery => (
                        <BreweryCard key={brewery.id} brewery={brewery}/>
                    ))}
                </div>
            </div>
        );
    }
}
 
export default Brewery;