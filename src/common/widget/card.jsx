import React from 'react'
import '../template/custom.css'

export default function Card(props) {

    const cardStyle = {
        backgroundColor: props.color || '#C0C0C0',
        // borderColor: props.color || '#DEB887',
        // border: '1px solid',
        borderRadius: '10px'
    }

    return (
        <div className='Card' style={cardStyle} >
            <div className='Card' style={cardStyle}>
                <div className='Title'>
                    {props.strDrink}
                </div>
                <div className='Content'>
                    <a href=" ">
                    <img src={props.strDrinkThumb} height="210" width="210" />
                    </a>
                </div>
            </div>
        </div>
    )
}