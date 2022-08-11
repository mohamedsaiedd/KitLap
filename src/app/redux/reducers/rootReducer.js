
import { combineReducers } from 'redux'
import cartReducer from './cartReducer/cartReducer'
import notificationReducer from './notificationReducer/notificationReducer'
// import priceReducer from './priceReducer/priceReducer'
// import cartPageReducer from './cartPageReducer/cartPageReducer'
  
const rootReducer =  combineReducers({
    notificationReducer,
    cartReducer,
    // priceReducer,
    // cartPageReducer, 
}
)

export default rootReducer;