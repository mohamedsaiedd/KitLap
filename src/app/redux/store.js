import React from 'react'
import { createStore  } from "redux"
import rootReducer from "./reducers/rootReducer"
import App from "../App"


const store = createStore(rootReducer);



export default store;