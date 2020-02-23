import { combineReducers, createStore, applyMiddleware } from "redux"
import { sloganReducer } from "./slogan/reducer"
import { composeWithDevTools } from "redux-devtools-extension"

import thunk from "redux-thunk"

const rootReducer = combineReducers({
  slogan: sloganReducer
})

export type RootState = ReturnType<typeof rootReducer>

const composeEnhancers = composeWithDevTools({})
export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)
