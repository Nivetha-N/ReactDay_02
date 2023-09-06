import React from 'react'

function Header(props) {
    return (
        <div className='flex shopping-app'>
            <div><h2>Shopping Cart App</h2></div>
            <div>Cart
                <sup>{props.count}</sup>

            </div>
        </div>
    )
}

export default Header