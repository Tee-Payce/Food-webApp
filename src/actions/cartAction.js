

export const addToCart= (meal,quantity,combo)=>(dispatch, getState)=>{
    var cartItem = {

        name : meal.name,
        _id : meal._id,
        image : meal.image,
        combo : combo,
        quantity : quantity,
        prices : meal.prices,
        price : meal.prices[0][combo]*quantity

    }
    
    const cartItems = getState().cartReducer.cartItems

    dispatch({type:'ADD_TO_CART', payload : cartItem})
    localStorage.setItem('cartItems', JSON.stringify(cartItems))

  }