// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';
// import logo from '../assets/Logo.png';
// import './Header.css';

// const Header = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const { isAuthenticated } = useAuth0();

//     return (
//         <header className="header">
//             <div className="container">
//                 <div className="logo">
//                     <img src={logo} alt="logo" />
//                 </div>
//                 <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//                     <span className="sr-only">Toggle navigation</span>
//                     <div className="hamburger"></div>
//                 </button>
//                 <nav className={`main-nav ${isMenuOpen ? 'is-open' : ''}`}>
//                     <ul className="nav-list">
//                         <li className="nav-item"><Link to="/">Home</Link></li>
//                         <li className="nav-item"><Link to="/dashboard">Dashboard</Link></li>
//                         <li className="nav-item"><Link to="/patients">Patients</Link></li>
//                         <li className="nav-item"><Link to="/staff">Staff</Link></li>
//                         <li className="nav-item"><Link to="/appointments">Appointments</Link></li>
//                         <li className="nav-item"><Link to="/patient-portal">Patient Portal</Link></li>
//                         {isAuthenticated ? (
//                             <li className="nav-item"><Link to="/logout">Logout</Link></li>
//                         ) : (
//                             <>
//                                 <li className="nav-item"><Link to="/login">Login</Link></li>
//                                 <li className="nav-item"><Link to="/register">Register</Link></li>
//                             </>
//                         )}
//                     </ul>
//                 </nav>
//             </div>
//         </header>
//     );
// };

// export default Header;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../assets/Logo.png';
import './Header.css';
import { FaUserCircle } from 'react-icons/fa'; // Import a user icon from react-icons

const Header = () => {
    const { user, logout, isAuthenticated } = useAuth0();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);

    const handleUserIconClick = () => {
        setShowUserMenu(!showUserMenu);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span className="sr-only">Toggle navigation</span>
                    <div className="hamburger"></div>
                </button>
                <nav className={`main-nav ${isMenuOpen ? 'is-open' : ''}`}>
                    <ul className="nav-list">
                        <li className="nav-item"><Link to="/">Home</Link></li>
                        <li className="nav-item"><Link to="/dashboard">Dashboard</Link></li>
                        <li className="nav-item"><Link to="/patients">Patients</Link></li>
                        <li className="nav-item"><Link to="/staff">Staff</Link></li>
                        <li className="nav-item"><Link to="/appointments">Appointments</Link></li>
                        <li className="nav-item"><Link to="/patient-portal">Patient Portal</Link></li>
                        {isAuthenticated ? (
                            <li className="nav-item">
                                <div className="user-icon" onClick={handleUserIconClick}>
                                    <FaUserCircle size={24} />
                                    {showUserMenu && (
                                        <div className="user-menu">
                                            <p>{user.email}</p>
                                            <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
                                        </div>
                                    )}
                                </div>
                            </li>
                        ) : (
                            <>
                                <li className="nav-item"><Link to="/login">Login</Link></li>
                                <li className="nav-item"><Link to="/register">Register</Link></li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;