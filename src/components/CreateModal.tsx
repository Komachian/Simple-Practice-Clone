import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import type { Event } from "../App";
import { setConstantValue } from "typescript";
import { EventClickArg } from "@fullcalendar/core";
import { DateClickArg } from "@fullcalendar/interaction";

interface Props {
    info: DateClickArg | undefined;
    events: {}[];

    setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
}

const CreateModal: React.FC<Props> = ({ info, events, setEvents }) => {
    const [title, setTitle] = useState<string>("");
    const [time, setTime] = useState<Date>(info!.date);
    const [duration, setDuration] = useState<number>(0)
    console.log("Info", info!.date);
    return (
        <div>
            <h1>New Appointment</h1>
            <input type="radio" id="client" />
            <label htmlFor="">Client Appointment</label>
            <input type="radio" id="other" />
            <label htmlFor="">Other</label>
            <br />
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <hr />
            <input type="checkbox" id="all-day" />
            <label htmlFor="">All day</label>
            <br />
            <DateTimePicker onChange={() => console.log("Hi")} value={time} />
            <input type="number" value={duration} onChange={(e) => {setDuration(parseInt(e.target.value))}}/>
            min
            <br />
            <select>
                <option>Location: Unassigned</option>
                <option>Telehealth: Video Office</option>
            </select>
            <br />
            <input type="checkbox" id="repeat" />
            <label htmlFor="">Repeat</label>
            <hr />
            <button>Cancel</button>
            <button onClick={() => console.log(info)}>Done</button>
        </div>
    );
};

export default CreateModal;
