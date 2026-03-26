import React from 'react';
import { Mail, Phone, MapPin, Link, Search, ExternalLink } from 'lucide-react';
import { useResume } from '../context/ResumeContext';
import type { Education, Experience, Project } from '../types/resume';

export const ModernTemplate: React.FC = () => {
    const { resumeData } = useResume();
    const { header, summary, education, experience, projects, skills, certifications, achievements } = resumeData;

    return (
        <div className="bg-white text-gray-800 w-full max-w-[800px] mx-auto shadow-lg p-8 md:p-12 font-sans">
            {/* Header */}
            <header className="border-b-2 border-primary-500 pb-6 mb-6">
                <h1 className="text-4xl font-bold text-gray-900 uppercase tracking-tight">{header.name}</h1>
                <p className="text-xl text-primary-600 font-medium mt-1">{header.title}</p>

                <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
                    {header.email && (
                        <div className="flex items-center gap-1">
                            <Mail size={14} />
                            <span>{header.email}</span>
                        </div>
                    )}
                    {header.phone && (
                        <div className="flex items-center gap-1">
                            <Phone size={14} />
                            <span>{header.phone}</span>
                        </div>
                    )}
                    {header.location && (
                        <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{header.location}</span>
                        </div>
                    )}
                </div>

                <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                    {header.linkedIn && (
                        <div className="flex items-center gap-1">
                            <Link size={14} />
                            <span className="truncate max-w-[200px]">{header.linkedIn}</span>
                        </div>
                    )}
                    {header.github && (
                        <div className="flex items-center gap-1">
                            <Search size={14} />
                            <span className="truncate max-w-[200px]">{header.github}</span>
                        </div>
                    )}
                </div>
            </header>

            {/* Summary */}
            {summary && (
                <section className="mb-8">
                    <h2 className="text-lg font-bold text-primary-700 uppercase tracking-wider mb-2 border-l-4 border-primary-500 pl-3">Professional Summary</h2>
                    <p className="text-gray-700 leading-relaxed">{summary}</p>
                </section>
            )}

            {/* Experience */}
            {experience.length > 0 && (
                <section className="mb-8">
                    <h2 className="text-lg font-bold text-primary-700 uppercase tracking-wider mb-4 border-l-4 border-primary-500 pl-3">Work Experience</h2>
                    <div className="space-y-6">
                        {experience.map((exp: Experience) => (
                            <div key={exp.id}>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold text-gray-900">{exp.position}</h3>
                                        <p className="text-primary-600 font-medium">{exp.company}</p>
                                    </div>
                                    <div className="text-right text-sm text-gray-500">
                                        <p>{exp.startDate} — {exp.endDate}</p>
                                        <p>{exp.location}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 mt-2 text-sm whitespace-pre-line">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Education */}
            {education.length > 0 && (
                <section className="mb-8">
                    <h2 className="text-lg font-bold text-primary-700 uppercase tracking-wider mb-4 border-l-4 border-primary-500 pl-3">Education</h2>
                    <div className="space-y-4">
                        {education.map((edu: Education) => (
                            <div key={edu.id} className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                                    <p className="text-gray-700">{edu.school}</p>
                                </div>
                                <div className="text-right text-sm text-gray-500">
                                    <p>{edu.startDate} — {edu.endDate}</p>
                                    <p>{edu.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Skills */}
            <section className="mb-8">
                <h2 className="text-lg font-bold text-primary-700 uppercase tracking-wider mb-4 border-l-4 border-primary-500 pl-3">Skills</h2>
                <div className="grid grid-cols-2 gap-6">
                    {skills.technical.length > 0 && (
                        <div>
                            <h3 className="font-semibold text-gray-800 mb-2 text-sm uppercase">Technical</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.technical.map((skill: string, i: number) => (
                                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">{skill}</span>
                                ))}
                            </div>
                        </div>
                    )}
                    {skills.tools.length > 0 && (
                        <div>
                            <h3 className="font-semibold text-gray-800 mb-2 text-sm uppercase">Tools & Platforms</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.tools.map((tool: string, i: number) => (
                                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">{tool}</span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Projects */}
            {projects.length > 0 && (
                <section className="mb-8">
                    <h2 className="text-lg font-bold text-primary-700 uppercase tracking-wider mb-4 border-l-4 border-primary-500 pl-3">Projects</h2>
                    <div className="space-y-4">
                        {projects.map((project: Project) => (
                            <div key={project.id}>
                                <div className="flex justify-between items-center">
                                    <h3 className="font-bold text-gray-900">{project.title}</h3>
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary-600 text-xs flex items-center gap-1 hover:underline">
                                            <ExternalLink size={12} />
                                            View Project
                                        </a>
                                    )}
                                </div>
                                <p className="text-gray-700 text-sm mt-1">{project.description}</p>
                                {project.technologies && project.technologies.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.technologies.map((tech: string, i: number) => (
                                            <span key={i} className="text-primary-600 text-xs font-medium">#{tech}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Certifications & Achievements */}
            <div className="grid grid-cols-2 gap-8">
                {certifications.length > 0 && certifications.some((c: string) => c) && (
                    <section>
                        <h2 className="text-lg font-bold text-primary-700 uppercase tracking-wider mb-2 border-l-4 border-primary-500 pl-3">Certifications</h2>
                        <ul className="mt-2 space-y-2 text-sm text-gray-700 list-disc list-inside">
                            {certifications.filter((c: string) => c).map((cert: string, i: number) => (
                                <li key={i}>{cert}</li>
                            ))}
                        </ul>
                    </section>
                )}
                {achievements.length > 0 && achievements.some((a: string) => a) && (
                    <section>
                        <h2 className="text-lg font-bold text-primary-700 uppercase tracking-wider mb-2 border-l-4 border-primary-500 pl-3">Achievements</h2>
                        <ul className="mt-2 space-y-2 text-sm text-gray-700 list-disc list-inside">
                            {achievements.filter((a: string) => a).map((ach: string, i: number) => (
                                <li key={i}>{ach}</li>
                            ))}
                        </ul>
                    </section>
                )}
            </div>
        </div>
    );
};
