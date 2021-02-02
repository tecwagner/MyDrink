import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Ordinary from '../ordinaryDrink/ordinaryDrink'
import Cocketeis from '../cocketeis/cocketeis'
import ListVodka from '../listIngredients/listIngredientsVodka'
import ListGin from '../listIngredients/listIngredientsGin'

export default props => (
    
    <Router history={hashHistory}>
        <Route path='/' />
        <Route path='/ordinaryDrink' component={Ordinary} exact/>
        <Route path='/cocketeis' component={Cocketeis} exact/>
        <Route path='/listCategoriesVodka' component={ListVodka} />
        <Route path='/listCategoriesGin' component={ListGin} />
        <Redirect from='*' to='/' />
    </Router>

)