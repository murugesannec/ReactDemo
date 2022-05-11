import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addBook, removeBook } from './action'
function LibraryHome() {
    const bookinfo = useSelector(state => state.library)
    const lastElem = bookinfo ? bookinfo[bookinfo.length - 1] : []
    const dispatch = useDispatch()
    return (<>
        <h1>This is the home page for library</h1>
        <br />
        <button onClick={() => dispatch(addBook(lastElem ? lastElem.id : 0))}>Add Book</button> &ensp;
        <button onClick={() => dispatch(removeBook(lastElem ? lastElem.id : 0))}>Remove Book</button>
        {lastElem ? <h1>Congratulations you have added {lastElem.bookName} written by {lastElem.authorName}</h1> : ''}
    </>);
}
export default LibraryHome;