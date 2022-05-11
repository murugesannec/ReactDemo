import React, { Component } from 'react';
import C2 from './C2';
class C1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<C2 />);
    }
}

export default C1;