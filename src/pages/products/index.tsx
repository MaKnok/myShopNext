import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import NewProduct from './newProductComponent';
import {ProductsList} from './lists/productsList';
import styles from './styles.module.scss';


import {
    BrowserRouter as Router,
    Route, 
    Link, 
  } from "react-router-dom";

const ListedProducts = ProductsList,
MakeListProduct = function(listedProduct){
  return <ListGroup.Item key={listedProduct.label}>{listedProduct.value}</ListGroup.Item>;
}

class Products extends Component {

    state = { 
        sectionName:'Produtos',
        addButtonLabel:'+ Adicionar Produto' 
    }

    render() { 
        return ( 
            <React.Fragment>

            <div className={styles.productsContainer}>
            
              <h2 className={styles.productsTitle}><span className="text-primary m-4">{this.state.sectionName}</span></h2>

                <ListGroup className={styles.productsList}> 
                  {ListedProducts.map(MakeListProduct)}
                </ListGroup>

              <div className={styles.addProductButton}>
                
                <Router>
                    <Link to="/newProductComponent"><button className="btn btn-primary btn-sm"><strong>{this.state.addButtonLabel}</strong></button></Link>
                    <Route path="/newProductComponent" component={NewProduct} />
                </Router>
   
              </div>
            
            </div>

           </React.Fragment>
        );
    }
}
 
export default Products;