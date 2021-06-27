import React from 'react';
import Upbar from './Upbar';
//axios for xml request
import axios from 'axios';
import Table from 'react-bootstrap/Table';
//xml file reader
import XMLParser from 'react-xml-parser';

class Revisar extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        author:[],
        title: []
              }
             
      }
    componentDidMount() {
     //get data request
      axios.get('/assets/book.xml', {
        "Content-Type": "application/xml; charset=utf-8"
       }).then(res => 
        {
        //Storing users detail in state array object
        const jsonDataFromXml = new XMLParser().parseFromString(res.data);
        
      
        this.setState({ title: jsonDataFromXml.getElementsByTagName('title') }) }); 
    }
 
  render() {
	  
    return (
    <>
	 
      <div className="container p-5">
       <Table responsive="sm">
    <thead>
      <tr>
        <th>Lista de Libros</th>
      </tr>
    </thead>
		<tbody>
      	<tr>
        {(
      this.state.title.map((item, index) => {
        return (
          <td key={item.toString()} class="list-group-item">{item.value}</td>
        )
        }
      ))}
    	
 </tr>

		</tbody>
    	</Table>
    </div>
   

</>
)
};
}

export default Revisar;