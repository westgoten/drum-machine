import * as types from './types'
import { createAction } from '@reduxjs/toolkit'

export const changeSound = createAction(types.CHANGE_SOUND)
export const changeVolume = createAction(types.CHANGE_VOLUME)
export const changeInstrumentKit = createAction(types.CHANGE_INSTRUMENT_KIT)
export const turnPowerOnOff = createAction(types.TURN_POWER_ON_OFF)
