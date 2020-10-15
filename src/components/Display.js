import React from 'react'
import { connect } from 'react-redux'
import '../style/Display.scss'

function Display(props) {
    return (
        <p id='display' className='display'>{props.displayContent}</p>
    )
}

function mapStateToProps(state) {
    return {
        displayContent: state.displayContent
    }
}

export default connect(mapStateToProps)(Display)
