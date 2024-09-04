// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const AppointmentForm = ({ onSubmit, initialValues }) => {
//     const validationSchema = Yup.object().shape({
//         patientId: Yup.number().required('Patient ID is required'),
//         staffId: Yup.number().required('Staff ID is required'),
//         date: Yup.date().required('Appointment Date is required')
//             .min(new Date(), 'Date of Appointment must be today or in the future'),
//         time: Yup.string().required('Time is required'),
//     });

//     return (
//         <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={onSubmit}
//             enableReinitialize // This prop ensures the form reinitializes when initialValues change
//         >
//             {() => (
//                 <Form>
//                     <h3 className='mb-3'>{initialValues.id ? 'Edit Appointment' : 'Register Appointment'}</h3>

//                     <div className="mb-3">
//                         <label htmlFor="patientId">Patient ID</label>
//                         <Field name="patientId" type="number" className="form-control" />
//                         <ErrorMessage name="patientId" component="div" className="text-danger" />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="staffId">Staff ID</label>
//                         <Field name="staffId" type="number" className="form-control" />
//                         <ErrorMessage name="staffId" component="div" className="text-danger" />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="date">Appointment Date</label>
//                         <Field name="date" type="date" className="form-control" />
//                         <ErrorMessage name="date" component="div" className="text-danger" />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="time">Appointment Time</label>
//                         <Field name="time" type="time" className="form-control" />
//                         <ErrorMessage name="time" component="div" className="text-danger" />
//                     </div>
//                     <button type="submit" className="btn btn-primary">
//                         {initialValues.id ? 'Update Appointment' : 'Submit'}
//                     </button>

//                 </Form>
//             )}
//         </Formik>
//     );
// };

// export default AppointmentForm;


import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AppointmentForm = ({ onSubmit, initialValues }) => {
    const validationSchema = Yup.object().shape({
        patientId: Yup.number().required('Patient ID is required'),
        staffId: Yup.number().required('Staff ID is required'),
        date: Yup.date().required('Appointment Date is required')
            .min(new Date(), 'Date of Appointment must be today or in the future'),
        time: Yup.string().required('Time is required'),
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                onSubmit(values);
                resetForm(); // Reset the form state after submission
            }}
            enableReinitialize // This prop ensures the form reinitializes when initialValues change
        >
            {() => (
                <Form>
                    <h3 className='mb-3'>{initialValues.id ? 'Edit Appointment' : 'Register Appointment'}</h3>

                    <div className="mb-3">
                        <label htmlFor="patientId">Patient ID</label>
                        <Field name="patientId" type="number" className="form-control" />
                        <ErrorMessage name="patientId" component="div" className="text-danger" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="staffId">Staff ID</label>
                        <Field name="staffId" type="number" className="form-control" />
                        <ErrorMessage name="staffId" component="div" className="text-danger" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date">Appointment Date</label>
                        <Field name="date" type="date" className="form-control" />
                        <ErrorMessage name="date" component="div" className="text-danger" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="time">Appointment Time</label>
                        <Field name="time" type="time" className="form-control" />
                        <ErrorMessage name="time" component="div" className="text-danger" />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        {initialValues.id ? 'Update Appointment' : 'Submit'}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default AppointmentForm;
