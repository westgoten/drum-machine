import React from 'react'
import { connect } from 'react-redux'
import { turnPowerOnOff } from '../actions/creators'
import '../style/PowerSwitch.scss'

function PowerSwitch(props) {
    function handleSwitch(event) {
        props.turnPowerOnOff(event.target.checked)
    }

    return (
        <div className='power-container'>
            <span className='switch-label'>Power</span>
            <label className='switch-switch'>
                <input type='checkbox' className='switch-input' checked={props.isPowerOn} onChange={handleSwitch}></input>
                <span className='switch-slider'></span>
            </label>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        isPowerOn: state.isPowerOn
    }
}

const mapDispatchToProps = { turnPowerOnOff }

export default connect(mapStateToProps, mapDispatchToProps)(PowerSwitch)
