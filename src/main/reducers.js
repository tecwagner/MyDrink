import { combineReducers } from 'redux';

import CocketeisReducer from '../cocketeis/cocketeisReducer'
// import OrdinaryDrinkReducer from '../ordinaryDrink/ordinaryReducer'

//resultado de todos os reducers da app
const rootReducer = combineReducers({


    cocketeis: CocketeisReducer
    // ordinary: OrdinaryDrinkReducer

})

export default rootReducer