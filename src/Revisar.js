import React, {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';


export default function Revisar() {
  
  //usamos el estado establecido gracias a hook
  let [data, setData] = useState([]);
  const [select, setselect] = useState('');

  //nuestro objeto vocabulario
  var dataa = [{ id: 1, name: 'a', word: 'anillo', gif: './gif/anillo.gif' }, 
  { id: 2, name: 'a', word: 'abeja', gif: './gif/abeja.gif' }, 
  { id: 3, name: 'e', word: 'elefante', gif: './gif/elefante.gif' }, 
  { id: 4, name: 'i', word: 'iglu', gif: './gif/iglu.gif' }, 
  { id: 5, name: 'o', word: 'oso', gif: './gif/oso.gif' }, 
  { id: 6, name: 'u', word: 'uno', gif: './gif/uno.gif' }];

  //nuestro evento donde estipulamos el estado de cambio para buscar elementos den la tabla
  function handleChange (e){

    setselect(e.target.value);
   
  };
  
 
  //hooks llama a renderizar la seleccion de la vocal 
  useEffect(() => {
    //Haciendo el filtro del buscador 
    data = dataa.filter(dataa => dataa.name == select);

    //set state variable data after filteration
    setData(data);
    }, [select])


  return (
	  <>
	
    <div className="app container p-5">
      <h1 className="text-center mb-5">Lista de Vocabulario de las Vocales</h1>
      <div class="mb-3">
         <label class="form-label">Elige la letra que quieres repasara</label>
           <select id="state"
             onChange={handleChange} class="form-select mb-5">
                <option value="select Grade">  Elige una vocal  </option>
                <option value="a">a</option>
                <option value="e">e</option>
               <option value="i">i</option>
                <option value="o">o</option>
               <option value="u">u</option>
                
               
            </select>
      </div>
      <Table className="table table-hover table-bordered p-5">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Vocal</th>
            <th scope="col">Palabra</th>
            <th scope="col">Imagen</th>
          </tr>
        </thead>
        <tbody>
        { // LLamando al estado de la variable data para hacer la filtracion de busqueda
        data.map(function({id, name, word, gif}){
         
              return (
                <tr>
               
                <td>{id}</td>
                <td>{name}</td>
                <td>{word}</td>
                <td><Image src={gif} /></td>
              </tr>
                );
            })}

            
            </tbody>
            </Table>
            
       </div>

</>
  );
}