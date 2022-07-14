import React, { Suspense, useState } from 'react'
import AnotherComponent from './AnotherComponent';

const OtherComponent = React.lazy(() => import('./OtherComponent'));
const LazyLoading = () => {

    const [show, setShow] = useState<boolean>(false)
    return (
        <>
            <Suspense fallback={<h2>Loading ...</h2>}>
                {
                    show ? (<OtherComponent />) : (<AnotherComponent />)
                }
            </Suspense>
            <div className="d-flex">
                <button onClick={() => setShow(true)}>Show Second</button>

            </div>

        </>
    )
}

export default LazyLoading