import React from 'react';

function IncrementCntButton({ handleClick, content }) {
    console.log(`Rendering ${content}`)
    return (<>
        <button onClick={handleClick}>{content}</button>
    </>);
}

export default React.memo(IncrementCntButton);