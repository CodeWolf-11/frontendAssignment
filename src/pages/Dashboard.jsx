import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

const Dashboard = () => {
    const [devices, setDevices] = useState([]);
    const [mapCenter, setMapCenter] = useState({ lat: 28.6139, lng: 77.209 });
    const [selectedDevice, setSelectedDevice] = useState("");

    const navigate = useNavigate();

    const handleProfileEdit = () => {
        navigate("/edit-profile");
    };

    // Simulate API fetch
    useEffect(() => {
        const fetchDevices = async () => {
            // Replace with an actual API call if available
            const dummyData = [
                {
                    name: "Device A",
                    deviceId: "D1234",
                    mainOutput: "Active",
                    hardwareType: "Sensor",
                    lastUpdated: "2024-12-20 10:30 AM",
                    location: { lat: 28.7041, lng: 77.1025 }, // Delhi
                },
                {
                    name: "Device B",
                    deviceId: "D5678",
                    mainOutput: "Idle",
                    hardwareType: "Actuator",
                    lastUpdated: "2024-12-19 03:15 PM",
                    location: { lat: 19.076, lng: 72.8777 }, // Mumbai
                },
                {
                    name: "Device C",
                    deviceId: "D9101",
                    mainOutput: "Inactive",
                    hardwareType: "Gateway",
                    lastUpdated: "2024-12-18 05:45 PM",
                    location: { lat: 12.9716, lng: 77.5946 }, // Bangalore
                },
            ];
            setSelectedDevice(dummyData[0].deviceId);
            setMapCenter(dummyData[0].location);
            setDevices(dummyData);
        };

        fetchDevices();
    }, []);

    return (
        <div className="bg-cyan-100 min-h-screen flex flex-col items-center">
            <div className="w-full max-w-7xl p-4">
                <h1 className="text-3xl font-bold text-center text-cyan-600 mb-6">Device Dashboard</h1>
                <div className="flex justify-end mb-4">
                    <button
                        onClick={handleProfileEdit}
                        className="bg-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-700 transition">
                        Edit Profile
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full table-auto bg-white shadow-lg rounded-lg">
                        <thead>
                            <tr className="bg-cyan-600 text-white">
                                <th className="py-2 px-4 text-left">Name</th>
                                <th className="py-2 px-4 text-left">Device ID</th>
                                <th className="py-2 px-4 text-left">Main Output</th>
                                <th className="py-2 px-4 text-left">Hardware Type</th>
                                <th className="py-2 px-4 text-left">Last Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {devices.map((device, index) => (
                                <tr
                                    onClick={() => {
                                        setSelectedDevice(device.deviceId);
                                        setMapCenter(device.location);
                                    }}
                                    key={index}
                                    className={
                                        selectedDevice === device.deviceId ? "bg-cyan-200" : "bg-white"
                                    }>
                                    <td className="py-2 px-4">{device.name}</td>
                                    <td className="py-2 px-4">{device.deviceId}</td>
                                    <td className="py-2 px-4">{device.mainOutput}</td>
                                    <td className="py-2 px-4">{device.hardwareType}</td>
                                    <td className="py-2 px-4">{device.lastUpdated}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <h2 className="text-xl font-bold text-cyan-600 mb-4">Device Locations</h2>
                        <LoadScript googleMapsApiKey={import.meta.env.VITE_API_KEY}>
                            <GoogleMap
                                mapContainerStyle={{ width: "100%", height: "400px" }}
                                center={mapCenter}
                                zoom={10}>
                                {devices.map((device, index) => {
                                    if (device.location && device.location.lat && device.location.lng) {
                                        return (
                                            <MarkerF
                                                key={index}
                                                position={device.location}
                                                title={device.name}
                                            />
                                        );
                                    } else {
                                        console.error(`Invalid location for device: ${device.name}`);
                                        return null;
                                    }
                                })}
                            </GoogleMap>
                        </LoadScript>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
