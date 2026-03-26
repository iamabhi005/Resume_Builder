import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ResumeData, TemplateType, Education, Experience, Project } from '../types/resume';

const INITIAL_DATA: ResumeData = {
    header: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1 234 567 890',
        linkedIn: 'linkedin.com/in/johndoe',
        github: 'github.com/johndoe',
        location: 'New York, NY',
        title: 'Software Engineer',
    },
    summary: 'Passionate software engineer with 5+ years of experience in building scalable web applications. Expert in React, Node.js, and Cloud architectures.',
    education: [
        {
            id: '1',
            school: 'University of Technology',
            degree: 'B.S. in Computer Science',
            startDate: '2016',
            endDate: '2020',
            location: 'New York, NY',
            description: 'Focused on algorithms, data structures, and web development.',
        },
    ],
    experience: [
        {
            id: '1',
            company: 'Tech Solutions Inc.',
            position: 'Senior Developer',
            startDate: '2020',
            endDate: 'Present',
            location: 'Remote',
            description: 'Leading a team of 5 developers to build a modern E-commerce platform using React and GraphQL.',
        },
    ],
    projects: [
        {
            id: '1',
            title: 'AI Resume Builder',
            description: 'A professional resume builder with real-time preview and AI-powered suggestions.',
            technologies: ['React', 'TypeScript', 'Tailwind CSS'],
        },
    ],
    skills: {
        technical: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'GraphQL'],
        tools: ['Git', 'Docker', 'AWS', 'VS Code', 'Figma'],
    },
    certifications: ['AWS Certified Solutions Architect', 'Meta Front-End Developer Professional Certificate'],
    achievements: ['Won the 2023 Internal Innovation Award', 'Published 3 technical articles on Medium'],
};

interface User {
    id: string;
    name: string;
    email?: string;
    phone?: string;
    photoURL?: string;
}

interface ResumeContextType {
    resumeData: ResumeData;
    setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
    template: TemplateType;
    setTemplate: React.Dispatch<React.SetStateAction<TemplateType>>;
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    updateHeader: (field: keyof ResumeData['header'], value: string) => void;
    addListitem: (section: 'education' | 'experience' | 'projects', item: Omit<Education | Experience | Project, 'id'>) => void;
    removeListItem: (section: 'education' | 'experience' | 'projects', id: string) => void;
    updateListItem: (section: 'education' | 'experience' | 'projects', id: string, item: Partial<Education | Experience | Project>) => void;
    user: User | null;
    login: (method: 'google' | 'email' | 'phone', data?: { email?: string, phone?: string }) => void;
    logout: () => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(() => {
        const saved = localStorage.getItem('resume_user');
        return saved ? JSON.parse(saved) : null;
    });

    const [resumeData, setResumeData] = useState<ResumeData>(() => {
        const saved = localStorage.getItem('resume_data');
        return saved ? JSON.parse(saved) : INITIAL_DATA;
    });

    const [template, setTemplate] = useState<TemplateType>(() => {
        return (localStorage.getItem('resume_template') as TemplateType) || 'modern';
    });

    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        return (localStorage.getItem('resume_theme') as 'light' | 'dark') || 'light';
    });

    useEffect(() => {
        localStorage.setItem('resume_user', JSON.stringify(user));
    }, [user]);

    useEffect(() => {
        localStorage.setItem('resume_data', JSON.stringify(resumeData));
    }, [resumeData]);

    useEffect(() => {
        localStorage.setItem('resume_template', template);
    }, [template]);

    useEffect(() => {
        localStorage.setItem('resume_theme', theme);
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

    const login = (method: 'google' | 'email' | 'phone', data?: { email?: string, phone?: string }) => {
        // Mock login
        const mockUser: User = {
            id: crypto.randomUUID(),
            name: method === 'google' ? 'Google User' : (data?.email || data?.phone || 'New User'),
            email: data?.email,
            phone: data?.phone,
            photoURL: method === 'google' ? 'https://ui-avatars.com/api/?name=Google+User&background=random' : undefined,
        };
        setUser(mockUser);
    };

    const logout = () => {
        setUser(null);
    };

    const updateHeader = (field: keyof ResumeData['header'], value: string) => {
        setResumeData(prev => ({
            ...prev,
            header: { ...prev.header, [field]: value },
        }));
    };

    const addListitem = (section: 'education' | 'experience' | 'projects', item: any) => {
        setResumeData(prev => ({
            ...prev,
            [section]: [...(prev[section] as any[]), { ...item, id: crypto.randomUUID() }],
        }));
    };

    const removeListItem = (section: 'education' | 'experience' | 'projects', id: string) => {
        setResumeData(prev => ({
            ...prev,
            [section]: (prev[section] as any[]).filter((item: any) => item.id !== id),
        }));
    };

    const updateListItem = (section: 'education' | 'experience' | 'projects', id: string, updatedItem: any) => {
        setResumeData(prev => ({
            ...prev,
            [section]: (prev[section] as any[]).map((item: any) => (item.id === id ? { ...item, ...updatedItem } : item)),
        }));
    };

    return (
        <ResumeContext.Provider
            value={{
                resumeData,
                setResumeData,
                template,
                setTemplate,
                theme,
                toggleTheme,
                updateHeader,
                addListitem,
                removeListItem,
                updateListItem,
                user,
                login,
                logout,
            }}
        >
            {children}
        </ResumeContext.Provider>
    );
};

export const useResume = () => {
    const context = useContext(ResumeContext);
    if (!context) throw new Error('useResume must be used within a ResumeProvider');
    return context;
};
