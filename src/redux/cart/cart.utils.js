export const addItemToCart = (cartItems, newCartItem) => {
 
    const existingCartItem = cartItems
                                .find(
                                  cartItem => cartItem.id === newCartItem.id
                                )

    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === newCartItem.id 
            ?  { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
    }

    return [...cartItems, { ...newCartItem, quantity: 1}]
}

export const decrementItem = (cartItems, targetItem) => {

    const existingCartItem = cartItems
                                .find(
                                  cartItem => cartItem.id === targetItem.id
                                )

    if (existingCartItem.quantity > 1) {
        return cartItems.map(cartItem => 
            cartItem.id === targetItem.id 
            ?  { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
    }

    return cartItems.filter(item => item.id !== targetItem.id)
}

export const incrementItem = (cartItems, targetItem) => {

    const stateItem = cartItems.find(item => item.id === targetItem.id)

    if(stateItem.quantity < 9) {
        return cartItems.map(item =>
                item.id === targetItem.id 
                ? { ...item, quantity: item.quantity + 1}
                : item
            )
    }

    return [...cartItems]

}