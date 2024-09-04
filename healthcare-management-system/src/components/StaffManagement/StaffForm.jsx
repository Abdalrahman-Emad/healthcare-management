// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const StaffForm = ({ onSubmit, initialValues }) => {
//     const validationSchema = Yup.object().shape({
//         firstName: Yup.string().required('First Name is required'),
//         lastName: Yup.string().required('Last Name is required'),
//         email: Yup.string().email('Invalid email').required('Email is required'),
//         role: Yup.string().required('Role is required'),
//     });

//     return (
//         <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={onSubmit}
//             enableReinitialize // This prop ensures the form reinitializes when initialValues change

//         >
//             {({ values }) => (
//                 <Form>
//                     <h3 className='mb-3'>{initialValues.id ? 'Edit Staff' : 'Register Staff'}</h3>

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
//                         <label htmlFor="role">Role</label>
//                         <Field name="role" type="text" className="form-control" />
//                         <ErrorMessage name="role" component="div" className="text-danger" />
//                     </div>
//                     <button type="submit" className="btn btn-primary">
//                         {initialValues.id ? 'Update Staff' : 'Register Staff'}
//                     </button>
//                 </Form>
//             )}
//         </Formik>
//     );
// };

// export default StaffForm;





import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const StaffForm = ({ onSubmit, initialValues }) => {
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        role: Yup.string().required('Role is required'),
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
            {({ values }) => (
                <Form>
                    <h3 className='mb-3'>{initialValues.id ? 'Edit Staff' : 'Register Staff'}</h3>

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
                        <label htmlFor="role">Role</label>
                        <Field name="role" type="text" className="form-control" />
                        <ErrorMessage name="role" component="div" className="text-danger" />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        {initialValues.id ? 'Update Staff' : 'Register Staff'}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default StaffForm;
