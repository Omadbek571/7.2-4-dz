import React from 'react'

function Reset({ res }) {
    return (
        <div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" onClick={() => res((res) => res = 0)}>res</button>
        </div>
    )
}

export default Reset