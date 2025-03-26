"use client"; // Mark as a client component
import React, { useState } from 'react';
import Link from 'next/link';
import StepIndicator from './StepIndicator'; // Import the StepIndicator component

const MenuBar: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0); // Start at step 0 (Connection)

    return (
        <div className="border-b">
            <div className="container flex flex-col items-center px-4 md:px-6">
                <Link href="/" className="text-2xl font-bold mb-4">
                    Admin Dashboard
                </Link>
                <StepIndicator currentStep={currentStep} />
                <nav className="mt-4 flex gap-4 sm:gap-6">
                    <Link href="/" passHref>
                        <button 
                            onClick={() => setCurrentStep(0)} 
                            className={`font-medium ${currentStep === 0 ? 'text-blue-500' : 'text-gray-500'}`}
                        >
                            Connection
                        </button>
                    </Link>
                    <Link href="/employees" passHref>
                        <button 
                            onClick={() => setCurrentStep(1)} 
                            className={`font-medium ${currentStep === 1 ? 'text-blue-500' : 'text-gray-500'}`}
                        >
                            Employees
                        </button>
                    </Link>
                    <Link href="/emails" passHref>
                        <button 
                            onClick={() => setCurrentStep(2)} 
                            className={`font-medium ${currentStep === 2 ? 'text-blue-500' : 'text-gray-500'}`}
                        >
                            Data
                        </button>
                    </Link>
                    <button 
                        onClick={() => setCurrentStep(3)} 
                        className={`font-medium ${currentStep === 3 ? 'text-blue-500' : 'text-gray-500'}`}
                    >
                        Anonymization
                    </button>
                    <button 
                        onClick={() => setCurrentStep(4)} 
                        className={`font-medium ${currentStep === 4 ? 'text-blue-500' : 'text-gray-500'}`}
                    >
                        Review
                    </button>
                </nav>
            </div>
        </div>
    );
};

export default MenuBar;