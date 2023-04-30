import React from 'react'

function EditModal(info: any) {
    console.log(info.info)
  return (
    <div>
        <h1>{info.info.event.title}</h1>
        <select>
            <option>Show</option>
            <option>No Show</option>
            <option>Cancelled</option>
            <option>Late Cancelled</option>
            <option>Clinician Cancelled</option>
        </select>
        
        <button>Delete</button>
        <button>Close</button>
    </div>
  )
}

export default EditModal