import React from 'react';

function DisplayStudentCount({ gender, count }) {
    console.log(`Rendering ${gender} count`)
    return (<>
        <h1>Latest {gender} count is {count}</h1>
    </>);
}

export default React.memo(DisplayStudentCount);