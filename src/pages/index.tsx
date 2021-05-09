import React from 'react';
import {Header} from '../components/header';
import {Menu} from '../components/menu';
import Categories from './categories';
import Products from './products';
import Orders from './orders';
import Shippings from './shippings';
import ShopClients from './shopClients';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import styles from '../styles/app.module.scss';

export default function MyApp() {
  return (
    <React.Fragment>
      <Router>
        <div className={styles.wrapper}>
            <Menu/>
          <main>
            <Header />
            <Switch>         
              <Route exact path="/"><h1>Dashboard</h1></Route>
              <Route path="/categories"><Categories /></Route>
              <Route path="/products"><Products /></Route>
              <Route path="/orders"><Orders /></Route>
              <Route path="/shippings"><Shippings /></Route>
              <Route path="/shopClients"><ShopClients /></Route>        
            </Switch> 
          </main> 
        </div>
      </Router>
    </React.Fragment>
  )
}
