import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        {/* <MenuItem  path='#\Odinary' label='Bebidas Comum' icon='beer' />         */}
        <MenuItem  path='#\cocketeis' label='Coketeis' icon='glass' />
        <MenuTree label='Lista de Ingredientes' icon='check-square-o'>
            <MenuItem path='#listCategoriesVodka' label='Vodka' />
            <MenuItem path='#listCategoriesGin' label='Gin' />
        </MenuTree>
    </ul>
)