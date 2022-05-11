import React, { Component } from 'react';
import { Consumer } from './RContext';
class C3 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Consumer>
                {
                    (c) => {
                        return (c)
                    }
                }
            </Consumer>);
    }
}
export default C3;