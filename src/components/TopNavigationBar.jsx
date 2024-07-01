import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, redirect, useNavigate } from 'react-router-dom';

const TopNavigationBar = () => {

    const user = useSelector(store => store.user.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        dispatch(setUser(null));
        navigate("/login");
    }

    return (
        <nav className="bg-gray-800 text-white p-4 shadow-lg sticky">
            <div className="container mx-auto flex justify-around items-center">
                <div className="text-xl font-bold">
                    <Link to="/" className="hover:text-blue-400">Micropost</Link>
                </div>
                <div className="hidden md:flex space-x-8">
                    <Link to="/" className="hover:text-blue-400">Home</Link>
                    <Link to={`/profile/${user?.username}`} className="hover:text-blue-400">Profile</Link>
                    <Link to="/notifications" className="hover:text-blue-400">Notifications</Link>
                    <Link to="/bookmarks" className="hover:text-blue-400">Bookmarks</Link>
                    <Link to="/logout" onClick={handleLogout} className="hover:text-blue-400">Logout</Link>
                    {!user && <Link to="/login" className="hover:text-blue-400">Login</Link>}
                    {!user && <Link to="/signup" className="hover:text-blue-400">Signup</Link>}
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden  bg-gray-800">
                    <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 px-4 hover:text-blue-400">Home</Link>
                    <Link to={`/profile/${user?.username}`} onClick={() => setIsOpen(false)} className="block py-2 px-4 hover:text-blue-400">Profile</Link>
                    <Link to="/notifications" onClick={() => setIsOpen(false)} className="block py-2 px-4 hover:text-blue-400">Notifications</Link>
                    <Link to="/bookmarks" onClick={() => setIsOpen(false)} className="block py-2 px-4 hover:text-blue-400">Bookamrks</Link>
                    <Link to="/logout" onClick={() => setIsOpen(false)} className="block py-2 px-4 hover:text-blue-400">Logout</Link>
                    {!user && <Link to="/signup" onClick={() => setIsOpen(false)} className="block py-2 px-4 hover:text-blue-400">Signup</Link>}
                    {!user && <Link to="/login" onClick={() => setIsOpen(false)} className="block py-2 px-4 hover:text-blue-400">Login</Link>}
                </div>
            )}
        </nav>
    );
};

export default TopNavigationBar;
