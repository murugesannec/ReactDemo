import React, { useContext } from 'react';
import { ctx } from './RContext';

function HooksContext() {
    const value = useContext(ctx)
    return (value);
}
export default HooksContext;