import React from 'react'
import { useState } from 'react'

const Counter = () => {
    function defaultCall() {
        const val = 10;
        console.log("Heavy ", val);
        return val;
    }

    const [count, setCount] = useState( defaultCall);
    console.log(count);

  return (
    <div>
        <h3>Count value is {count}</h3>
        <button onClick={()=>setCount(count+1)}>+</button>

        <h4>hihjisisis lorem900</h4>
     </div>
  )
}

export default Counter
