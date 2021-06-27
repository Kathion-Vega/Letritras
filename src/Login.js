import React, { Component } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Switch, Route, Link }  from 'react-router-dom';
export default class Login extends Component {
 state= {
        data: [],
        password: '',
        nombre:'',
        access: false
    }

nombre = e => this.setState({nombre: e.target.value });
password = e => this.setState({password: e.target.value });

checkUserAndPassword = e => {
        const { nombre, password } = this.state;
        e.preventDefault();
        
        if(nombre === '' | password === '')
            return window.alert('User or password are empty.', 1000);
        if(nombre === 'admin' && password === 'admin') return this.props.push("/dashboard");
            return window.alert('User or password are incorrect.', 1000);


}
  render() {
    return (
      
		 <Row>
    <Col md={{ span: 6, offset: 3 }}>
		<Container fluid="md">
		
		<Card style={{ width: '30rem' }}>
		
		  <Card.Body>
				<Card.Title>Bienvenido</Card.Title>
				
				<Card.Text>
				<Form onSubmit={e=> this.checkUserAndPassword(e)} >
				  <Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Username</Form.Label>
					<Form.Control onChange={e=> this.nombre(e)} type="type" name="username" placeholder="Ingresa tu nombre de usuario" value={this.state.username} onChange={this.handleChange} />

				  </Form.Group>

				  <Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control onChange={e=> this.password(e)} type="password" placeholder="Ingresa tu clave" value={this.state.password}
            		onChange={this.handleChange}/>
				  </Form.Group>


				  	<Button variant="primary" type="submit" onMouseOver={this.handleAnimate} onClick={<Link to="/Dashboard"><Dashboard>{this.state.username}</Dashboard></Link>}>
					Submit
				  </Button>
				</Form>
		  </Card.Text>
		
  	</Card.Body>
</Card>
	
	</Container>
		</Col>
  		</Row>
    );
  }
}