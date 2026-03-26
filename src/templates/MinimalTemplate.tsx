import React from 'react';
import { useResume } from '../context/ResumeContext';
import { ExternalLink } from 'lucide-react';
import type { Education, Experience, Project } from '../types/resume';

export const MinimalTemplate: React.FC = () => {
    const { resumeData } = useResume();
    const { header, summary, education, experience, projects, skills, certifications, achievements } = resumeData;

    return (
        <div className="bg-white text-slate-800 w-full max-w-[800px] mx-auto shadow-lg p-10 md:p-16 font-serif">
            {/* Header */}
            <header className="text-center mb-10">
                <h1 className="text-5xl font-light text-slate-900 tracking-tight mb-2">{header.name}</h1>
                <p className="text-lg text-slate-500 uppercase tracking-widest font-light">{header.title}</p>

                <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 mt-6 text-sm text-slate-400 border-t border-b border-slate-100 py-3 mx-auto max-w-2xl">
                    {header.email && <span>{header.email}</span>}
                    {header.phone && <span>{header.phone}</span>}
                    {header.location && <span>{header.location}</span>}
                    {header.linkedIn && <span>LinkedIn</span>}
                    {header.github && <span>GitHub</span>}
                </div>
            </header>

            {/* Summary */}
            {summary && (
                <section className="mb-12 max-w-3xl mx-auto text-center">
                    <p className="text-slate-600 leading-relaxed italic text-lg">"{summary}"</p>
                </section>
            )}

            {/* Experience */}
            {experience.length > 0 && (
                <section className="mb-12">
                    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-8 text-center">Experience</h2>
                    <div className="space-y-10">
                        {experience.map((exp: Experience) => (
                            <div key={exp.id} className="grid grid-cols-4 gap-8">
                                <div className="col-span-1 text-right text-sm text-slate-400 font-light">
                                    {exp.startDate} — {exp.endDate}
                                </div>
                                <div className="col-span-3">
                                    <h3 className="font-bold text-slate-900 text-lg">{exp.company}</h3>
                                    <p className="text-slate-500 font-medium mb-3 italic">{exp.position}</p>
                                    <p className="text-slate-600 text-sm leading-relaxed">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Education */}
            {education.length > 0 && (
                <section className="mb-12">
                    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-8 text-center">Education</h2>
                    <div className="space-y-6">
                        {education.map((edu: Education) => (
                            <div key={edu.id} className="grid grid-cols-4 gap-8">
                                <div className="col-span-1 text-right text-sm text-slate-400 font-light">
                                    {edu.startDate} — {edu.endDate}
                                </div>
                                <div className="col-span-3">
                                    <h3 className="font-bold text-slate-900">{edu.school}</h3>
                                    <p className="text-slate-600 text-sm">{edu.degree}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Projects */}
            {projects.length > 0 && (
                <section className="mb-12">
                    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-8 text-center">Featured Projects</h2>
                    <div className="space-y-8">
                        {projects.map((project: Project) => (
                            <div key={project.id} className="grid grid-cols-4 gap-8">
                                <div className="col-span-1 text-right pt-1">
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-600 transition-colors">
                                            <ExternalLink size={16} className="ml-auto" />
                                        </a>
                                    )}
                                </div>
                                <div className="col-span-3">
                                    <h3 className="font-bold text-slate-900">{project.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mt-1">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Skills */}
            <section className="mb-12">
                <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-8 text-center">Expertise</h2>
                <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-sm px-10">
                    <div className="text-center">
                        <h3 className="font-bold text-slate-900 mb-2 border-b border-slate-900 inline-block">Technical</h3>
                        <p className="text-slate-600 leading-loose">{skills.technical.join(', ')}</p>
                    </div>
                    <div className="text-center">
                        <h3 className="font-bold text-slate-900 mb-2 border-b border-slate-900 inline-block">Tools</h3>
                        <p className="text-slate-600 leading-loose">{skills.tools.join(', ')}</p>
                    </div>
                </div>
            </section>

            {/* Certifications & Achievements */}
            {(certifications.length > 0 || achievements.length > 0) && (
                <section className="mb-12">
                    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-8 text-center">Honors & Certifications</h2>
                    <div className="grid grid-cols-2 gap-12 max-w-2xl mx-auto">
                        {certifications.some(c => c) && (
                            <div>
                                <h3 className="font-bold text-slate-900 mb-4 text-sm text-center">Certifications</h3>
                                <ul className="space-y-2 text-sm text-slate-600">
                                    {certifications.filter(c => c).map((cert, i) => <li key={i} className="text-center">{cert}</li>)}
                                </ul>
                            </div>
                        )}
                        {achievements.some(a => a) && (
                            <div>
                                <h3 className="font-bold text-slate-900 mb-4 text-sm text-center">Achievements</h3>
                                <ul className="space-y-2 text-sm text-slate-600">
                                    {achievements.filter(a => a).map((ach, i) => <li key={i} className="text-center">{ach}</li>)}
                                </ul>
                            </div>
                        )}
                    </div>
                </section>
            )}
        </div>
    );
};
