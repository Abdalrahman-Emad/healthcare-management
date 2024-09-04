// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const PatientForm = ({ onSubmit, initialValues }) => {
//     const validationSchema = Yup.object().shape({
//         firstName: Yup.string().required('First Name is required'),
//         lastName: Yup.string().required('Last Name is required'),
//         email: Yup.string().email('Invalid email').required('Email is required'),
//         dateOfBirth: Yup.date().required('Date of Birth is required')
//             .max(new Date(), 'Date of Birth cannot be in the future')
//             .min(new Date('1900-01-01'), 'Date of Birth must be a valid date'),
//     });


//     return (
//         <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={onSubmit}
//             enableReinitialize
//         >
//             {({ values }) => (
//                 <Form>

//                     <div className="mb-3">
//                         <label htmlFor="firstName">First Name</label>
//                         <Field name="firstName" type="text" className="form-control" />
//                         <ErrorMessage name="firstName" component="div" className="text-danger" />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="lastName">Last Name</label>
//                         <Field name="lastName" type="text" className="form-control" />
//                         <ErrorMessage name="lastName" component="div" className="text-danger" />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="email">Email</label>
//                         <Field name="email" type="email" className="form-control" />
//                         <ErrorMessage name="email" component="div" className="text-danger" />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="dateOfBirth">Date of Birth</label>
//                         <Field name="dateOfBirth" type="date" className="form-control" />
//                         <ErrorMessage name="dateOfBirth" component="div" className="text-danger" />
//                     </div>
//                     <button type="submit" className="btn btn-primary">
//                         {initialValues.id ? 'Update Patient' : 'Register Patient'}

//                     </button>
//                 </Form>
//             )}
//         </Formik>
//     );
// };

// export default PatientForm;



// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';



// const PatientForm = ({ onSubmit, initialValues }) => {
//     const validationSchema = Yup.object().shape({
//         firstName: Yup.string().required('First Name is required'),
//         lastName: Yup.string().required('Last Name is required'),
//         email: Yup.string().email('Invalid email').required('Email is required'),
//         dateOfBirth: Yup.date().required('Date of Birth is required')
//             .max(new Date(), 'Date of Birth cannot be in the future')
//             .min(new Date('1900-01-01'), 'Date of Birth must be a valid date'),
//     });

//     return (
//         <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={onSubmit}
//             enableReinitialize
//         >
//             {({ values }) => (
//                 <Form>
//                     <h3 className='mb-3'>{initialValues.id ? 'Edit Patient' : 'Register Patient'}</h3>

//                     <div className="mb-3">
//                         <label htmlFor="firstName">First Name</label>
//                         <Field name="firstName" type="text" className="form-control" />
//                         <ErrorMessage name="firstName" component="div" className="text-danger" />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="lastName">Last Name</label>
//                         <Field name="lastName" type="text" className="form-control" />
//                         <ErrorMessage name="lastName" component="div" className="text-danger" />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="email">Email</label>
//                         <Field name="email" type="email" className="form-control" />
//                         <ErrorMessage name="email" component="div" className="text-danger" />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="dateOfBirth">Date of Birth</label>
//                         <Field name="dateOfBirth" type="date" className="form-control" />
//                         <ErrorMessage name="dateOfBirth" component="div" className="text-danger" />
//                     </div>
//                     <button type="submit" className="btn btn-primary">
//                         {initialValues.id ? 'Update Patient' : 'Register Patient'}
//                     </button>
//                 </Form>
//             )}
//         </Formik>
//     );
// };

// export default PatientForm;




import React, { useState, useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import MedicalHistoryModal from '../PatientPortal/MedicalHistoryModal';
import { PatientContext } from '../../context/PatientContext';

const PatientForm = ({ onSubmit, initialValues }) => {
    const { updatePatient } = useContext(PatientContext);
    const [showModal, setShowModal] = useState(false);
    const [medicalHistory, setMedicalHistory] = useState(initialValues.medicalHistory || null);

    // Validation schema
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        dateOfBirth: Yup.date().required('Date of Birth is required')
            .max(new Date(), 'Date of Birth cannot be in the future')
            .min(new Date('1900-01-01'), 'Date of Birth must be a valid date'),
    });

    const handleSubmit = (values, { resetForm }) => {
        const updatedValues = { ...values, medicalHistory };
        if (initialValues.id) {
            console.log('Updating patient:', updatedValues);
            updatePatient(updatedValues);
        } else {
            console.log('Submitting new patient:', updatedValues);
            onSubmit(updatedValues);
        }
        
        // Reset the form to its default state after submission
        resetForm({
            values: {
                firstName: '',
                lastName: '',
                email: '',
                dateOfBirth: '',
                hasMedicalHistory: '',
            }
        });
    
        setMedicalHistory(null);
        setShowModal(false);
    };    
    const handleHistorySubmit = (history) => {
        console.log('History submitted:', history); // Debugging
        setMedicalHistory(history);
        setShowModal(false);
        if (initialValues.id) {
            // Update the initialValues object and re-trigger the Formik form to update
            updatePatient({ ...initialValues, medicalHistory: history });
        }
    };    

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize
        >
            {({ values, resetForm }) => (
                <Form>
                    <h3 className='mb-3'>{initialValues.id ? 'Edit Patient' : 'Register Patient'}</h3>

                    <div className="mb-3">
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" type="text" className="form-control" />
                        <ErrorMessage name="firstName" component="div" className="text-danger" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" type="text" className="form-control" />
                        <ErrorMessage name="lastName" component="div" className="text-danger" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email" className="form-control" />
                        <ErrorMessage name="email" component="div" className="text-danger" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dateOfBirth">Date of Birth</label>
                        <Field name="dateOfBirth" type="date" className="form-control" />
                        <ErrorMessage name="dateOfBirth" component="div" className="text-danger" />
                    </div>

                    <div className="mb-3">
                        <label>Does this patient have a medical history?</label>
                        <div>
                            <label>
                                <Field type="radio" name="hasMedicalHistory" value="yes" 
                                    onClick={() => setShowModal(true)} /> Yes
                            </label>
                            <label className="ms-3">
                                <Field type="radio" name="hasMedicalHistory" value="no" 
                                    onClick={() => { setMedicalHistory(null); setShowModal(false); }} /> No
                            </label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        {initialValues.id ? 'Update Patient' : 'Register Patient'}
                    </button>

                    {showModal && (
                        <MedicalHistoryModal 
                            onHistorySubmit={handleHistorySubmit}
                            initialHistory={medicalHistory || {}}
                        />

                    )}
                </Form>
            )}
        </Formik>
    );
};

export default PatientForm;
