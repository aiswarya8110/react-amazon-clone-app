import React from 'react';
import './Product.css';
import { useContext } from 'react';
import { ShoppingContext } from './ContextProvider';

function Product({ id, title, image, price, rating }){
    const { dispatch }  = useContext(ShoppingContext);

    function addToBasket(id, title, image, price, rating){
        dispatch({type: "ADD_TO_BASKET",
        payload: {id: id, 
        title: title, 
        image: image, 
        price: price, 
        rating: rating}})
    }

    return (
    <div className="product">
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>£</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {new Array(rating)
                .fill('⭐', 0, rating)
                .map((star)=>(
                    <p>{star}</p>
                ))
                }
            </div>
        </div>  
        <img src={image} alt=""/>
        <button onClick={()=>addToBasket(id, title, image, price, rating)}>Add to basket</button>
    </div>
    )
}

export default Product;


function createElement(type, props, children){
    return {
        type: type,
        props: {...props, children: props.children ? props.children : children}
    }
}