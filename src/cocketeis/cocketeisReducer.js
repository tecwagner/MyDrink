const INITIAL_STATE = {
    drinks: []    
}

export default (state = INITIAL_STATE, action) => {    

    switch (action.type) {
        case 'COCKETEIS_DRINK_REQUEST':
            return {
                ...state, 
                drinks: action.payload
            }    
        default:
            return state
    }
}