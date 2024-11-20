export function addToCart(dataToAdd, currentCart, updateCart){
    let product = currentCart.find((item) => item.product_id === dataToAdd.product_id) || {...dataToAdd, quantity:0};
    product.quantity += 1;
    updateCart([...currentCart.filter((item) => item.product_id !== product.product_id), product]);
}

export function removeFromCart(dataToRemove, currentCart, updateCart) {
    let updatedCart;
    const product = currentCart.find((item) => item.product_id === dataToRemove.product_id);
    
    if (product.quantity > 1) {
        updatedCart = currentCart.map((item) => 
            item.product_id === product.product_id 
                ? {...item, quantity: item.quantity - 1}
                : item
        );
    } else {
        updatedCart = currentCart.filter((item) => item.product_id !== product.product_id);
    }
    
    updateCart(updatedCart);
}