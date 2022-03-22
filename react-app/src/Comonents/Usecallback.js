import React, { useState ,useCallback} from 'react'

const Usecallback = () => {

    const [count ,setcount] = useState(0)

    const increment = useCallback(
      () => {
        setcount(count + 1)
      },
      [count],
    )
    const decrement = useCallback(
        () => {
          setcount(count - 1)
        },
        [count],
      )
    
  return (
    <div>
    <h1>{count}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>

    </div>
  )
}

export default Usecallback