import React from 'react'
import { connect } from 'react-redux'
import { changeInstrumentKit } from '../actions/creators'
import { HEATER_KIT, SMOOTH_PIANO_KIT } from '../utils/consts/instrumentKits'
import '../style/InstrumentSwitch.scss'

function InstrumentSwitch(props) {
    function handleSwitch(event) {
        event.target.checked 
            ? props.changeInstrumentKit(SMOOTH_PIANO_KIT) 
            : props.changeInstrumentKit(HEATER_KIT)
    }

    function isChecked() {
        return props.currentInstrumentKit === SMOOTH_PIANO_KIT 
    }

    return (
        <div className='switch-container'>
            <span className='switch-label'>Instrument</span>
            <label className='switch-switch'>
                <input type='checkbox' className='switch-input' checked={isChecked()} onChange={handleSwitch} disabled={!props.isPowerOn}></input>
                <span className='instrument-slider'></span>
            </label>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        isPowerOn: state.isPowerOn,
        currentInstrumentKit: state.currentInstrumentKit
    }
}

const mapDispatchToProps = { changeInstrumentKit }

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentSwitch)
