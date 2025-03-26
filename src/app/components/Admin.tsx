"use client"; // Mark as a client component

import React, { useState } from 'react';
import mockEmails from '../mockEmails';

interface Email {
    id: number;
    subject: string;
    body: string;
    employee: string;
}

interface AdminProps {
    onUpdateEmails: (emails: Email[]) => void;
}

const Admin: React.FC<AdminProps> = ({ onUpdateEmails }) => {
    const [newEmail, setNewEmail] = useState<{ subject: string; body: string; employee: string }>({ subject: '', body: '', employee: '' });

    const handleAddEmail = () => {
        const newId = Math.max(0, ...mockEmails.map(email => email.id)) + 1; // Generate new ID
        onUpdateEmails((prevEmails: Email[]) => [...prevEmails, { id: newId, ...newEmail }]);
        setNewEmail({ subject: '', body: '', employee: '' }); // Reset input fields
    }; 

    return (
        <div className="max-w-3xl mx-auto mt-6"> {/* Center the form and add margin */}
            <h2 className="text-xl font-bold mb-4">Add New Email</h2>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Employee"
                    value={newEmail.employee}
                    onChange={(e) => setNewEmail({ ...newEmail, employee: e.target.value })}
                    className="border border-gray-300 rounded px-2 py-1 w-full mb-2" // Styling for the input
                />
                <input
                    type="text"
                    placeholder="Subject"
                    value={newEmail.subject}
                    onChange={(e) => setNewEmail({ ...newEmail, subject: e.target.value })}
                    className="border border-gray-300 rounded px-2 py-1 w-full mb-2" // Styling for the input
                />
                <textarea
                    placeholder="Body"
                    value={newEmail.body}
                    onChange={(e) => setNewEmail({ ...newEmail, body: e.target.value })}
                    className="border border-gray-300 rounded px-2 py-1 w-full mb-2" // Styling for the textarea
                />
                <button onClick={handleAddEmail} className="bg-blue-500 text-white rounded px-4 py-2">
                    Add Email
                </button>
            </div>
        </div>
    );
};

export default Admin;