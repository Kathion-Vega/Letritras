import React from 'react';

import Login from './Login';
import Barrainicio from './Barrainicio';
import Futer from './Futer';
const Landingpage  = () => {

    return(

        <div>
           <div>
                <Barrainicio></Barrainicio>
           </div>
           <div>
                <Login></Login>
           </div>
           <div>
               <Futer></Futer>
           </div>
        </div>
        
    )

}

export default Landingpage;
