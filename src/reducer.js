export const initialState = {
    basket: [],
    user: null
}

export function getTotalBasketPrice(basket){
    const subTotal=basket.reduce((totalPrice, item)=> totalPrice + item.price, 0);
    return subTotal;
}

export function reducer(state, action){
    switch(action.type){
        case "ADD_TO_BASKET":
            return {...state, basket: [...state.basket, action.payload]}
        case "REMOVE_FROM_BASKET":

           const remainingItem = state.basket.filter((item)=> item.id !== action.payload);
           
           return {...state, basket: remainingItem}
        case "MODIFY_USER":
            return {...state, user: action.payload}
        default:
            return state;
    }
}