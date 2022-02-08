import { combineReducers, createStore } from 'redux'
import profileReduser from './profile_reduser'
import dialogsReduser from './dialogs_reduser'

let redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser
})

let store = createStore(redusers)



export default store