import React, { Component } from 'react';

class Palindrome extends Component {

    constructor() {
        super();

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleUserInput(val) {
        this.setState({
            userInput: val
        })
    }

    isPalindrome(input) {
        let split = input.split('')
        let reverse = split.reverse()
        let reverseString = reverse.join('')


        if (reverseString === input) {
            this.setState({
                palindrome: 'True',
                userInput: ''
            })
        }
        else if (reverseString !== input) {
            this.setState({
                palindrome: 'False',
            })
        }
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Palindrome </h4>
                <input className="inputLine" onChange={e => this.handleUserInput(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.isPalindrome(this.state.userInput)}> Check </button>
                <span className="resultsBox"> Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome;