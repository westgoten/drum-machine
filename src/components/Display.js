import React from 'react'
import { connect } from 'react-redux'
import '../style/Display.scss'

function Display(props) {
    return (
        <p id='display' className='display'>Display</p>
    )
}

function mapStateToProps(state) {
    return Object.assign({}, state)
}

export default connect(mapStateToProps)(Display)
