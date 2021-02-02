import React from 'react'

export default props => (
    <li className='treeview'>
        <a href>
            <i className={`fa fa-${props.icon}`}></i> {props.label}    
            <i className='fa fa-angle-left pull-right'></i>        
        </a>
        <li className='treeview-menu'>
            {props.children}
        </li>
    </li>
)