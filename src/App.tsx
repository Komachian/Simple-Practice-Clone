import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Calendar from './pages/Calendar';
import Clients from './pages/Clients';
import Meetings from './pages/Meetings';
import './App.css';

export type Event = {
  id: string, 
  title: string, 
  start: Date, 
  end: Date,
  price: number;
  location: string,
  // price: number;
}

const App: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([
    { 
      id: "1", 
      title: 'Brad Pitt', 
      start: new Date("2023-03-13T12:00:00+05:30"), 
      end: new Date("2023-03-13T12:30:00+05:30"), 
      price: 80,
      location: 'Location: Unassigned',
    },
    { 
      id: "2", 
      title: 'Adam Cohen', 
      start: new Date("2023-03-14T13:00:00+05:30"), 
      end: new Date("2023-03-13T13:45:00+05:30"), 
      price: 120,
      location: 'Location: Unassigned',
    },
    { 
      id: "3", 
      title: 'Angela Simpson', 
      start: new Date("2023-04-12T10:00:00+05:30"), 
      end: new Date("2023-03-13T11:00:00+05:30"), 
      price: 160,
      location: 'Location: Unassigned',
    }, 
  ]);
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    <div className='main-body'>
      <Sidebar />
      <div className='content'>
        <Routes>
          <Route path="/" element={<Calendar events={events} setEvents={setEvents}/>} />
          <Route path="/clients" element={<Clients events={events} />} />
          <Route path="/meetings" element={<Meetings events={events} />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
