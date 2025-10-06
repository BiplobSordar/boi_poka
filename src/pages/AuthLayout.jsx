
import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const AuthLayout = () => {
    const location = useLocation();
    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-primary to-indigo-800">

            <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-white/10 p-12">
                <Link to="/" className="flex items-center gap-3 mb-8">
                    <span className="text-4xl">📚</span>
                    <span className="text-3xl font-bold text-white">BookHub</span>
                </Link>
                <h2 className="text-3xl font-bold text-white mb-4">Welcome to BookHub</h2>
                <p className="text-lg text-blue-100 max-w-md text-center">
                    Discover, read, and share your favorite books with a vibrant community of readers.
                </p>
            </div>

            <div className="flex-1 flex items-center justify-center bg-white rounded-l-3xl shadow-2xl p-8">
                <div className="w-full max-w-md">
                    <Outlet />
                    <div className="mt-8 text-center text-gray-400 text-xs">
                        &copy; {new Date().getFullYear()} BookHub. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;