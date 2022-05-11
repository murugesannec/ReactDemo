import React, { Component } from 'react';
import { addBook, removeBook } from './action'
import { connect } from 'react-redux'

class LibraryHomeCls extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('props: ', this.props)
        const lastElem = this.props.library.length > 0 ? this.props.library[this.props.library.length - 1] : null
        console.log('lastElem: ', lastElem)
        return (<>
            <h1>This is the home page for library</h1>
            <br />
            <button onClick={() => this.props.add(lastElem ? lastElem.id : 0)}>Add Book</button> &ensp;
            <button onClick={() => this.props.remove(lastElem ? lastElem.id : 0)}>Remove Book</button>
            {lastElem ? <h1>Msg from LibraryHomeCls. <br />Congratulations you have added {lastElem.bookName} written by {lastElem.authorName}</h1> : ''}
        </>);
    }
}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => {
    return {
        add: id => dispatch(addBook(id)),
        remove: id => dispatch(removeBook(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LibraryHomeCls);