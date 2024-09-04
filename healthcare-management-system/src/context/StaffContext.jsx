import React, { createContext, useState } from 'react';

export const StaffContext = createContext();

export const StaffProvider = ({ children }) => {
    const [staff, setStaff] = useState([]);

    const addStaff = (staffMember) => {
        setStaff([...staff, { ...staffMember, id: Date.now() }]);
    };

    const removeStaff = (id) => {
        setStaff(staff.filter(member => member.id !== id));
    };

    const updateStaff = (updatedMember) => {
        setStaff(staff.map(member =>
            member.id === updatedMember.id ? updatedMember : member
        ));
    };

    return (
        <StaffContext.Provider value={{ staff, addStaff, removeStaff, updateStaff }}>
            {children}
        </StaffContext.Provider>
    );
};


// StaffContext.js
// import React, { createContext, useState } from 'react';

// export const StaffContext = createContext();

// export const StaffProvider = ({ children }) => {
//     const [staff, setStaff] = useState([
//         // Sample data
//         { id: 1, name: 'Dr. Alice', role: 'Doctor' },
//         { id: 2, name: 'Nurse Bob', role: 'Nurse' },
//     ]);

//     const deleteStaff = (id) => {
//         setStaff(staff.filter(member => member.id !== id));
//     };

//     return (
//         <StaffContext.Provider value={{ staff, deleteStaff }}>
//             {children}
//         </StaffContext.Provider>
//     );
// };
