import React from 'react'
import DrumPad from './DrumPad'
import '../style/DrumPadGrid.scss'

// TO DO: Move constants to another file
const NUMBER_OF_DRUM_PADS = 9
const DRUM_PADS_TEXT = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']

function DrumPadGrid(props) {
    const drumPads = []
    for (let i = 0; i < NUMBER_OF_DRUM_PADS; i++) {
        drumPads.push(<DrumPad key={i} text={DRUM_PADS_TEXT[i]} />)
    }

    return (
        <div className='drum-pad-grid'>
            {drumPads}
        </div>
    )
}

export default DrumPadGrid
