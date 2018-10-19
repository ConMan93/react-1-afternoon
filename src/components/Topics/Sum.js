import React, { Component } from 'react';

class Sum extends Component {

    constructor() {
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    updateFirstNumber(input) {
        let number1 = parseInt(input)
        this.setState({
            number1: number1
        })
    }

    updateSecondNumber(input) {
        let number2 = parseInt(input)
        this.setState({
            number2: number2
        })
    }

    addNumbers(val1, val2) {
        let sum = val1 + val2;
        this.setState({
            sum: sum
        })
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4> Sum </h4>
                <input className="inputLine" onChange={e => this.updateFirstNumber(e.target.value)}></input>
                <input className="inputLine" onChange={e => this.updateSecondNumber(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.addNumbers(this.state.number1, this.state.number2)}> Add </button>
                <span className="resultsBox"> Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum;