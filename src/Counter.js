import { useMemo, useState } from "react";
function Counter() {
    const [count, setCount] = useState(0)
    const [anotherCount, setAnotherCount] = useState(0)

    const incrementCount = () => setCount(count + 1)
    const incrementAnotherCount = () => setAnotherCount(anotherCount + 1)

    const isEvenOdd = useMemo(() => {
        let num = 0
        while (num < 1000000000) num++
        return count % 2 === 0
    }, [count])
    return (<>
        <button onClick={incrementCount}> Button-1 Clicked Count: {count}</button>
        <span>{isEvenOdd ? 'Even Number' : 'Odd Number'}</span>
        <br />
        <button onClick={incrementAnotherCount}>  Button-1 Clicked Count: {anotherCount}</button>
    </>);
}

export default Counter;