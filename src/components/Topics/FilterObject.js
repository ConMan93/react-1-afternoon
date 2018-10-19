import React, { Component } from 'react';

class FilterObject extends Component {

    constructor() {
        super();

        this.state = {
            unfilteredArray: [
                {
                    name: 'Connor Hoffman',
                    age: 24,
                    title: 'Master',
                    skill: 9000
                },
                {
                    name: 'Old Mc Muppet',
                    age: 69,
                    title: 'Had a farm'
                },
                {
                    name: 'Dylan Harper',
                    age: 25,
                    title: 'Mega Muppet',
                    hairColor: 'brown'
                }
            ],
            filteredArray: [],
            userInput: ''
        }
    }

    handleUserInput(val) {
        this.setState({
            userInput: val
        })
    }

    solveObjectFilter (input) {
        let unfilteredArray = this.state.unfilteredArray.slice();

        let filteredArray = unfilteredArray.filter(obj => obj.hasOwnProperty(input))

        this.setState({
            filteredArray: filteredArray
        })

    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText"> Original: { JSON.stringify(this.state.unfilteredArray, null, 10) }</span>
                <input className="inputLine" onChange={e => this.handleUserInput(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.solveObjectFilter(this.state.userInput)}> Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterObject;