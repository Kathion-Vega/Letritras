import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


export default class Futer extends Component {
render() {
	return (
<>
<Navbar fixed="bottom"  bg="dark">
    <Container>
      <Navbar.Brand className="text-danger">Hecho con ♡</Navbar.Brand>
    </Container>
  </Navbar>
</>
);
  }
}