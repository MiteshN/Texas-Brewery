import axios from "axios";
import React, { Component } from "react";

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
                <table className="table">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>city</th>
                            <th>state</th>
                            <th>country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.breweries.map(brewery => (
                            <tr key={brewery.id}>
                                <td>{brewery.name}</td>
                                <td>{brewery.city}</td>
                                <td>{brewery.state}</td>
                                <td>{brewery.country}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default Brewery;