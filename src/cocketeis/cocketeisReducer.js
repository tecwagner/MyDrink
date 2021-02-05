const INITIAL_STATE = {
    strDrink: '',
    drinks: [],
    loading: true
    // drink Selecionado exibir na modal
}

export default (state = INITIAL_STATE, action) => {

    

    switch (action.type) {
        case 'COCKETEIS_REQUEST':
            return {
                ...state,
                drinks: action.payload.drinks
            }
        case 'SEARCH':
            return {
                ...state,
                drinks: action.payload,
                loading: false
            }
        case 'DESCRIPTION_CHANGED':
            console.log( 'actionRedu', action.payload)
            return { 
                ...state,
                strDrink: action.payload
            }
        default:
            return state
    }
}