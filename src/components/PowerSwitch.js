import React from 'react'
import '../style/PowerSwitch.scss'

function PowerSwitch(props) {
    return (
        <div className='switch-container'>
            <span className='switch-label'>Power</span>
            <label className='switch-switch'>
                <input type='checkbox' className='switch-input'></input>
                <span className='switch-slider'></span>
            </label>
        </div>
    )
}

export default PowerSwitch
