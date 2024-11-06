import React from 'react'

const Effect01 = () => {

   const [count, setCount] = React.useState(0);
  
    console.log(count);

    return (
        <div>
            <h1>Effect 01 Example</h1>
            <p>Count : {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            {/* <button onClick={() => setCount(count - 1)}>Decrement</button> */}
        </div>
    )
}

export default Effect01