import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import {CategoriesList} from './lists/categoriesList';
import NewCategory from './newCategoryComponent';
import styles from './styles.module.scss';

import {
  BrowserRouter as Router,
  Route, 
  Link, 
} from "react-router-dom";

const ListedCategories = CategoriesList,
    MakeListCategory = function(listedCategory) {
        return <ListGroup.Item key={listedCategory.label}>{listedCategory.value}</ListGroup.Item>;
    };

  class Categories extends Component {

  state = {  
    sectionName:'Categorias',
    addButtonLabel:'Nova Categoria' 
  };
  
  render() { 
   
      return ( 
      <React.Fragment>
          <div className={styles.categoriesContainer}>

              <h2 className={styles.categoriesTitle}><span className="text-primary m-4">{this.state.sectionName}</span></h2>

                <ListGroup className={styles.categoriesList}> 
                  {ListedCategories.map(MakeListCategory)}
                </ListGroup>
              
              <div className={styles.addCategoryButton}>

                <Router>
                  <Link to="/newCategoryComponent"><Button className="btn btn-primary btn-sm"><strong>{this.state.addButtonLabel}</strong></Button></Link>
                  <Route path="/newCategoryComponent" component={NewCategory} />
                </Router> 

              </div>
              

          </div>
      </React.Fragment>
      );
  }
}

export default Categories;