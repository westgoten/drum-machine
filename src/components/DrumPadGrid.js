import React from 'react'
import DrumPad from './DrumPad'

const NUMBER_OF_DRUM_PADS = 9

function DrumPadGrid(props) {
    const drumPads = []
    for (let i = 0; i < NUMBER_OF_DRUM_PADS; i++) {
        drumPads.push(<DrumPad key={i} />)
    }

    return (
        <div id='drum-pad-grid'>
            {drumPads}
        </div>
    )
}

export default DrumPadGrid
