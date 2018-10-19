import React, { Component } from 'react';

class EvenAndOdd extends Component {

    constructor() {
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleUserInput(val) {
        this.setState({
            userInput: val
        })
        // console.log(val)
    }

    solveToyProblem(input) {
        let splitInput = input.split(',')

        let splitInt = splitInput.map(numStr => parseInt(numStr))

        let evenArray = this.state.evenArray.slice()
        let oddArray = this.state.oddArray.slice()
        
        for (let i = 0; i < splitInt.length; i++) {
            if (splitInt[i] % 2 === 0) {
                evenArray.push(splitInt[i])
            }
            else {
                oddArray.push(splitInt[i])
            }
        }

        this.setState({
            evenArray: evenArray,
            oddArray: oddArray
        })

    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">

                <h4>Evens and Odds</h4>

                <input className="inputLine" onChange={e => this.handleUserInput(e.target.value)} value={this.state.userInput}></input>

                <button className="confirmationButton" onClick={() => this.solveToyProblem(this.state.userInput)}>Split</button>

                <span className="resultsBox">Evens: { JSON.stringify(this.state.evenArray) }</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>

            </div>
        )
    }
}

export default EvenAndOdd;