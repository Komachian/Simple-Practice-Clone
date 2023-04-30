import { useState } from "react";
import type { Event } from "../App";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import CreateModal from "../components/CreateModal";
import EditModal from "../components/EditModal";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import "./styles/calendar.css";
import { EventClickArg } from "@fullcalendar/core";

interface Props {
    events: Event[];
    setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
}

const Calendar: React.FC<Props> = ({ events, setEvents }) => {
    const [createOpen, setCreateOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [event, setEvent] = useState<EventClickArg>();
    const [date, setDate] = useState<DateClickArg>();
    console.log(events);
    function handleDateClick(info: DateClickArg) {
        setDate(info);
        setCreateOpen(true);
        console.log("heelo", info);
    }

    function handleEventClick(info: EventClickArg) {
        setEvent(info);
        setEditOpen(true);
        console.log("heelo", info);
    }
    return (
        <div className="calendar-container">
            <Modal open={createOpen} onClose={() => setCreateOpen(false)}>
                <CreateModal
                    info={date}
                    events={events}
                    setEvents={setEvents}
                />
            </Modal>
            <Modal open={editOpen} onClose={() => setEditOpen(false)}>
                <EditModal info={event} />
            </Modal>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                initialView="timeGridWeek"
                weekends={true}
                events={events}
                eventContent={renderEventContent}
                editable={true}
                dateClick={handleDateClick}
                eventClick={handleEventClick}
                headerToolbar={{
                    left: "prev,next,title",
                    right: "",
                    center: "timeGridDay,timeGridWeek,dayGridMonth", // user can switch between the two,
                }}
            />
        </div>
    );
};

// a custom render function
function renderEventContent(eventInfo: any) {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
    );
}

export default Calendar;
