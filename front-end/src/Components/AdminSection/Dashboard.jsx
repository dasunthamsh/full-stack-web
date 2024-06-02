import React from 'react';

const Dashboard = () => {
    return (
        <div className="flex-1 p-10">
            <h2 className="text-3xl font-semibold">Dashboard</h2>

            {/* Card Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold">Total Products</h3>
                    <p className="text-gray-600">150</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold">Total Orders</h3>
                    <p className="text-gray-600">45</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold">Total Users</h3>
                    <p className="text-gray-600">78</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold">Revenue</h3>
                    <p className="text-gray-600">$3400</p>
                </div>
            </div>

            {/* Table Section */}
            <div className="mt-10">
                <h3 className="text-2xl font-semibold mb-4">Recent Orders</h3>
                <div className="bg-white shadow-md rounded-lg overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm">Order ID</th>
                            <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm">Customer</th>
                            <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm">Total</th>
                            <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm">Status</th>
                        </tr>
                        </thead>
                        <tbody className="text-gray-700">
                        <tr>
                            <td className="w-1/3 py-3 px-4">12345</td>
                            <td className="w-1/3 py-3 px-4">John Doe</td>
                            <td className="w-1/3 py-3 px-4">$250</td>
                            <td className="w-1/3 py-3 px-4">Completed</td>
                        </tr>
                        <tr>
                            <td className="w-1/3 py-3 px-4">12346</td>
                            <td className="w-1/3 py-3 px-4">Jane Smith</td>
                            <td className="w-1/3 py-3 px-4">$150</td>
                            <td className="w-1/3 py-3 px-4">Pending</td>
                        </tr>
                        {/* Add more rows as needed */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
