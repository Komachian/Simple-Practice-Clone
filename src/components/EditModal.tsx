import React, {useState} from 'react'
import type { Event } from "../App";
import { EventClickArg } from "@fullcalendar/core";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import './styles/modal.css'
import trashIcon from './trash.svg'

interface Props {
  info: EventClickArg | undefined;
  events: Event[];
  setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
  setEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditModal: React.FC<Props> = ({ info, events, setEvents, setEditOpen }) => {
  const [price, setPrice] = useState<number>(info!.event.extendedProps.price);
  // const [duration, setDuration] = useState<number |>((info!.event.start.getTime() - info!.event.end?.getTime())/6000000);
  const [location, setLocation] = useState<string>(info!.event.extendedProps.location);
  const [time, setTime] = useState<Date | null>(info!.event.start);


    console.log(info)
  return (
    <div className="modal-container">
        <h1>{info!.event.title}</h1>
        <select>
            <option>Show</option>
            <option>No Show</option>
            <option>Cancelled</option>
            <option>Late Cancelled</option>
            <option>Clinician Cancelled</option>
        </select>
        <br />
        <DateTimePicker onChange={(e) => {if(e){setTime(e)}}} value={time} />
        {/* <input type="number" value={duration} onChange={(e) => {setDuration(parseInt(e.target.value))}}/> */}
        <br/>
        <input type='number' value={price} onChange={(e) => {setPrice(parseInt(e.target.value))}} className='title-input'/>
        <br />
        <select className='title-input' value={location} onChange={(e) => {setLocation(e.target.value)}}>
            <option value={'Location: Unassigned'}>Location: Unassigned</option>
            <option value={'Telehealth: Video Office'}>Telehealth: Video Office</option>
        </select>
        <br />
        
        <label htmlFor='delete-btn'><img src={trashIcon} /></label>
        <button id='delete-btn' onClick={() => {
          const eventList = events.filter((item) => item.id !== info!.event.id);
          setEvents([...eventList]);
          setEditOpen(false);
        }}>Delete</button>
        <button onClick={() => setEditOpen(false)} className='cancel-btn'>Close</button>
        <button onClick={() => {
          let eventList = events;
          eventList[eventList.findIndex((obj => obj.id == info!.event.id))] = {
            ...eventList[eventList.findIndex((obj => obj.id == info!.event.id))],
            // start: time, 
            // end: new Date(time.getTime() + duration*60000), 
            price: price,
            location: location,
          };
          setEvents([...eventList])
          setEditOpen(false);
        }}
        className='done-btn'>Done</button>
    </div>
  )
}

export default EditModal