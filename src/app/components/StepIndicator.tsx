"use client";

import React from 'react';

interface StepIndicatorProps {
    currentStep: number; // 0 for Connection, 1 for Employees, 2 for Data, 3 for Anonymization, 4 for Review
}

const steps = ["Connection", "Employees", "Data", "Anonymization", "Review"];

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
    return (
        <div className="flex items-center justify-center space-x-4">
            {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                    <div
                        className={`w-8 h-8 rounded-full border-2 ${
                            index <= currentStep ? 'bg-blue-500 border-blue-500' : 'border-gray-300'
                        } flex items-center justify-center text-white`}
                    >
                        {index <= currentStep ? '✓' : index + 1}
                    </div>
                    {index < steps.length - 1 && (
                        <div className="h-1 w-16 bg-gray-300"></div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default StepIndicator;