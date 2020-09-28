import React from 'react'
import DrumPadGrid from './DrumPadGrid'
import Controls from './Controls'
import '../style/DrumMachine.css'

function DrumMachine(props) {
    return (
        <div id='drum-machine' className='drum-machine'>
            <DrumPadGrid />
            <Controls />
        </div>
    )
}

export default DrumMachine
