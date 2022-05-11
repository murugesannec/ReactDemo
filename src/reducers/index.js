import { reducer } from "./library";
import { bookCounter } from "./bookCounter";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    library: reducer,
    bookCounter
})

export default rootReducers