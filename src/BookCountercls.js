import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookCountercls extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<> <h1>Total number of books in library from BookCountercls : {this.props.bookCounter} </h1></>);
    }
}

const mapStateToProps = (state) => state

//Dispatch is not needed, as this component is read only component and hence passing null 
export default connect(mapStateToProps, null)(BookCountercls);