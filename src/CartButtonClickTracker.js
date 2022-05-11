import React, { Component } from 'react';
import AddCounter from './AddCounter'
class CartButtonClickTracker extends Component {
    render() {
        const { count, incrementClickCount } = this.props
        return (
            <>
                <h1>This is CartButtonClickTracker</h1>
                <button onClick={incrementClickCount}>Clicked times: {count}</button>
            </>
        );
    }
}
export default AddCounter(CartButtonClickTracker);