import React from 'react'
import DrumPad from './DrumPad'
import { connect } from 'react-redux'
import instrumentKits from '../utils/consts/instrumentKits'
import '../style/DrumPadGrid.scss'

// TO DO: Move constants to another file
const NUMBER_OF_DRUM_PADS = 9
const DRUM_PADS_TEXTS = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']

function DrumPadGrid(props) {
    const DRUM_PADS_SOUNDS = instrumentKits[props.currentInstrumentKit]
    const drumPads = []
    for (let i = 0; i < NUMBER_OF_DRUM_PADS; i++) {
        drumPads.push(<DrumPad key={i} text={DRUM_PADS_TEXTS[i]} sound={DRUM_PADS_SOUNDS[i]} />)
    }

    return (
        <div className='drum-pad-grid'>
            {drumPads}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        currentInstrumentKit: state.currentInstrumentKit
    }
}

export default connect(mapStateToProps)(DrumPadGrid)
