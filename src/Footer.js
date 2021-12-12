import React from 'react'

const Footer = () => {

    const today = new Date();

    return (
        <footer>
            <p>Today is: { today.toDateString() }</p>
        </footer>
    )
}

export default Footer
