import React from 'react'
import '../style/DrumPad.scss'

function DrumPad(props) {
    return (
        <div id='drum-pad' className='drum-pad'>
            <span className='text'>{props.text}</span>
            <audio id={props.text} className='clip' src=''></audio>
        </div>
    )
}

export default DrumPad