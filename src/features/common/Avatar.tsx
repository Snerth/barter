import React from 'react'
import './Avatar.css'
import avatar1 from '../common/assets/avatar1.jpeg';

export const Avatar: React.FC<any> = () => {
    return (
        <div className='avatar-circle'>
            <img className='avatar-image' src={avatar1} />
        </div>
    )
}