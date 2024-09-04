import React, { createContext, useState } from 'react';

export const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
    const [appointments, setAppointments] = useState([]);

    const addAppointment = (appointment) => {
        setAppointments([...appointments, { id: appointments.length + 1, ...appointment }]);
    };

    const removeAppointment = (id) => {
        setAppointments(appointments.filter(appointment => appointment.id !== id));
    };

    const updateAppointment = (updatedAppointment) => {
        setAppointments(appointments.map(appointment =>
            appointment.id === updatedAppointment.id ? updatedAppointment : appointment
        ));
    };
    

    return (
        <AppointmentContext.Provider value={{ appointments, addAppointment ,removeAppointment, updateAppointment}}>
            {children}
        </AppointmentContext.Provider>
    );
};


