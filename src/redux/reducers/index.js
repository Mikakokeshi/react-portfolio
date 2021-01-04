import addStepReducer from './addStep'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
    step: addStepReducer
})

export default rootReducers; 