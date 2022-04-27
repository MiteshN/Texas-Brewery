import React, { Component } from 'react';
import Brewery from './brewery';


class BreweryCard extends Component {
    state = {  } 

    capitalize(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    checkAddress(address){
        console.log(address);
        if (address !== null){
            return  <p className="card-text">
                        {this.props.brewery.street} <br /> 
                        {this.props.brewery.city}, {this.props.brewery.state} {this.props.brewery.postal_code} <br />
                        {this.props.brewery.country}
                    </p>
        }
        else{
            return  <p className="card-text">
                        {this.props.brewery.city}, {this.props.brewery.state} {this.props.brewery.postal_code} <br />
                        {this.props.brewery.country}
                    </p>
        }
    }

    formatPhoneNumber(phoneNumberString) {
        let cleaned = ('' + phoneNumberString).replace(/\D/g, '');
        let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
          return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }
        return 'No Phone Number Found';
      }

    render() { 
        return (

            <div className="card text-center" style={{width: '25rem', margin: '25px 25px 25px 25px'} }>
                <div className="card-header">
                    <h5 className="card-title">{this.props.brewery.name}</h5>
                    <h6 className="card-subtitle text-muted">{this.capitalize(this.props.brewery.brewery_type)}</h6>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    {this.checkAddress(this.props.brewery.street)}
                    <p className="card-text">
                        {this.formatPhoneNumber(this.props.brewery.phone)}
                    </p>
                    <a href={this.props.brewery.website_url} className="btn btn-primary">Website Link</a>
                </div>
                <div className="card-footer text-muted">
                    Updated At: {this.props.brewery.updated_at}
                    <br /> 
                    Created At: {this.props.brewery.created_at}
                </div>
            </div>
        );
    }
}
 
export default BreweryCard;