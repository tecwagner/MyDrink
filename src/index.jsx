import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'

//Redux integração
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './main/reducers'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

//applyMiddleware(promise) = Para o ciclo e resolve a promise 
//applyMiddleware(promise) = Retorna um função cujo o parametro, é createStore e retorna uma função cujo o valor é o reducer / resultado disso tudo é a 'store'
const store = applyMiddleware(promise, multi, thunk)(createStore)(reducers)

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
document.getElementById('app'))