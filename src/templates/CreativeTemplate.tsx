import React from 'react';
import { Mail, Phone, MapPin, Link, Search, ExternalLink } from 'lucide-react';
import { useResume } from '../context/ResumeContext';
import type { Education, Experience, Project } from '../types/resume';

export const CreativeTemplate: React.FC = () => {
    const { resumeData } = useResume();
    const { header, summary, education, experience, projects, skills, certifications, achievements } = resumeData;

    return (
        <div className="bg-white text-gray-800 w-full max-w-[800px] mx-auto shadow-lg flex font-sans">
            {/* Left Column (Sidebar) */}
            <div className="w-1/3 bg-gray-900 text-white p-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold leading-tight uppercase">{header.name}</h1>
                    <p className="text-primary-400 font-medium mt-2">{header.title}</p>
                </div>

                <div className="space-y-4 text-sm text-gray-300">
                    <h2 className="text-primary-400 font-bold uppercase tracking-wider border-b border-gray-700 pb-1 mb-3">Contact</h2>
                    {header.email && <div className="flex items-center gap-2"><Mail size={14} className="text-primary-400" /> {header.email}</div>}
                    {header.phone && <div className="flex items-center gap-2"><Phone size={14} className="text-primary-400" /> {header.phone}</div>}
                    {header.location && <div className="flex items-center gap-2"><MapPin size={14} className="text-primary-400" /> {header.location}</div>}
                    {header.linkedIn && <div className="flex items-center gap-2 truncate"><Link size={14} className="text-primary-400" /> {header.linkedIn}</div>}
                    {header.github && <div className="flex items-center gap-2 truncate"><Search size={14} className="text-primary-400" /> {header.github}</div>}
                </div>

                <div className="mt-8 space-y-6">
                    {skills.technical.length > 0 && (
                        <div>
                            <h2 className="text-primary-400 font-bold uppercase tracking-wider border-b border-gray-700 pb-1 mb-3">Skills</h2>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {skills.technical.map((skill: string, i: number) => (
                                    <span key={i} className="px-2 py-1 bg-gray-800 rounded text-xs">{skill}</span>
                                ))}
                            </div>
                        </div>
                    )}

                    {skills.tools.length > 0 && (
                        <div>
                            <h2 className="text-primary-400 font-bold uppercase tracking-wider border-b border-gray-700 pb-1 mb-3">Tools</h2>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {skills.tools.map((tool: string, i: number) => (
                                    <span key={i} className="px-2 py-1 bg-gray-800 rounded text-xs">{tool}</span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {(certifications.length > 0 || achievements.length > 0) && (
                    <div className="mt-8 space-y-6">
                        {certifications.some(c => c) && (
                            <div>
                                <h2 className="text-primary-400 font-bold uppercase tracking-wider border-b border-gray-700 pb-1 mb-3">Certifications</h2>
                                <ul className="mt-2 space-y-2 text-xs text-gray-300 list-disc list-inside">
                                    {certifications.filter(c => c).map((cert, i) => <li key={i}>{cert}</li>)}
                                </ul>
                            </div>
                        )}
                        {achievements.some(a => a) && (
                            <div>
                                <h2 className="text-primary-400 font-bold uppercase tracking-wider border-b border-gray-700 pb-1 mb-3">Achievements</h2>
                                <ul className="mt-2 space-y-2 text-xs text-gray-300 list-disc list-inside">
                                    {achievements.filter(a => a).map((ach, i) => <li key={i}>{ach}</li>)}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Right Column (Main Content) */}
            <div className="flex-1 p-10 bg-white">
                {summary && (
                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wider mb-3 border-b-2 border-primary-500 pb-1">Profile</h2>
                        <p className="text-gray-700 leading-relaxed text-sm">{summary}</p>
                    </section>
                )}

                {experience.length > 0 && (
                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wider mb-4 border-b-2 border-primary-500 pb-1">Experience</h2>
                        <div className="space-y-6">
                            {experience.map((exp: Experience) => (
                                <div key={exp.id}>
                                    <div className="flex justify-between items-baseline text-sm">
                                        <h3 className="font-bold text-gray-900 text-base">{exp.position}</h3>
                                        <span className="text-gray-500 font-medium">{exp.startDate} — {exp.endDate}</span>
                                    </div>
                                    <p className="text-primary-600 font-bold text-xs uppercase mb-1">{exp.company}</p>
                                    <p className="text-gray-600 text-xs italic mb-2">{exp.location}</p>
                                    <p className="text-gray-700 text-sm whitespace-pre-line leading-snug">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {projects.length > 0 && (
                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wider mb-4 border-b-2 border-primary-500 pb-1">Projects</h2>
                        <div className="space-y-4">
                            {projects.map((project: Project) => (
                                <div key={project.id}>
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-bold text-gray-900 text-sm">{project.title}</h3>
                                        {project.link && (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary-600 text-xs flex items-center gap-1 hover:underline">
                                                <ExternalLink size={10} />
                                                View
                                            </a>
                                        )}
                                    </div>
                                    <p className="text-gray-700 text-xs mt-1">{project.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {education.length > 0 && (
                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wider mb-4 border-b-2 border-primary-500 pb-1">Education</h2>
                        <div className="space-y-4">
                            {education.map((edu: Education) => (
                                <div key={edu.id}>
                                    <div className="flex justify-between items-baseline text-sm">
                                        <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                                        <span className="text-gray-500 text-xs">{edu.startDate} — {edu.endDate}</span>
                                    </div>
                                    <p className="text-gray-700 text-sm">{edu.school}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};
