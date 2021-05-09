import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap";
import NewShipping from './newShippingComponent';

import {
    BrowserRouter as Router,
    Route, 
    Link, 
  } from "react-router-dom";

class Shippings extends Component {
    state = { 
        sectionName:'Entregas',
        newShippingLabel:'Pedido processado! Você tem uma nova entrega.' 
    }
    
    render() { 
        return (  
            
          <React.Fragment>
            <span className="text-primary m-4">{this.state.sectionName}</span>
                <Router>
                    <Link to="/newShippingComponent"><button className="btn btn-primary btn-sm">{this.state.newShippingLabel}</button></Link>
                    <Route path="/newShippingComponent" component={NewShipping} />
                </Router>
          </React.Fragment>
            
        );
    }
}
 
export default Shippings;