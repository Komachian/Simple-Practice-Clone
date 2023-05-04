import React from 'react'
import type { Event } from "../App";
import './styles/table.css'

interface Props {
    events: Event[];
}

const Clients: React.FC<Props> = ({ events }) => {
    const unique = events.map((item) => item.title).filter((value, index, self) => self.indexOf(value) === index);

  return (
    <div className='table-container'>
        <h1>Clients and contacts</h1>
        <h2>Total Clients: 3</h2>
        <table>
        <tr>
            <th>Name</th>
            <th></th>
            <th>Contact Info</th>
            <th>Relationship</th>
            <th></th>
        </tr>
        {/* <hr /> */}
        {unique.map((item) => {
            return(
                <tr>
                <td className='row-name'>{item}</td>
                <td className='row-bold'>Adult</td>
                <td>
                    <div>848421348</div>
                    <div>example@gmail.com</div>
                </td>
                <td>Clinician: John Watson</td>
                <td><button>Manage</button></td>
            </tr>
            )
        })}
        {/* <hr /> */}
        </table>
    </div>
  )
}

export default Clients