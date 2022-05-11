import React, { Component } from 'react';

class ErrorHandler extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasErrorOccured: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasErrorOccured: true
        }
    }

    render() {
        if (this.state.hasErrorOccured) {
            return <h1>An Error Occured, don't be panic, we are working on.....</h1>
        }
        return this.props.children
    }
}

export default ErrorHandler;