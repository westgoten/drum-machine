import React from 'react'
import '../style/VolumeSlider.scss'

function VolumeSlider(props) {
    return (
        <div className='slider-container'>
            <input type='range' min='0' max='100' step='1'></input>
        </div>
    )
}

export default VolumeSlider
