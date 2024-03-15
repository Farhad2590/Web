const getStorageCart = () =>{
    const storedCardString = localStorage.getItem('cart')
    if(storedCardString){
        return JSON.parse(storedCardString)
    }
    return [];
}

const saveCartTools = cart =>{
    const cartStringified =JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
    
}

const addTools = id =>{
    const cart = getStorageCart();
    cart.push(id);
    saveCartTools(cart)
}
export {addTools , getStorageCart}