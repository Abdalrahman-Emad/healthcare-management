// import React, { useContext } from 'react';
// import { PatientContext } from '../../context/PatientContext';
// import PatientForm from './PatientForm';
// import PatientList from './PatientList';

// const PatientManagement = () => {
//     const { addPatient } = useContext(PatientContext);

//     const handlePatientSubmit = (values) => {
//         addPatient(values);
//     };

//     return (
//         <div className="patient-management">
//             <PatientForm onSubmit={handlePatientSubmit} />
//             <PatientList />
//         </div>
//     );
// };

// export default PatientManagement;


// PatientManagement.jsx
import React, { useContext, useState } from 'react';
import { PatientContext } from '../../context/PatientContext';
import PatientForm from './PatientForm';
import PatientList from './PatientList';

const PatientManagement = () => {
    const { addPatient, updatePatient } = useContext(PatientContext);
    const [editingPatient, setEditingPatient] = useState(null);

    const handlePatientSubmit = (values) => {
        if (editingPatient) {
            updatePatient({ ...values, id: editingPatient.id });
            setEditingPatient(null);
        } else {
            addPatient(values);
        }
    };

    const handleEditPatient = (patient) =>{
        setEditingPatient(patient);
    };

    return (
        <div className="patient-management">

            <PatientForm
                onSubmit={handlePatientSubmit}
                initialValues={editingPatient || { id: '', firstName: '', lastName: '', email: '', dateOfBirth: '' }}
            />

            <PatientList onEdit={handleEditPatient} />
        </div>
    );
};

export default PatientManagement;
