import React from 'react'
import DrumPadGrid from './DrumPadGrid'
import Controls from './Controls'

function DrumMachine(props) {
    return (
        <div id='drum-machine'>
            <DrumPadGrid />
            <Controls />
        </div>
    )
}

export default DrumMachine
