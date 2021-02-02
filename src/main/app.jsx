import '../common/template/dependecies'
import React from 'react'

import Headers from '../common/template/header'
import Sidebar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import Routes from './routes'


export default props => (
    <div className='wrapper'>
        <Headers />
        <Sidebar />
        <div className='content-wrapper'>
            <Routes />
        </div>
        <Footer />
    </div>
)