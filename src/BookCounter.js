import React from 'react';
import { useSelector } from 'react-redux'
function BookCounter() {
    const count = useSelector(state => state.bookCounter)
    return (<>
        <h1>Total number of books in library: {count}</h1>
    </>);
}

export default BookCounter;