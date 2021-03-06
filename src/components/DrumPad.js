import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { changeSound } from '../actions/creators'
import { DRUM_PAD_IDLE, DRUM_PAD_ACTIVE, DRUM_PAD_INACTIVE } from '../utils/consts/drumPad'
import '../style/DrumPad.scss'

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
        if (props.isPowerOn) {
            props.changeSound(props.sound.name)
            const audioNode = audio.current
            audioNode.currentTime = 0
            audioNode.play()
        }
        animateDrumPad()
    }

    function animateDrumPad() {
        if (drumPadClass === DRUM_PAD_IDLE) {
            if (props.isPowerOn)
                setDrumPadClass(DRUM_PAD_ACTIVE)
            else
                setDrumPadClass(DRUM_PAD_INACTIVE)
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

    useEffect(() => {
        const audioNode = audio.current
        audioNode.volume = props.currentVolume / 100
        if (!props.isPowerOn)
            audioNode.pause()
    })

    return (
        <div id='drum-pad' className={drumPadClass} onClick={play}>
            <span className='text'>{props.text}</span>
            <audio id={props.text} className='clip' ref={audio} src={props.sound.src}></audio>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        isPowerOn: state.isPowerOn,
        currentVolume: state.currentVolume
    }
}

const mapDispatchToProps = { changeSound }

export default connect(mapStateToProps, mapDispatchToProps)(DrumPad)
