"use client"; // Mark as a client component

import React from 'react';
import { Inter } from "next/font/google";
import MenuBar from './components/MenuBar'; // Adjust the import path as necessary
import './globals.css';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <MenuBar /> {/* Include the MenuBar here */}
                {children}
            </body>
        </html>
    );
}