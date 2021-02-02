import axios from 'axios'
const BASE_URL = `https://www.thecocktaildb.com/api/json/v1/1`

export function getOrdinaryDrink() {

    const request = axios.get(`${BASE_URL}/filter.php?c=Ordinary_Drink`)

    // .then( result =>{
    //     console.log(result, 'action')
    //     return result.data
    // })
    // .catch( error =>{
    //     return error
    // })

    return {
        type: 'ORDINARY_DRINK_REQUEST',
        payload: request
    }

    
}