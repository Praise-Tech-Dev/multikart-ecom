
const addToCart = (item) => {
    let newItems; 
    let prevItems = localStorage.getItem("cart");
    if(prevItems){
        newItems = JSON.parse(prevItems);
        newItems.push(item);
    }else{
        newItems = [item];
    }
    
    localStorage.setItem("cart", JSON.stringify(newItems));
}

const getCart = () => {
    const cart = localStorage.getItem("cart");
    if (cart) {
        return JSON.parse(cart)
    } else {
        return []
    }
    // return cart ? JSON.parse(cart) : [];
}

export {
    getCart,
    addToCart
}