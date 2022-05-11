import React from "react"
export function GreetAll(props) {
    const { name, course } = props
    return <>
        <h1>Welcome ALL {name} courses {course}</h1>
        {/* {props.children} */}

    </>
}

export function Greet() {
    return <h1>Welcome ALL</h1>
}

//export { Greet, GreetAll }

