import React, { Component } from 'react';
import $ from 'jquery';
import Navbar from 'react-bootstrap/Navbar';
import './estilo.css';


export default class Login extends Component {
 
	
handleAnimate() {
    $('.preloader').fadeOut(20000); // set duration in brackets    


var height=$(window).height();



$(window).scroll(function(){
  $('.mov').each(function(){
   var blockPos = $(this).offset().top;
   var topWindow = $(this).scrollTop;
    if (blockPos > height - 200){
      $(this).addClass('fadeInUp')
    }
  });
});

}	
	
render() {
    return (
<>
  
  <br />

  <br />
  <Navbar expand="lg" bg="dark" variant="dark">
    <Navbar.Brand >
      {' '}
	 <div onMouseMove={this.handleAnimate}className="preloader">
			<div className="sk-rotating-plane"><h1>L</h1></div>
	  <p>etritas</p></div>
    </Navbar.Brand>
  </Navbar>
</>
    );
  }
}