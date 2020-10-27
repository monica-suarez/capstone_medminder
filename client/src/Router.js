import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import PersonalInfo from './Components/PersonalInfo/PersonalInfo'


const Router = () =>{
    return(
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/personalinfo' component={PersonalInfo}/>
        </Switch>
    )
}

export default Router