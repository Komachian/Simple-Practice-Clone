import React from 'react'
import type { Event } from "../App";

interface Props {
    events: Event[];
}

const Clients: React.FC<Props> = ({ events }) => {
    const unique = events.map((item) => item.title).filter((value, index, self) => self.indexOf(value) === index);

  return (
    <div>
        <h1>Clients and contacts</h1>
        <span>Total Clients: 3</span>
        <table>
        <tr>
            <th>Name</th>
            <th></th>
            <th>Contact Info</th>
            <th>Relationship</th>
            <th></th>
        </tr>
        {unique.map((item) => {
            return(
                <tr>
                <td>{item}</td>
                <td>Adult</td>
                <td>
                    <div>848421348</div>
                    <div>example@gmail.com</div>
                </td>
                <td>Clinician: John Watson</td>
                <td><button>Manage</button></td>
            </tr>
            )
        })}
        </table>
    </div>
  )
}

export default Clients