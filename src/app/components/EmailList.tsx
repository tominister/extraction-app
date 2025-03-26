"use client"; // Mark as a client component

import React from 'react';

interface Email {
    id: number;
    subject: string;
    body: string;
    employee: string; // Add employee field
}

interface EmailListProps {
    emails: Email[];
    onSelectEmail: (email: Email) => void;
    onDeleteEmail: (id: number) => void; // Function to delete an email
}

const EmailList: React.FC<EmailListProps> = ({ emails, onSelectEmail, onDeleteEmail }) => {
    return (
        <div className="max-w-3xl mx-auto"> {/* Center the table and limit its width */}
            <h2 className="text-xl font-bold mb-4">Email Listings</h2>
            <table className="min-w-full border border-gray-300 border-collapse">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Employee</th> {/* New column for Employee */}
                        <th className="border border-gray-300 px-4 py-2">Subject</th>
                        <th className="border border-gray-300 px-4 py-2">Body</th> {/* New column for Body */}
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {emails.map(email => (
                        <tr key={email.id} className="hover:bg-gray-100">
                            <td className="border border-gray-300 px-4 py-2 cursor-pointer" onClick={() => onSelectEmail(email)}>
                                {email.employee} {/* Display the employee name */}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 cursor-pointer" onClick={() => onSelectEmail(email)}>
                                {email.subject}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 cursor-pointer" onClick={() => onSelectEmail(email)}>
                                {email.body} {/* Display the body of the email */}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                <button onClick={() => onDeleteEmail(email.id)} className="text-red-500 hover:underline">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmailList;