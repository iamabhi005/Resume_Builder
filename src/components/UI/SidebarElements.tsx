import React from 'react';

interface SidebarSectionProps {
    title: string;
    icon: any;
    children: React.ReactNode;
    isOpen?: boolean;
    onToggle?: () => void;
}

export const SidebarSection: React.FC<SidebarSectionProps> = ({ title, icon: Icon, children, isOpen = true, onToggle }) => {
    return (
        <div className="border-b border-gray-200 dark:border-gray-700 last:border-0">
            <button
                onClick={onToggle}
                className="flex items-center justify-between w-full p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
                <div className="flex items-center gap-3">
                    <Icon size={20} className="text-primary-500" />
                    <span className="font-semibold text-gray-700 dark:text-gray-200">{title}</span>
                </div>
            </button>
            {isOpen && (
                <div className="p-4 pt-0 space-y-4">
                    {children}
                </div>
            )}
        </div>
    );
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const Input: React.FC<InputProps> = ({ label, ...props }) => {
    return (
        <div className="space-y-1">
            <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {label}
            </label>
            <input
                {...props}
                className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all dark:text-white"
            />
        </div>
    );
};

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, ...props }) => {
    return (
        <div className="space-y-1">
            <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {label}
            </label>
            <textarea
                {...props}
                className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all dark:text-white"
                rows={3}
            />
        </div>
    );
};
