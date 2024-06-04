import React, { useState, useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calender.css";
import { MdOutlineMenu } from "react-icons/md";
import { SidebarContext } from "../../context/SidebarContext";


const CalendarComponent = () => {
    const { openSidebar } = useContext(SidebarContext);

    const [selectedDate, setSelectedDate] = useState(null);
    const [eventName, setEventName] = useState("");
    const [events, setEvents] = useState([]);

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    const handleEventNameChange = (event) => {
        setEventName(event.target.value);
    };

    const handleCreateEvent = () => {
        if (selectedDate && eventName) {
            const newEvent = {
                id: new Date().getTime(),
                date: selectedDate,
                title: eventName,
            };
            setEvents([...events, newEvent]);
            setEventName("");
        }
    };

    const handleUpdateEvent = (eventId, newName) => {
        const updatedEvents = events.map((event) => {
            if (event.id === eventId) {
                return {
                    ...event,
                    title: newName,
                };
            }
            return event;
        });
        setEvents(updatedEvents);
    };

    const handleDeleteEvent = (eventId) => {
        const updatedEvents = events.filter((event) => event.id !== eventId);
        setEvents(updatedEvents);
    };

    return (
        <div className="app">
            <div className="chatbot-l">
                <button
                    className="chatbot-menu-btn"
                    type="button"
                    onClick={openSidebar}
                >
                    <MdOutlineMenu size={24} />
                </button>
                <h2 className="chatbot-title">Calender</h2>
            </div>
            <div className="container">
                <div className="calendar-container">
                    <Calendar
                        value={selectedDate}
                        onClickDay={handleDateClick}
                        tileClassName={({ date }) =>
                            selectedDate &&
                            date.toDateString() === selectedDate.toDateString()
                                ? "selected"
                                : events.some(
                                      (event) =>
                                          event.date.toDateString() ===
                                          date.toDateString()
                                  )
                                ? "event-marked"
                                : ""
                        }
                    />
                </div>
                <div className="event-container">
                    {selectedDate && (
                        <div className="event-form">
                            <h2>Add Event Reminder</h2>
                            <p>Selected Date: {selectedDate.toDateString()}</p>
                            <input
                                type="text"
                                placeholder="Event Name"
                                value={eventName}
                                onChange={handleEventNameChange}
                            />
                            <button className="create-btn" onClick={handleCreateEvent}>
                                Add Event
                            </button>
                        </div>
                    )}
                    {events.length > 0 && selectedDate && (
                        <div className="event-list">
                            <h2>My Created Event List</h2>
                            <table className="event-table">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Title</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {events.map((event) => (
                                        <tr key={event.id}>
                                            <td>{event.date.toDateString()}</td>
                                            <td>{event.title}</td>
                                            <td>
                                                <button
                                                    className="update-btn"
                                                    onClick={() =>
                                                        handleUpdateEvent(
                                                            event.id,
                                                            prompt("Enter new title")
                                                        )
                                                    }
                                                >
                                                    Update
                                                </button>
                                                <button
                                                    className="delete-btn"
                                                    onClick={() =>
                                                        handleDeleteEvent(event.id)
                                                    }
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CalendarComponent;
