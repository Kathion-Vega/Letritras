import React from 'react';
import Upbar from './Upbar';
import Futer from './Futer';
import Animauno from './Animauno';

const Dashboard = (props) => {

    return (
        <div>
		<div>
           <Upbar></Upbar>
		   </div>
       
		<div>
		<Futer></Futer>
        </div>
		</div>
    )
    
}

export default Dashboard;