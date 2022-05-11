
import React, { Component } from 'react';
import GreetComponent from './GreetComponent';
import GreetPureComponent from './GreetPureComponent';
import GreetPureFnComp from './GreetPureFnComp';

class PureComponentParent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Credo Systemz'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Credo Systemz'
            })
        }, 1000);
    }
    render() {
        return (<>
            {/* <GreetPureComponent name="Murugesan" course='ReactJS' msg="Click button to say hello from props" /> */}
            <GreetPureFnComp name="Murugesan" course='ReactJS' />
            {/* <GreetComponent name="Murugesan" course='ReactJS' msg="Click button to say hello from props" /> */}
        </>)
    }
}
export default PureComponentParent;