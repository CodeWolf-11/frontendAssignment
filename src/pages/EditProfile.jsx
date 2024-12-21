import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileEditPage = () => {
    const [user, setUser] = useState({
        name: "Nishant",
        email: "nishant@example.com",
        password: "12345678"
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //make the required api calls
        console.log("Updated User Details:", user);
        alert("Profile updated successfully!");
        navigate("/dashboard");
    };

    return (
        <div className="bg-cyan-100 flex items-center justify-center min-h-screen">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-cyan-600 mb-6">Edit Profile</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-cyan-700 font-medium mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-cyan-700 font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-cyan-700 font-medium mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-700 transition">
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProfileEditPage;
