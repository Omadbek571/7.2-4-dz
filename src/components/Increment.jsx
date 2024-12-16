import React from 'react'

function Increment({ plus }) {
  return (
    <div>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" onClick={() => plus((prev) => prev + 1)}>+</button>
    </div>
  )
}

export default Increment
