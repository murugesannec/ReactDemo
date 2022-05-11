import React, { useState, useEffect } from 'react';

function HooksButtonClicker() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You have clicked the button ${count} times`
    })
    return (<>
        <br />
        <button onClick={() => setCount(count + 1)}>Clicked times: {count}</button>
        <h1>This is from HooksButtonClicker</h1>
    </>
    );
}
export default HooksButtonClicker;