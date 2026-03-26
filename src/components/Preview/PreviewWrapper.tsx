import React from 'react';
import { useResume } from '../../context/ResumeContext';
import { ModernTemplate } from '../../templates/ModernTemplate';
import { CreativeTemplate } from '../../templates/CreativeTemplate';
import { MinimalTemplate } from '../../templates/MinimalTemplate';

export const PreviewWrapper: React.FC = () => {
    const { template } = useResume();

    const renderTemplate = () => {
        switch (template) {
            case 'modern':
                return <ModernTemplate />;
            case 'creative':
                return <CreativeTemplate />;
            case 'minimal':
                return <MinimalTemplate />;
            default:
                return <ModernTemplate />;
        }
    };

    return (
        <div className="flex-1 h-full bg-gray-200 dark:bg-gray-800 p-4 md:p-8 overflow-y-auto flex justify-center items-start">
            <div
                id="resume-preview"
                className="w-full max-w-[21cm] min-h-[29.7cm] shadow-2xl bg-white origin-top transition-all duration-300"
            >
                {renderTemplate()}
            </div>
        </div>
    );
};
