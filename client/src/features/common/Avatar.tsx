import React from 'react'
import './Avatar.css'

export const Avatar: React.FC<any> = ({picture}) => {
    return (
        <div className='avatar-circle'>
            <img src={picture} />
        </div>
    )
}