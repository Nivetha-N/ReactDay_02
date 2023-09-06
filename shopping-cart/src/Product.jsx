import React, { useState } from 'react'

function Product(props) {

    const [flag,setFlag]=useState(true)

    const addProduct=()=>{
        setFlag(false)
    }

    const removeProduct=()=>{
        setFlag(true)
    }


    const addItem=()=>{
        props.func(props.count + 1)
      }
    
      const removeItem=()=>{
        props.func(props.count - 1 )
      }

    return (
        <div style={{ width: '33%' }}>
            <div className='product-item'>
                <img src={props.url} width="70%"></img>
                <p>{props.name} | {props.category}</p>
                <p>{props.seller}</p>
                <p>Rs. {props.price} /-</p>
                {flag ? <button onClick={()=>{addProduct(); addItem();}}>Add to Cart</button> : <button onClick={()=>{removeProduct(); removeItem();}}>Remove</button>}
                {}
            </div>

        </div>
    )
}

export default Product