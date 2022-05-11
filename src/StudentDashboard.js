import { useCallback, useState } from "react";
import DisplayStudentCount from "./DisplayStudentCount";
import IncrementCntButton from "./IncrementCntButton";

function StudentDashboard() {
    const [male, setMale] = useState(0)
    const [female, setFemale] = useState(0)

    const incrementMale = useCallback(() => setMale(male + 1), [male])
    const incrementFemale = useCallback(() => setFemale(female + 1), [female])

    return (<>
        <DisplayStudentCount gender='Male' count={male} />
        <IncrementCntButton handleClick={incrementMale} content='Increment male count' />
        <DisplayStudentCount gender='Female' count={female} />
        <IncrementCntButton handleClick={incrementFemale} content='Increment female count' />
    </>);
}

export default StudentDashboard;