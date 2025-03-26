import React from 'react';

interface Email {
    subject: string;
    body: string;
    employee: string;
}

interface EmailDetailProps {
    email: Email | null;
}

const EmailDetail: React.FC<EmailDetailProps> = ({ email }) => {
    if (!email) return <div></div>;

    return (
        <div>
            <h2>{email.subject}</h2>
            <p><strong>Employee:</strong> {email.employee}</p>
            <p>{email.body}</p>
        </div>
    );
};

export default EmailDetail;