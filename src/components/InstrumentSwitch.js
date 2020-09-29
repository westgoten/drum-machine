import React from 'react'
import '../style/InstrumentSwitch.scss'

function InstrumentSwitch(props) {
    return (
        <div className='switch-container'>
            <span className='switch-label'>Instrument</span>
            <label className='switch-switch'>
                <input type='checkbox' className='switch-input'></input>
                <span className='instrument-slider'></span>
            </label>
        </div>
    )
}

export default InstrumentSwitch
