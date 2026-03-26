export interface Education {
    id: string;
    school: string;
    degree: string;
    startDate: string;
    endDate: string;
    location: string;
    description: string;
}

export interface Experience {
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    location: string;
    description: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

export interface Skill {
    id: string;
    name: string;
    level?: 'Beginner' | 'Intermediate' | 'Expert';
}

export interface ResumeData {
    header: {
        name: string;
        email: string;
        phone: string;
        linkedIn: string;
        github: string;
        location: string;
        title: string;
    };
    summary: string;
    education: Education[];
    experience: Experience[];
    projects: Project[];
    skills: {
        technical: string[];
        tools: string[];
    };
    certifications: string[];
    achievements: string[];
}

export type TemplateType = 'modern' | 'creative' | 'minimal';

export interface ResumeState {
    data: ResumeData;
    template: TemplateType;
    theme: 'light' | 'dark';
}
