// import React, { createContext, useState } from 'react';

// export const PatientContext = createContext();

// export const PatientProvider = ({ children }) => {
//     const [patients, setPatients] = useState([]);

//     const addPatient = (patient) => {
//         setPatients([...patients, { id: patients.length + 1, ...patient }]);
//     };

//     return (
//         <PatientContext.Provider value={{ patients, addPatient }}>
//             {children}
//         </PatientContext.Provider>
//     );
// };

// PatientContext.js
// import React, { createContext, useState } from 'react';

// export const PatientContext = createContext();

// export const PatientProvider = ({ children }) => {
//     const [patients, setPatients] = useState([]);

//     const addPatient = (patient) => {
//         setPatients([...patients, { ...patient, id: Date.now() }]);
//     };

//     const removePatient = (id) => {
//         setPatients(patients.filter(patient => patient.id !== id));
//     };


//     const updatePatient = (updatedPatient) => {
//         setPatients(patients.map(patient =>
//             patient.id === updatedPatient.id ? updatedPatient : patient
//         ));
//     };
    

//     return (
//         <PatientContext.Provider value={{ patients, addPatient, removePatient, updatePatient }}>
//             {children}
//         </PatientContext.Provider>
//     );
// };




import React, { createContext, useState } from 'react';

export const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
    const [patients, setPatients] = useState([]);

    const addPatient = (patient) => {
        setPatients([...patients, { ...patient, id: Date.now()}]);
    };

    const removePatient = (id) => {
        setPatients(patients.filter(patient => patient.id !== id));
    };

    const updatePatient = (updatedPatient) => {
        setPatients(patients.map(patient =>
            patient.id === updatedPatient.id ? { ...patient, ...updatedPatient } : patient
        ));
    };

    return (
        <PatientContext.Provider value={{ patients, addPatient, removePatient, updatePatient }}>
            {children}
        </PatientContext.Provider>
    );
};
