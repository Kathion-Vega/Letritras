import React, { Component } from 'react';
import $ from 'jquery';
import './estilo.css';

export default class Animauno extends Component {

 handleAnimate () {
 var awesomeDiv = $('#awesomeDiv');

$({rotation: 0}).animate({rotation: 360}, {
  duration: 50000,
  easing: 'linear',
  step: function () {
    awesomeDiv.css({transform: 'rotate(' + this.rotation + 'deg)'});
 
  }
});


 }
 render (){
 return (
 <>
 <div id="awesomeDiv">
  <div  onMouseMove={this.handleAnimate} id="centerMe">
     <center>Que quieres hacer hoy?</center>
  </div>
</div>
</>
 
 )
 }
}