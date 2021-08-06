// Code CoordinatesButton Component Here

import React, { Component } from 'react'

class CoordinatesButton extends Component {

    handleCoords = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY] )
    }
    render() {
        return (
            <div>
                <button onClick={this.handleCoords}> Mouse Coordinates</button>
                
            </div>
        )
    }
}

export default CoordinatesButton