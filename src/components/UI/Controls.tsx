import React from 'react';
import { Palette, Download, Moon, Sun, ArrowRight } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';
import { exportToPDF } from '../../utils/export';
import type { TemplateType } from '../../types/resume';

export const Controls: React.FC = () => {
    const { template, setTemplate, theme, toggleTheme, resumeData, user, logout } = useResume();

    const handleDownload = () => {
        exportToPDF('resume-preview', `${resumeData.header.name.replace(/\s+/g, '_')}_Resume.pdf`);
    };

    const templates: { id: TemplateType; name: string }[] = [
        { id: 'modern', name: 'Modern' },
        { id: 'creative', name: 'Creative' },
        { id: 'minimal', name: 'Minimal' },
    ];

    return (
        <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm no-print">
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <Palette size={18} className="text-gray-500" />
                    <select
                        value={template}
                        onChange={(e) => setTemplate(e.target.value as TemplateType)}
                        className="bg-transparent text-sm font-medium focus:outline-none dark:text-white"
                    >
                        {templates.map((t) => (
                            <option key={t.id} value={t.id}>{t.name} Template</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 pr-4 border-r border-gray-200 dark:border-gray-800">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-bold dark:text-white leading-tight">{user?.name}</p>
                        <p className="text-xs text-gray-500 leading-tight">{user?.email || user?.phone || 'Premium Member'}</p>
                    </div>
                    {user?.photoURL ? (
                        <img src={user.photoURL} alt="Avatar" className="w-9 h-9 rounded-full ring-2 ring-primary-500/20" />
                    ) : (
                        <div className="w-9 h-9 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 flex items-center justify-center font-bold text-sm">
                            {user?.name.charAt(0)}
                        </div>
                    )}
                </div>

                <button
                    onClick={toggleTheme}
                    className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                    title="Toggle Theme"
                >
                    {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </button>
                <button
                    onClick={handleDownload}
                    className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-all shadow-md active:scale-95"
                >
                    <Download size={18} />
                    Download PDF
                </button>
                <button
                    onClick={logout}
                    className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors"
                    title="Logout"
                >
                    <ArrowRight size={20} />
                </button>
            </div>
        </div>
    );
};
