// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {

    constructor(){
        super()

    }

    handleFocus = () => {
        console.log('Good!')
    }

    handleBlur = () => {
        console.log("Hey! Eyes on me!")

    }

    render() {
        return (
            <button value="Button" onFocus={this.handleFocus} onBlur={this.handleBlur}>
                Eyes on me, please!
            </button>
        )
    }
}

export default EyesOnMe