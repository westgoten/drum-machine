import React, { useRef } from 'react'
import '../style/DrumPad.scss'

function DrumPad(props) {
    const audio = useRef(null)
    function play() {
        const audioNode = audio.current
        audioNode.load()
        audioNode.play()
    }

    return (
        <div id='drum-pad' className='drum-pad' onClick={play}>
            <span className='text'>{props.text}</span>
            <audio id={props.text} className='clip' ref={audio} src='https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'></audio>
        </div>
    )
}

export default DrumPad
