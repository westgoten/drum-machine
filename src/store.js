import { configureStore } from '@reduxjs/toolkit'
import { drumMachineReducer } from './reducers/reducers'

const store = configureStore({ reducer: drumMachineReducer })

export default store
