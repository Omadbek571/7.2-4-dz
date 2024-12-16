import React, { useState } from 'react'
import Increment from './components/Increment'
import Decrement from './components/Decrement'
import Reset from './components/Reset'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center mt-12'>
      <p className='text-2xl'>{count}</p>
      <div className='flex gap-5 p-5'>

      <Increment plus={setCount} />
      <Decrement minus = {setCount}></Decrement>
      <Reset res = {setCount}></Reset>
      </div>
    </div>
  )
}

export default App
