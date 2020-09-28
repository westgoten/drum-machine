import React from 'react'
import '../style/switch.css'

function PowerSwitch(props) {
    return (
        <div className='container'>
            <span className='label'>Power</span>
            <label className='switch'>
                <input type='checkbox' className='input'></input>
                <span className='slider'></span>
            </label>
        </div>
    )
}

export default PowerSwitch
