import React from 'react'

function Meetings() {
  return (
    <div>
        <h1>Meetings scheduled</h1>
        <span>Total Clients: 3</span>
        <table>
        <tr>
            <th>Name</th>
            <th></th>
            <th>Contact Info</th>
            <th>Relationship</th>
            <th></th>
        </tr>
        <tr>
            <td>Alfreds Futterkiste</td>
            <td>Adult</td>
            <td>
                <div>848421348</div>
                <div>example@gmail.com</div>
            </td>
            <td>Clinician: John Watson</td>
            <td><button>Manage</button></td>
        </tr>
        <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
        </tr>
        </table>
    </div>
  )
}

export default Meetings