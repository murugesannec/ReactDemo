import { createStore } from 'redux'
import { reducer } from './Myreducer'
import rootReducers from './reducers'

const myStore = createStore(rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default myStore