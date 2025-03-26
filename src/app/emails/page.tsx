"use client";

import React, { useState } from 'react';
import mockEmails from '../mockEmails'; // Adjust the path as necessary
import EmailList from '../components/EmailList'; // Adjust the path as necessary
import EmailDetail from '../components/EmailDetail'; // Adjust the path as necessary
import Admin from '../components/Admin'; // Adjust the path as necessary

const EmailsPage: React.FC = () => {
    const [selectedEmail, setSelectedEmail] = useState<null | { subject: string; body: string; employee: string }>(null);
    const [emails, setEmails] = useState(mockEmails);

    const handleSelectEmail = (email: { subject: string; body: string; employee: string }) => {
        setSelectedEmail(email);
    };

    const handleUpdateEmails = (updatedEmails: typeof mockEmails) => {
        setEmails(updatedEmails);
    };

    const handleDeleteEmail = (id: number) => {
        setEmails(emails.filter(email => email.id !== id)); // Remove the email with the specified ID
    };

    return (
        <main className="min-h-screen bg-background">
            <EmailList emails={emails} onSelectEmail={handleSelectEmail} onDeleteEmail={handleDeleteEmail} />
            <EmailDetail email={selectedEmail} />
            <Admin onUpdateEmails={handleUpdateEmails} />
        </main>
    );
};

export default EmailsPage;