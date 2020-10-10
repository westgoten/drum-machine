import React, { useEffect, useRef, useState } from 'react'
import '../style/DrumPad.scss'

const DRUM_PAD_IDLE = 'drum-pad'
const DRUM_PAD_PRESSED = 'drum-pad-pressed'

function DrumPad(props) {
    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress)
        return () => document.removeEventListener('keydown', handleKeyPress)
    })

    function handleKeyPress(event) {
        if (event.key.toLowerCase() === props.text.toLowerCase() && !event.repeat)
            play()
    }

    const [drumPadClass, setDrumPadClass] = useState(DRUM_PAD_IDLE)
    const [timeoutId, setTimeoutId] = useState(-1)
    const audio = useRef(null)
    function play() {
        const audioNode = audio.current
        audioNode.currentTime = 0
        audioNode.play()
        animateDrumPad()
    }

    function animateDrumPad() {
        if (drumPadClass === DRUM_PAD_IDLE) {
            setDrumPadClass(DRUM_PAD_PRESSED)
            resetAnimation()
        } else {
            clearTimeout(timeoutId)
            resetAnimation()
        }
    }

    function resetAnimation() {
        const id = setTimeout(() => {
            setDrumPadClass(DRUM_PAD_IDLE)
        }, 120)
        setTimeoutId(id)
    }

    return (
        <div id='drum-pad' className={drumPadClass} onClick={play}>
            <span className='text'>{props.text}</span>
            <audio id={props.text} className='clip' ref={audio} src='https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'></audio>
        </div>
    )
}

export default DrumPad
