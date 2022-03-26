const initaialState = {
    // cartIconNo : 9,
    menuItems: JSON.parse(localStorage.getItem("menuItems")) || [],
    menuAccItems: JSON.parse(localStorage.getItem("menuAccItems")) || [],


}


const cartReducer = (state = initaialState, action) => {

    const newItem = action.payload
    let menuItems = state.menuItems
    let menuAccItems = state.menuAccItems
    let exist = false
    switch (action.type) {


        case "ADD_TO_CART":

            menuAccItems.push(newItem)
            state.menuItems.forEach(element => {
                if (element.id === newItem.id) {
                    element.duplication++;
                    exist = true;
                }
            })
            if (!exist) {
                newItem.duplication = 1

                menuItems.push(newItem)

                localStorage.setItem("menuItems", JSON.stringify(menuItems));
                localStorage.setItem("menuAccItems", JSON.stringify(menuAccItems));
                return { ...state, menuItems: menuItems, menuAccItems: menuAccItems }
            }
            else {
                console.log("The element is already exist")
                console.log("menuAccItems", menuAccItems)
                console.log("menuItems", menuItems)

                localStorage.setItem("menuAccItems", JSON.stringify(menuAccItems));
                localStorage.setItem("menuItems", JSON.stringify(menuItems));
                return { ...state, menuAccItems: menuAccItems }
            }

        case "REMOVE_FROM_CART":
            ////////////////////////////////////////////////////////
            // The problem has been solved. Don't remove this code
            // I have learned  JS
            ////////////////////////////////////////////////////////

            let forceToAdd = false
            let menuFilterItems = state.menuAccItems.filter(element => {
                if(element.id !== newItem.id || forceToAdd) return true
                else forceToAdd = true
                return false
            }) 

            let menuItemsCart = state.menuItems.map(item => {
                if(item.id === newItem.id) item.duplication--
                if(!item.duplication) {
                    console.log("zero")
                    return null}
                return item
            }).filter(item => !!item)

            localStorage.setItem("menuAccItems", JSON.stringify(menuFilterItems));
            localStorage.setItem("menuItems", JSON.stringify(menuItemsCart));
            return {...state , menuAccItems : menuFilterItems , menuItems : menuItemsCart} 

        default:
            return state
    }

};

export default cartReducer;