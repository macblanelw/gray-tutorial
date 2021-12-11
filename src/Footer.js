import React from 'react'

const Footer = () => {

    const today = new Date();

    return (
        <div>
            <p>Today is: { today.toDateString() }</p>
        </div>
    )
}

export default Footer
