import React from 'react'

const UseLayoutEffect = () => {
    const ref = React.useRef<string>('first value')
    React.useEffect(() => {
        ref.current = 'some value'
    })

    // then, later in another hook or something
    React.useLayoutEffect(() => {
        console.log(ref.current) // <-- this logs an old value because this runs first!
    })
    return (
        <div>UseLayoutEffect</div>
    )
}

export default UseLayoutEffect