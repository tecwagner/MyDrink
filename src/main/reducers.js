import { combineReducers } from 'redux';

import OrdinaryDrinkReducer from '../ordinaryDrink/ordinaryReducer';
import CocketeisReducer from '../cocketeis/cocketeisReducer'

const rootReducer = combineReducers({

    ordinaryDrink: OrdinaryDrinkReducer,
    cocketeis: CocketeisReducer

})

export default rootReducer