import React, { memo } from 'react'
interface EventProps {
    myFunction: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
const Child = ({ myFunction }: EventProps) => {

    console.log('Child Rendered');
    return (
        <div>Child</div>
    )
}

export default memo(Child)