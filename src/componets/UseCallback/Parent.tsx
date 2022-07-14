import  { useCallback, useState } from 'react'

import Child from './Child';

const Parent = () => {
    const [increment1, setIncrement1] = useState(0);
    const [increment2, setIncrement2] = useState(0);

    const myFunction = useCallback(() => {
        console.log('Function By Parent');
    }, [increment2])
    return (
        <div>
            <Child myFunction={myFunction} />
            <button onClick={() => setIncrement1(increment1 + 1)}>
                IncrementOne - {increment1}
            </button>
            <button onClick={() => setIncrement2(increment2 + 1)}>
                IncrementOne - {increment2}
            </button>
        </div>
    )
}

export default Parent