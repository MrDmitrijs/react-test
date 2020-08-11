import React from 'react';

const userInput = ({setUserName}) => {
    return (
        <input
            type='text'
            onChange={(el) => {
                setUserName(el.target.value)
            }}/>
    )
}

export default userInput