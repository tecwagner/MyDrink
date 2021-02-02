import axios from 'axios'
const BASE_URL = `https://www.thecocktaildb.com/api/json/v1/1`

export function getCocketeisDrink() {

    const request = axios.get(`${BASE_URL}/filter.php?c=Cocktail`)

        .then(resultado => {
            return resultado.data
        })
        .catch(error => {
            return error
        })

    //retorna um objeto    
    return {
        type: 'COCKETEIS_REQUEST',
        payload: request
    }
}