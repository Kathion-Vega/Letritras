import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Switch, Route, Link }  from 'react-router-dom';
import Libros from "./Libros";
import Pizara from "./Pizara";
import Revisar from "./Revisar";
import $ from "jquery";
import './estilo.css';
import axios from 'axios';

export default function Upbar() {
  
	
	
return (
    <Router>
      <Container>
		<Navbar bg="light" >
		<Row>
		<Col>    <Navbar.Brand >
      {' '}
	 <div className="preloader">
			<div className="sk-rotating-plane"><h1>L</h1></div>
	  <p>etritas</p></div>
    </Navbar.Brand></Col>
		<Col >
       
          <Button variant="info"size="lg" id="awesomeDiv" class="awesomeDiv">
            <Link to="/pizara" >Pizara</Link>
          </Button>
		  </Col>
		  <Col>
          <Button variant="warning" size="lg"id="awesomeDiv1" class="awesomeDiv1">
            <Link to="/libros">Libros</Link>
          </Button>
		 </Col>
		 <Col>
          <Button variant="success"size="lg"id="awesomeDiv2" class="awesomeDiv2">
            <Link to="/revisar">Revisar</Link>
          </Button>
			</Col>
		 <Col>
	  		<Button variant="danger" size="lg"id="awesomeDiv3" class="awesomeDiv3">
            <Link to="/afuera">Salir</Link>
          </Button>
		</Col>
	
       

        <hr />

        <Switch>
          <Route exact path="/pizara">
            <Ppp />
          </Route>
          <Route path="/libros">
            <Lll />
          </Route>
          <Route path="/revisar">
            <Rrr />
          </Route>
	  		 <Route path="/afuera">
          <Aaa/>
          </Route>
        </Switch>
	  </Row>
	</Navbar>
      </Container>
    </Router>
	
  );
}



function Ppp() {
  return (
   
	  <Pizara>
     
    </Pizara>
	
  );
}

function Lll() {
  return (
    <Libros> 
    </Libros>
  );
}

function Rrr () {
  return (
    <Revisar>
    </Revisar>
  );
}

function Aaa () {
  return (
  axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
	  .then(response => {
       alert("adios");
      })
      .catch(error => {
        console.log("logout error", error);
      })
  );
}
	  
$(function() {
	$('#awesomeDiv').mouseover(function() {
  	$(this).addClass('awesomeDiv-rotated');
  });
  
  $('#awesomeDiv').mouseleave(function() {
  	$(this).removeClass('awesomeDiv-rotated');
  });
});


$(function() {
	$('#awesomeDiv1').mouseover(function() {
  	$(this).addClass('awesomeDiv1-rotated');
  });
  
  $('#awesomeDiv1').mouseleave(function() {
  	$(this).removeClass('awesomeDiv1-rotated');
  });
});

$(function() {
	$('#awesomeDiv2').mouseover(function() {
  	$(this).addClass('awesomeDiv2-rotated');
  });
  
  $('#awesomeDiv2').mouseleave(function() {
  	$(this).removeClass('awesomeDiv2-rotated');
  });
});


$(function() {
	$('#awesomeDiv3').mouseover(function() {
  	$(this).addClass('awesomeDiv3-rotated');
  });
  
  $('#awesomeDiv3').mouseleave(function() {
  	$(this).removeClass('awesomeDiv3-rotated');
  });
});