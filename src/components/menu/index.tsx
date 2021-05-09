import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styles from './styles.module.scss';

export function Menu(){
  
  return(
    <div>
        <div>
          <Nav defaultActiveKey="/" className="flex-column">
              <Nav.Link as={Link} to='/' className={styles.navMenu}>Dashboard</Nav.Link>
              <Nav.Link as={Link} to='/categories' eventKey="categories" className={styles.navMenu}>Categorias</Nav.Link>
              <Nav.Link as={Link} to='/products' eventKey="products" className={styles.navMenu}>Produtos</Nav.Link>
              <Nav.Link as={Link} to='/orders' eventKey="orders" className={styles.navMenu}>Pedidos</Nav.Link>
              <Nav.Link as={Link} to='/shippings' eventKey="shippings" className={styles.navMenu}>Envios</Nav.Link>
              <Nav.Link as={Link} to='/shopClients' eventKey="shopClients" className={styles.navMenu}>Clientes</Nav.Link>  
          </Nav>
        </div>
    </div>
  );
}