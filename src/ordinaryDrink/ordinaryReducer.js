const INITIAL_STATE = {
    drink: []
}

export default (state = INITIAL_STATE, action) =>{

    // console.log(action, 'payOrd')
    
    switch (action.type) {
        case 'ORDINARY_DRINK_REQUEST':
            return {
                ...state, 
                drink: action.payload
            }
    
        default:
            return state
    }
} 