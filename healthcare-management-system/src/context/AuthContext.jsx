// // import React, { createContext, useState, useEffect } from 'react';
// // import * as jwtDecode from 'jwt-decode';

// // const AuthContext = createContext();

// // const AuthProvider = ({ children }) => {
// //     const [user, setUser] = useState(null);

// //     useEffect(() => {
// //         const token = localStorage.getItem('token');
// //         if (token) {
// //             try {
// //                 const decodedToken = JSON.parse(atob(token)); // Decode Base64 token
// //                 setUser(decodedToken);
// //             } catch (error) {
// //                 console.error('Failed to decode token:', error);
// //                 localStorage.removeItem('token');
// //             }
// //         }
// //     }, []);

// //     const login = (token) => {
// //         try {
// //             const decodedToken = JSON.parse(atob(token)); // Decode Base64 token
// //             setUser(decodedToken);
// //             localStorage.setItem('token', token);
// //         } catch (error) {
// //             console.error('Failed to decode token:', error);
// //         }
// //     };

// //     const logout = () => {
// //         setUser(null);
// //         localStorage.removeItem('token');
// //     };

// //     return (
// //         <AuthContext.Provider value={{ user, login, logout }}>
// //             {children}
// //         </AuthContext.Provider>
// //     );
// // };

// // export { AuthProvider, AuthContext };




// import React, { createContext, useState, useEffect } from 'react';
// import Cookies from 'js-cookie';
// // import jwtDecode from 'jwt-decode';
// import * as jwtDecode from 'jwt-decode';


// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const token = Cookies.get('token');
//         if (token) {
//             try {
//                 const decodedToken = jwtDecode(token);
//                 setUser(decodedToken);
//             } catch (error) {
//                 console.error('Failed to decode token:', error);
//                 Cookies.remove('token');
//             }
//         }
//     }, []);

//     const login = (token) => {
//         try {
//             const decodedToken = jwtDecode(token);
//             setUser(decodedToken);
//             Cookies.set('token', token, { expires: 7 }); // Cookie expires in 7 days
//         } catch (error) {
//             console.error('Failed to decode token:', error);
//         }
//     };

//     const logout = () => {
//         setUser(null);
//         Cookies.remove('token');
//     };

//     return (
//         <AuthContext.Provider value={{ user, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export { AuthProvider, AuthContext };
