const INITIAL_STATE = {
    nameImages: ''    
}

export default (state = INITIAL_STATE, action) => {   

    switch (action.type) {
        case 'IMAGES_REQUEST':
            return {
                ...state, 
                nameImages: action.payload
            }    
        default:
            return state
    }
}