"use client";

import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    employee: {
        performance: string;
        demographicData: string;
        falseScreeningData: string;
        departmentData: string;
    } | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, employee }) => {
    if (!isOpen || !employee) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Employee Details</h2>
                
                <h3 className="text-xl font-semibold mt-4">Performance</h3>
                <p>{employee.performance}</p>
                
                <h3 className="text-xl font-semibold mt-4">Demographic Data</h3>
                <p>{employee.demographicData}</p>
                
                <h3 className="text-xl font-semibold mt-4">Data for False Screening</h3>
                <p>{employee.falseScreeningData}</p>
                
                <h3 className="text-xl font-semibold mt-4">Department Data</h3>
                <p>{employee.departmentData}</p>
                
                <button onClick={onClose} className="mt-4 bg-blue-500 text-white rounded px-4 py-2">
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;