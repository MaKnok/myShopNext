import {Navbar} from 'react-bootstrap';
import styles from './styles.module.scss'

export function Header(){
  return(
   <div>
      <Navbar className={styles.header}>
          <Navbar.Brand href="#home" className={styles.brand}>MyShop</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className={styles.navBarContent}>
          
          <Navbar.Text>
              Toda a sua loja por aqui!
          </Navbar.Text>

          <Navbar.Text>
              Usuário: <a href="#login">Mark Otto</a>
          </Navbar.Text>

          </Navbar.Collapse>
      </Navbar>
    </div>
  );
}