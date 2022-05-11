import React, { Component } from 'react';

const AddCounter = (ChildComponent) => {
    class EnhancedComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            }
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
            return <ChildComponent count={this.state.count} incrementClickCount={this.incrementClickCount} />
        }
    }
    return EnhancedComponent
}

export default AddCounter;