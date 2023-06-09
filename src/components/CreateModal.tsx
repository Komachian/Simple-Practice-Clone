import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import type { Event } from "../App";
import { setConstantValue } from "typescript";
import { EventClickArg } from "@fullcalendar/core";
import { DateClickArg } from "@fullcalendar/interaction";
import './styles/modal.css'

interface Props {
    info: DateClickArg | undefined;
    events: Event[];
    setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
    setCreateOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateModal: React.FC<Props> = ({ info, events, setEvents, setCreateOpen }) => {
    const [title, setTitle] = useState<string>("");
    const [time, setTime] = useState<Date>(info!.date);
    const [duration, setDuration] = useState<number>(0);
    const [location, setLocation] = useState<string>('Location: Unassigned');
    console.log("Info", info!.date);
    return (
        <div className="modal-container">
            <h1>New Appointment</h1>
            <input type="radio" id="client" />
            <label htmlFor="">Client Appointment</label>
            <input type="radio" id="other" />
            <label htmlFor="">Other</label>
            <br />
            <input
                type="text"
                value={title}
                placeholder='Client Name'
                onChange={(e) => setTitle(e.target.value)}
                className='title-input'
            />
            <hr />
            <input type="checkbox" id="all-day" />
            <label htmlFor="">All day</label>
            <br />
            <div className='date-container'><DateTimePicker onChange={(e) => {if(e){setTime(e)}}} value={time} />
            <input type="number" value={duration} onChange={(e) => {setDuration(parseInt(e.target.value))}} className='duration-input'/><label className='minute'>min</label>
            </div>
            <br />
            <select className='title-input' value={location} onChange={(e) => {setLocation(e.target.value)}}>
                <option value={'Location: Unassigned'}>Location: Unassigned</option>
                <option value={'Telehealth: Video Office'}>Telehealth: Video Office</option>
            </select>
            <br />
            <input type="checkbox" id="repeat" />
            <label htmlFor="">Repeat</label>
            <hr />
            <button onClick={() => {setCreateOpen(false)}} className='cancel-btn'>Cancel</button>
            <button onClick={() => {setEvents([...events,
            { 
                id: '' + Math.random() * 100,
                title: title, 
                start: time, 
                end: new Date(time.getTime() + duration*60000), 
                price: 70,
                location: location,
              }
            ]);
            setCreateOpen(false)}}
            className='done-btn'>Done</button>
        </div>
    );
};

export default CreateModal;
