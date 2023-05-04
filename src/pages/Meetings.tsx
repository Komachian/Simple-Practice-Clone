import React from 'react'
import type { Event } from "../App";
import './styles/table.css'

interface Props {
    events: Event[];
}

const Meetings: React.FC<Props> = ({ events }) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return (
    <div className='table-container'>
        <h1>Meetings scheduled</h1>
        <h2>Total Clients: 3</h2>
        <table>
        <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Price</th>
            <th>From</th>
            <th>To</th>
            <th></th>
        </tr>
        {events.map((item) => {
            return(
            <tr>
                <td className='row-name'>{item.title}</td>
                <td>{item.location}</td>
                <td className='row-bold'>$ {item.price}</td>
                <td>{item.start.toString()}</td>
                <td>{item.end.toString()}</td>
                <td><button>Manage</button></td>
            </tr> 
            )
        })}
        </table>
    </div>
  )
}

export default Meetings