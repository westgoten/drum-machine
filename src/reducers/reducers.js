import { createReducer } from '@reduxjs/toolkit'
import * as types from '../actions/types'

const initialState = {
    isPowerOn: true,
    currentSound: '',
    currentVolume: 50,
    currentInstrumentKit: ''
}

// TO DO: Break this reducer down to many small reducers
export const drumMachineReducer = createReducer(initialState, {
    [types.CHANGE_SOUND]: (state, action) => { state.currentSound = action.payload },
    [types.CHANGE_VOLUME]: (state, action) => { state.currentVolume = action.payload },
    [types.CHANGE_INSTRUMENT_KIT]: (state, action) => { state.currentInstrumentKit = action.payload },
    [types.TURN_POWER_ON_OFF]: (state, action) => { state.isPowerOn = action.payload }
}, [], (state) => Object.assign({}, state))
