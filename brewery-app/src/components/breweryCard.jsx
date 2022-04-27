import React, { Component } from 'react';

class BreweryCard extends Component {
    state = {  } 

    capitalize(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    checkAddress(address){
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

    checkWebsite(website) {
        if (website !== null){
            return <a href={website} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Website Link</a>
        }
        else{
            return <a href={website} target="_blank" rel="noopener noreferrer" className="btn btn-danger">No Website Found</a>
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
            <div className="col-8 col-md-4 cold-lg-2">
                <div className="card text-center" style={{width: '25rem', height: '23rem'} }>
                    <div className="card-header">
                        <h5 className="card-title">{this.props.brewery.name}</h5>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.capitalize(this.props.brewery.brewery_type)}</h5>
                        {this.checkAddress(this.props.brewery.street)}
                        <p className="card-text">
                            {this.formatPhoneNumber(this.props.brewery.phone)}
                        </p>
                        {this.checkWebsite(this.props.brewery.website_url)}
                    </div>
                    <div className="card-footer text-muted">
                        Updated At: {this.props.brewery.updated_at}
                        <br /> 
                        Created At: {this.props.brewery.created_at}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default BreweryCard;