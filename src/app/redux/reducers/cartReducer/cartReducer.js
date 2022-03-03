const initaialState = {
    // cartIconNo : 9,
    menuItems : [],
    
}



const  cartReducer = (state = initaialState ,  action ) => 
{
    switch(action.type) 
    {
        case  "ADD_TO_CART" :   
        const newItem = action.payload
        const menuItems = state.menuItems
        menuItems.push(newItem)
        return {...state, menuItems: menuItems}

        default :
        return state
    }
    
};

export default cartReducer;