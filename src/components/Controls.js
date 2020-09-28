import React from 'react'
import PowerSwitch from './PowerSwitch'
import InstrumentSwitch from './InstrumentSwitch'
import Display from './Display'
import VolumeSlider from './VolumeSlider'
import '../style/Controls.css'

function Controls(props) {
    return (
        <div className='controls'>
            <PowerSwitch />
            <Display />
            <VolumeSlider />
            <InstrumentSwitch />
        </div>
    )
}

export default Controls