import React, { Component } from 'react';
import './estilo.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Acarrusel from './Acarrusel';

export default class Pizara extends Component {
 constructor(props) {
    super(props);

    this.state = {
      users: {}
    };


  }	

	
render() {
    return (
<>

		<Jumbotron fluid>
		  <Container>
			<h1>Vamos a jugar con la letras</h1>
			<p>
			  Da clic a la letra A.
			</p>
			<Jumbotron fluid>
				<Container>
				<br/>
				<br/>
				<Acarrusel></Acarrusel>
				</Container>
		</Jumbotron>
				  </Container>
		</Jumbotron>
	</>
    );
  }
}