import React, { Component } from 'react';

class FilterString extends Component {

    constructor() {
        super();

        this.state = {
            unfilteredArray: [
                'John', 'Michael', 'Caine',
                'Jorge', 'George', 'Gregory',
                'Jeffrey', 'Connor', 'Kristi'
            ],
            userInput: '',
            filteredArray: []
        }
    }

    handleUserInput(val) {
        this.setState({
            userInput: val
        })
    }

    filterString(input) {
        let unfilteredArray = this.state.unfilteredArray

        let filteredArray = unfilteredArray.filter(name => name.includes(input))

        this.setState({
            filteredArray: filteredArray
        })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Filter String </h4>
                <span className="puzzleText"> Names: {JSON.stringify(this.state.unfilteredArray, null, 10) }</span>
                <input className="inputLine" onChange={e => this.handleUserInput(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.filterString(this.state.userInput)}> Filter </button>
                <span className="resultsBox filterStringRB">Filtered Names: { JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterString;