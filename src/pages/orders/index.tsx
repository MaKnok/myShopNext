import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap";
import NewOrder from './newOrderComponent';

import {
    BrowserRouter as Router,
    Route, 
    Link, 
  } from "react-router-dom";


class Orders extends Component {

    state = { 
        sectionName:'Pedidos',
        addOrderNotification:'Chegaram novos pedidos!' 
    }

    render() { 
        return ( 
            <React.Fragment>
            

            <div>
                <span className="text-primary m-4">{this.state.sectionName}</span>
                <Router>
                    <Link to="/newOrderComponent"><button className="btn btn-primary btn-sm" >{this.state.addOrderNotification}</button> </Link>
                    <Route path="/newOrderComponent" component={NewOrder} />
                </Router> 
            </div>

           </React.Fragment>
        );
    }
}
 
export default Orders;