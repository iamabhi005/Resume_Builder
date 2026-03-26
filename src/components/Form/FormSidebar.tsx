import React, { useState } from 'react';
import { User, GraduationCap, Briefcase, Code, Target, Settings, Award } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';
import { SidebarSection, Input, TextArea } from '../UI/SidebarElements';

export const FormSidebar: React.FC = () => {
    const { resumeData, updateHeader, setResumeData, addListitem, removeListItem, updateListItem } = useResume();
    const [activeSection, setActiveSection] = useState<string | null>('header');

    const toggleSection = (section: string) => {
        setActiveSection(activeSection === section ? null : section);
    };

    return (
        <div className="flex flex-col h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 overflow-y-auto no-print">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400">Resume Builder</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Create your professional resume</p>
            </div>

            <SidebarSection
                title="Header Info"
                icon={User}
                isOpen={activeSection === 'header'}
                onToggle={() => toggleSection('header')}
            >
                <div className="grid grid-cols-2 gap-4">
                    <Input
                        label="Full Name"
                        placeholder="John Doe"
                        value={resumeData.header.name}
                        onChange={(e) => updateHeader('name', e.target.value)}
                    />
                    <Input
                        label="Job Title"
                        placeholder="Software Engineer"
                        value={resumeData.header.title}
                        onChange={(e) => updateHeader('title', e.target.value)}
                    />
                </div>
                <Input
                    label="Email"
                    type="email"
                    placeholder="john@example.com"
                    value={resumeData.header.email}
                    onChange={(e) => updateHeader('email', e.target.value)}
                />
                <div className="grid grid-cols-2 gap-4">
                    <Input
                        label="Phone"
                        placeholder="+1 234 567 890"
                        value={resumeData.header.phone}
                        onChange={(e) => updateHeader('phone', e.target.value)}
                    />
                    <Input
                        label="Location"
                        placeholder="New York, NY"
                        value={resumeData.header.location}
                        onChange={(e) => updateHeader('location', e.target.value)}
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Input
                        label="LinkedIn"
                        placeholder="linkedin.com/in/..."
                        value={resumeData.header.linkedIn}
                        onChange={(e) => updateHeader('linkedIn', e.target.value)}
                    />
                    <Input
                        label="GitHub"
                        placeholder="github.com/..."
                        value={resumeData.header.github}
                        onChange={(e) => updateHeader('github', e.target.value)}
                    />
                </div>
            </SidebarSection>

            <SidebarSection
                title="Summary"
                icon={Target}
                isOpen={activeSection === 'summary'}
                onToggle={() => toggleSection('summary')}
            >
                <TextArea
                    label="Professional Summary"
                    placeholder="Briefly describe your career goals and key achievements..."
                    value={resumeData.summary}
                    onChange={(e) => setResumeData(prev => ({ ...prev, summary: e.target.value }))}
                />
            </SidebarSection>

            <SidebarSection
                title="Education"
                icon={GraduationCap}
                isOpen={activeSection === 'education'}
                onToggle={() => toggleSection('education')}
            >
                {resumeData.education.map((edu) => (
                    <div key={edu.id} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg space-y-4 relative group">
                        <button
                            onClick={() => removeListItem('education', edu.id)}
                            className="absolute top-2 right-2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            Remove
                        </button>
                        <Input
                            label="School"
                            value={edu.school}
                            onChange={(e) => updateListItem('education', edu.id, { school: e.target.value })}
                        />
                        <Input
                            label="Degree"
                            value={edu.degree}
                            onChange={(e) => updateListItem('education', edu.id, { degree: e.target.value })}
                        />
                        <div className="grid grid-cols-2 gap-4">
                            <Input
                                label="Start Date"
                                value={edu.startDate}
                                onChange={(e) => updateListItem('education', edu.id, { startDate: e.target.value })}
                            />
                            <Input
                                label="End Date"
                                value={edu.endDate}
                                onChange={(e) => updateListItem('education', edu.id, { endDate: e.target.value })}
                            />
                        </div>
                        <Input
                            label="Location"
                            value={edu.location}
                            onChange={(e) => updateListItem('education', edu.id, { location: e.target.value })}
                        />
                    </div>
                ))}
                <button
                    onClick={() => addListitem('education', { school: '', degree: '', startDate: '', endDate: '', location: '', description: '' } as any)}
                    className="w-full py-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-500 hover:text-primary-500 hover:border-primary-500 transition-all flex items-center justify-center gap-2"
                >
                    Add Education
                </button>
            </SidebarSection>

            <SidebarSection
                title="Experience"
                icon={Briefcase}
                isOpen={activeSection === 'experience'}
                onToggle={() => toggleSection('experience')}
            >
                {resumeData.experience.map((exp) => (
                    <div key={exp.id} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg space-y-4 relative group">
                        <button
                            onClick={() => removeListItem('experience', exp.id)}
                            className="absolute top-2 right-2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            Remove
                        </button>
                        <Input
                            label="Company"
                            value={exp.company}
                            onChange={(e) => updateListItem('experience', exp.id, { company: e.target.value })}
                        />
                        <Input
                            label="Position"
                            value={exp.position}
                            onChange={(e) => updateListItem('experience', exp.id, { position: e.target.value })}
                        />
                        <div className="grid grid-cols-2 gap-4">
                            <Input
                                label="Start Date"
                                value={exp.startDate}
                                onChange={(e) => updateListItem('experience', exp.id, { startDate: e.target.value })}
                            />
                            <Input
                                label="End Date"
                                value={exp.endDate}
                                onChange={(e) => updateListItem('experience', exp.id, { endDate: e.target.value })}
                            />
                        </div>
                        <TextArea
                            label="Job Description"
                            value={exp.description}
                            onChange={(e) => updateListItem('experience', exp.id, { description: e.target.value })}
                        />
                    </div>
                ))}
                <button
                    onClick={() => addListitem('experience', { company: '', position: '', startDate: '', endDate: '', location: '', description: '' } as any)}
                    className="w-full py-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-500 hover:text-primary-500 hover:border-primary-500 transition-all flex items-center justify-center gap-2"
                >
                    Add Experience
                </button>
            </SidebarSection>

            <SidebarSection
                title="Projects"
                icon={Code}
                isOpen={activeSection === 'projects'}
                onToggle={() => toggleSection('projects')}
            >
                {resumeData.projects.map((project) => (
                    <div key={project.id} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg space-y-4 relative group">
                        <button
                            onClick={() => removeListItem('projects', project.id)}
                            className="absolute top-2 right-2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            Remove
                        </button>
                        <Input
                            label="Project Title"
                            value={project.title}
                            onChange={(e) => updateListItem('projects', project.id, { title: e.target.value })}
                        />
                        <Input
                            label="Project Link (GitHub/Demo)"
                            placeholder="https://..."
                            value={project.link || ''}
                            onChange={(e) => updateListItem('projects', project.id, { link: e.target.value })}
                        />
                        <TextArea
                            label="Description"
                            value={project.description}
                            onChange={(e) => updateListItem('projects', project.id, { description: e.target.value })}
                        />
                    </div>
                ))}
                <button
                    onClick={() => addListitem('projects', { title: '', description: '', technologies: [], link: '' } as any)}
                    className="w-full py-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-500 hover:text-primary-500 hover:border-primary-500 transition-all flex items-center justify-center gap-2"
                >
                    Add Project
                </button>
            </SidebarSection>

            <SidebarSection
                title="Skills"
                icon={Settings}
                isOpen={activeSection === 'skills'}
                onToggle={() => toggleSection('skills')}
            >
                <TextArea
                    label="Technical Skills (comma separated)"
                    value={resumeData.skills.technical.join(', ')}
                    onChange={(e) => setResumeData(prev => ({
                        ...prev,
                        skills: { ...prev.skills, technical: e.target.value.split(',').map(s => s.trim()) }
                    }))}
                />
                <TextArea
                    label="Tools & Platforms (comma separated)"
                    value={resumeData.skills.tools.join(', ')}
                    onChange={(e) => setResumeData(prev => ({
                        ...prev,
                        skills: { ...prev.skills, tools: e.target.value.split(',').map(s => s.trim()) }
                    }))}
                />
            </SidebarSection>

            <SidebarSection
                title="Certifications & Achievements"
                icon={Award}
                isOpen={activeSection === 'certifications'}
                onToggle={() => toggleSection('certifications')}
            >
                <TextArea
                    label="Certifications (comma separated)"
                    value={resumeData.certifications.join(', ')}
                    onChange={(e) => setResumeData(prev => ({ ...prev, certifications: e.target.value.split(',').map(s => s.trim()) }))}
                />
                <TextArea
                    label="Achievements (comma separated)"
                    value={resumeData.achievements.join(', ')}
                    onChange={(e) => setResumeData(prev => ({ ...prev, achievements: e.target.value.split(',').map(s => s.trim()) }))}
                />
            </SidebarSection>

            <div className="p-6 mt-auto text-center text-xs text-gray-400 border-t border-gray-200 dark:border-gray-700">
                All data is saved automatically to local storage.
            </div>
        </div>
    );
};
