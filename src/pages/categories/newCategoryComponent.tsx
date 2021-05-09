import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import styles from './styles/newCategory.module.scss';

class NewCategory extends Component {

    state = {  }

    formatForm = {
        marginTop:15
    };

    render() { 
        return ( 
            <div>
                <Form className={styles.newCategoryForm}>

                    <Form.Group controlId="formCategoryName">
                    <Form.Label>Nome da Categoria</Form.Label>
                    <Form.Control type="text" placeholder="Escolha um nome para essa Categoria" />
                    </Form.Group>
                
                    <Form.Group controlId="formBrandsOptions" style={this.formatForm}>
                    <Form.Label>Marcas disponíveis</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Digite as marcas disponíveis separadas por vírgula"/>
                    </Form.Group>
                  
                    <Form.Group controlId="formProductTypesOptions" style={this.formatForm}>
                    <Form.Label>Produtos disponíveis</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Digite os tipos de produtos disponíveis separados por vírgula" />
                    </Form.Group>
               
                    <Form.Group controlId="buttonsCategory" style={this.formatForm} className={styles.submitForm}>

                        <Button variant="secondary" size="sm" type="reset">
                            <strong>Limpar</strong>
                        </Button>

                        <Button variant="primary" size="sm" type="submit" className={styles.addCategorySubmitButton}>
                           <strong>+ Adicionar Categoria</strong>
                        </Button>

                    </Form.Group>

                   
                </Form>
            </div>
            
         );
    }
}
 
export default NewCategory;