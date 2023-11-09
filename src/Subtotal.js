import React, { useContext } from 'react';
import CurrencyFormat from 'react-currency-format';
import { ShoppingContext } from './ContextProvider';
import './Subtotal.css';
import { getTotalBasketPrice } from './reducer';

function Subtotal(){
    const { state } = useContext(ShoppingContext);
    const { basket } = state;

    return <div className="subtotal">
        <CurrencyFormat
        renderText={(value)=>(
        <>
            <p>
                Subtotal {basket.length} items: <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
                    <input type="checkbox" /> This order contains gift
            </small>
        </>
        )
        } 
        decimalScale={2}
        value={getTotalBasketPrice(basket)}
        displayType="text"
        prefix="£"
        thousandSeparator={true}/>
        <button>Proceed to Checkout</button>
    </div>
}

export default Subtotal;