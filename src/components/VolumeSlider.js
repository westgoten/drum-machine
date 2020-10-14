import React from 'react'
import { connect } from 'react-redux'
import { changeVolume } from '../actions/creators'
import '../style/VolumeSlider.scss'

function VolumeSlider(props) {
    function handleVolumeChange(event) {
        const newVolume = Number(event.target.value)
        props.changeVolume(newVolume)
    }

    return (
        <div className='slider-container'>
            <input type='range' min='0' max='100' step='1' value={props.currentVolume} onChange={handleVolumeChange} disabled={!props.isPowerOn}></input>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        isPowerOn: state.isPowerOn,
        currentVolume: state.currentVolume
    }
}

const mapDispatchToProps = { changeVolume }

export default connect(mapStateToProps, mapDispatchToProps)(VolumeSlider)
