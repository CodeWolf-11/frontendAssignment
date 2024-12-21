import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const handlelogin = () => {
        //make required api calls;
        if (!email || !password) {
            alert("Please enter valid credentials");
        } else {
            setEmail("");
            setPassword("");
            alert("login successfull");
            navigate("/dashboard");
        }
    };

    return (
        <div className="bg-cyan-100 flex items-center justify-center min-h-screen">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-cyan-600 mb-6">Welcome</h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-cyan-700 font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
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
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={handlelogin}
                        className="w-full bg-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-700 transition">
                        Login
                    </button>
                    <div className="text-center mt-4">
                        <a href="#" className="text-cyan-500 hover:underline">
                            Forgot Password?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
