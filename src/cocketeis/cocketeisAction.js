import axios from 'axios'
const BASE_URL = `https://www.thecocktaildb.com/api/json/v1/1/`

export const getCocketeisDrink = () => {

    const request = axios.get(`${BASE_URL}filter.php?c=Cocktail`)

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

export const changeStrDrink = event => (
    {
        type: 'DESCRIPTION_CHANGED',
        payload: event.target.value
    })

export const getSearch = (strDrink) => {
    const request = axios.get(`${BASE_URL}search.php?s=` + strDrink)
        .then(resp => {
            return resp.data.drinks
        })
        .catch(error => {
            return error
        })

    return {
        type: 'SEARCH',
        payload: request
    }
}