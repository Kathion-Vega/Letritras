import React from 'react'

// Router
import { Switch , Route } from "react-router-dom"

// Componentes
import Dashboard from "./Dashboard"
import Landingpage from "./Landingpage"


const Main = () => (
        <>
            <Switch>
                <Route exact path="/" component={ Landingpage }></Route>
                <Route path="/dashboard" component={ Dashboard }></Route>
            </Switch>
        </>
    )

export default Main