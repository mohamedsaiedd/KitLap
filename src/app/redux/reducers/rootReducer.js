
import { combineReducers } from 'redux'
import cartReducer from './cartReducer/cartReducer'
import notificationReducer from './notificationReducer/notificationReducer'
  
const rootReducer =  combineReducers({
    notificationReducer,
    cartReducer
}
)

export default rootReducer;