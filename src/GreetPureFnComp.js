
import React from 'react';

function GreetPureFnComp({ name, course }) {
    console.log('Inside GreetPureFnComp')
    return (<>
        <h1>Name: {name} course: {course}</h1>
    </>);
}

export default React.memo(GreetPureFnComp);