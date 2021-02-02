import React from 'react'
import '../template/custom.css'

export default function Card(props) {

    const cardStyle = {
        backgroundColor: props.color || '#66788A',
        borderColor: props.color || '#D4EEE2'
    }

    return (
        <div className='Card' style={cardStyle} >
            <div className='Card' style={cardStyle}>
                <div className='Title'>
                    {props.strDrink}                    
                </div>
                <div className='Content'>
                    {props.strDrinkThumb}
                </div>
            </div>
        </div>
    )
}