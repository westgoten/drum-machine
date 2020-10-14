import React from 'react'
import DrumPad from './DrumPad'
import { connect } from 'react-redux'
import instrumentKits from '../utils/consts/instrumentKits'
import { NUMBER_OF_DRUM_PADS, DRUM_PADS_TEXTS } from '../utils/consts/drumPadGrid'
import '../style/DrumPadGrid.scss'

function DrumPadGrid(props) {
    const drumPadSounds = instrumentKits[props.currentInstrumentKit]
    const drumPads = []
    for (let i = 0; i < NUMBER_OF_DRUM_PADS; i++) {
        drumPads.push(<DrumPad key={i} text={DRUM_PADS_TEXTS[i]} sound={drumPadSounds[i]} />)
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
