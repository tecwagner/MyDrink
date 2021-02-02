import axios from 'axios'
const URL_IMG = `https://www.thecocktaildb.com/images/media/drink`

export function getMediaImagen() {
    const request = axios.get(`${URL_IMG}/${nameImages}.jpg/preview`)

    .then(resultado => {
        return resultado
    })
    .catch(error => {
        return error
    })

    return {
        type: 'IMG_REQUEST',
        payload: request
    }
}