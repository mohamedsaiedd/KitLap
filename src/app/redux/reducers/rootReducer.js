
import { combineReducers } from 'redux'
import cartReducer from './cartReducer/cartReducer'
import notificationReducer from './notificationReducer/notificationReducer'
// import cartPageReducer from './cartPageReducer/cartPageReducer'
  
const rootReducer =  combineReducers({
    notificationReducer,
    cartReducer,
    // cartPageReducer, 
}
)

export default rootReducer;