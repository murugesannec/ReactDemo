import React, { Component, PureComponent } from 'react';

class GreetComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.props = props
        this.state = {
            msg: "Click button to say hello"
        }
        this.changeMsg = this.changeMsg.bind(this)
        console.log('Inside constructor')
    }

    /* shouldComponentUpdate() {
        console.log('Inside shouldComponentUpdate')
        return true
    } */

    getSnapshotBeforeUpdate() {
        console.log('Inside getSnapshotBeforeUpdate')
    }

    componentDidUpdate() {
        console.log('Inside componentDidUpdate')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Inside getDerivedStateFromProps')
    }

    componentDidMount() {
        console.log('Inside componentDidMount')
    }

    changeMsg() {
        //console.log('Latest msg before state update: ' + this.state.msg)
        //this.state.msg = "Thank you for greeting me!!"
        //console.log('Latest msg after state update: ' + this.state.msg)
        console.log('Inside changeMsg')
        this.setState({
            msg: "Thankyou for greeting me!!"
        }, () => console.log('Latest msg after state update: ' + this.state.msg))
        /*         const studentMarks = [100, 80, 70, 10]
                const [Mark1, Mark2] = studentMarks
                console.log(`studentMarks: ${studentMarks}, Mark1: ${Mark1}, Mark2: ${Mark2}`)
         */
    }

    printMsg() {
        console.log('Msg:' + this.state.msg)
    }

    render() {
        console.log('Inside render')
        if (this.props.name === 'Credo')
            throw new Error('An unhandled error occurred')
        //return null
        return <>
            <h1>Welcome All from GreetComponent {this.props.name} courses {this.props.course}</h1>
            <h2>{this.state.msg}</h2>
            <button onClick={this.changeMsg}>Say Hello</button>
        </>
    }
}
export default GreetComponent;