import React, { Component } from 'react';

class ButtonClicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        document.title = `You have clicked the button ${this.state.count} times`
    }
    componentDidUpdate() {
        document.title = `You have clicked the button ${this.state.count} times`
    }
    incrementClickCount = () => {
        this.setState(prevState => {
            console.log('prevState: ' + JSON.stringify(prevState))
            return {
                count: prevState.count + 1
            }
        })
    }
    render() {
        return (
            <>
                <button onClick={this.incrementClickCount}>Clicked times: {this.state.count}</button>
            </>
        );
    }
}

export default ButtonClicker;