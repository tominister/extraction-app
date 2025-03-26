"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Modal from '../components/Modal'; // Import the Modal component

// Hard-coded data for employees
const employees = [
    {
        id: 1,
        name: "Jane Cooper",
        email: "jane.cooper@example.com",
        department: "Marketing",
        position: "Marketing Director",
        status: "Included",
        performance: "Excellent",
        demographicData: "Age: 30, Gender: Female",
        falseScreeningData: "No issues found",
        departmentData: "Marketing",
    },
    {
        id: 2,
        name: "John Smith",
        email: "john.smith@example.com",
        department: "Engineering",
        position: "Software Engineer",
        status: "Included",
        performance: "Good",
        demographicData: "Age: 28, Gender: Male",
        falseScreeningData: "No issues found",
        departmentData: "Engineering",
    },
    { id: 3, name: "Robert Johnson", email: "robert.johnson@example.com", department: "Sales", position: "Sales Manager", status: "Included" },
    { id: 4, name: "Emily Rodriguez", email: "emily.rodriguez@example.com", department: "Product", position: "Product Manager", status: "Excluded" },
    { id: 5, name: "David Kim", email: "david.kim@example.com", department: "Finance", position: "Finance Director", status: "Included" },
];

const EmployeesPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleOpenModal = (employee) => {
        setSelectedEmployee(employee);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedEmployee(null);
    };

    return (
        <main className="min-h-screen bg-background">
            <div className="container px-4 py-6 md:px-6 md:py-12 lg:py-16">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Recently Added Employees</h2>
                <p className="text-muted-foreground mb-4">Showing 5 of 248</p>
                <table className="min-w-full border border-gray-300 border-collapse">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Name</th>
                            <th className="border border-gray-300 px-4 py-2">Email</th>
                            <th className="border border-gray-300 px-4 py-2">Department</th>
                            <th className="border border-gray-300 px-4 py-2">Position</th>
                            <th className="border border-gray-300 px-4 py-2">Status</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id} className="hover:bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2">{employee.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{employee.email}</td>
                                <td className="border border-gray-300 px-4 py-2">{employee.department}</td>
                                <td className="border border-gray-300 px-4 py-2">{employee.position}</td>
                                <td className="border border-gray-300 px-4 py-2">{employee.status}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <button 
                                        onClick={() => handleOpenModal(employee)} 
                                        className="text-blue-500 hover:underline"
                                    >
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Modal 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
                employee={selectedEmployee} 
            />
        </main>
    );
};

export default EmployeesPage;
