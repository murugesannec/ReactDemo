import React, { Component, PureComponent } from 'react';

class GreetPureComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.props = props
        this.state = {
            msg: "Click button to say hello"
        }
        console.log('Inside constructor')
    }

    render() {
        console.log('Inside render')
        return (<><h1>This is a Pure Component {this.state.msg}</h1></>);
    }
}

export default GreetPureComponent;