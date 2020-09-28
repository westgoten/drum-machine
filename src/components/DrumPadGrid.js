import React from 'react'
import DrumPad from './DrumPad'
import '../style/DrumPadGrid.css'

const NUMBER_OF_DRUM_PADS = 9

function DrumPadGrid(props) {
    const drumPads = []
    for (let i = 0; i < NUMBER_OF_DRUM_PADS; i++) {
        drumPads.push(<DrumPad key={i} />)
    }

    return (
        <div className='drum-pad-grid'>
            {drumPads}
        </div>
    )
}

export default DrumPadGrid
