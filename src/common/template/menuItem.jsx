import React from 'react'

export default props => (
    //Lista de link
    <li> 
        <a href={props.path}>
            {/* Uma maneira de facilitar a manutenção é passando a propriedade do icone e propriedade do texto*/}
            <i className={`fa fa-${props.icon}`}></i> {props.label}
        </a>
    </li>
)