import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Github, Sun, Moon, Briefcase, Award, GraduationCap, Link, Download, Code, Target, Users, Sparkles, ChevronDown } from 'lucide-react';

// --- DATA OBJECT ---
const resumeData = {
    name: "Harsh Verma",
    title: "R and RShiny Expert - Clinical",
    location: "Delhi, India",
    phone: "+91 9810669477",
    email: "analyticswithharsh@gmail.com",
    githubUrl: "https://github.com/insightsurge",
    githubHandle: "insightsurge",
    shortBio: "A Data Science and Analytics Lead with 7+ years of experience specializing in building enterprise-grade R/Shiny applications for the clinical trial domain.",
    fullSummary: "A results-driven RShiny Tech and Project Lead with a proven track record of developing enterprise-grade R/Shiny applications for the life sciences industry. My expertise lies in architecting and delivering robust, interactive dashboards for clinical trial analysis, adhering strictly to CDISC standards like SDTM and ADaM. I leverage modern R frameworks like Golem and Rhino, implement robust CI/CD pipelines, and use the Teal framework to build and deploy scalable, maintainable solutions. As a leader, I manage the full project lifecycle, direct client engagement, and foster a culture of continuous improvement through Agile and Scrum methodologies. This specialized clinical focus is complemented by a strong foundation in data science across other domains, including credit risk and private equity.",
    experience: [
        {
            role: "RShiny Tech and Project Lead",
            company: "Appsilon",
            companyUrl: "https://www.appsilon.com/",
            location: "Delhi (Remote)",
            period: "Apr 2023 - Present",
            responsibilities: {
                "Key Responsibilities": [
                    "Led client engagement and project lifecycle using Agile methodologies (Scrum), ensuring on-time delivery and stakeholder satisfaction.",
                    "Architected and developed scalable R/Shiny applications and modules for clinical reporting (TLGs) from CDISC ADaM datasets.",
                    "Engineered dynamic data visualization dashboards using plotly and echarts4r, and created interactive data editing tools with rhandsontable.",
                    "Established comprehensive CI/CD pipelines with GitHub Actions for automated testing (testthat, shinytest2) and deployment of R packages and Shiny apps.",
                    "Spearheaded internal initiatives, including developing a knowledge-sharing platform with Quarto and contributing to pre-sales POCs."
                ]
            }
        },
        {
            role: "Senior Analyst - Data Science & Core Analytics",
            company: "equipped.ai",
            companyUrl: "https://www.equipped.ai/",
            location: "Noida",
            period: "Jul 2020 - Mar 2023",
            responsibilities: {
                "Key Responsibilities": [
                    "Served as the primary point of contact for BI developments, managing stakeholder requirements and project planning.",
                    "Led the development of new RShiny and PowerBI dashboards, reducing manual reporting hours by over 85% through automation.",
                    "Developed and expanded an in-house R package to streamline ETL tasks and improve data quality assurance."
                ]
            }
        },
        {
            role: "Data Scientist",
            company: "Biz2Credit",
            companyUrl: "https://www.biz2credit.com/",
            location: "Noida",
            period: "Mar 2020 - Jul 2020",
            responsibilities: {
                "Key Responsibilities": [
                    "Contributed to the development of an in-house scorecard model to assess borrower risk and flag potential defaults."
                ]
            }
        },
        {
            role: "Data Scientist",
            company: "Algoscale Technologies Inc",
            companyUrl: "https://algoscale.com/",
            location: "Noida",
            period: "Feb 2018 - Mar 2020",
            responsibilities: {
                "Key Responsibilities": [
                    "Led the development & deployment of an analytic solution product for a healthcare supply-chain giant.",
                    "Completed a cross-team effort to develop a large-scale sales prediction pipeline for one of the largest hypermarket & supermarket retail chains in Russia.",
                    "Conducted successful R&D of an association mining algorithm to optimize bill-of-materials for hospitals."
                ]
            }
        }
    ],
    skills: [
        { category: "Languages & Databases", items: ["R", "Python", "SQL", "JavaScript", "CSS"] },
        { category: "R Ecosystem", items: ["Shiny", "Tidyverse", "Golem", "Rhino", "Plumber", "Devtools", "RMarkdown", "Quarto"] },
        { category: "Testing", items: ["testthat", "shinytest2", "checkmate"] },
        { category: "DevOps & Platforms", items: ["Git", "GitHub", "GitLab", "Docker", "CI/CD", "Posit Connect", "RStudio Workbench"] },
        { category: "LLM Integration", items: ["Gemini", "ChatGPT", "Claude API", "Github Co-pilot"] },
    ],
    education: [
         {
            degree: "Bachelor of Technology, Computer Science Engineering",
            institution: "GGSIPU, Dwarka",
            period: "2013 - 2017"
        },
        {
            degree: "12th Standard: CBSE, Science",
            institution: "Vivekanand Public School, Delhi",
            period: "2012 - 2013"
        },
        {
            degree: "10th Standard: CBSE, CCE",
            institution: "Vivekanand Public School, Delhi",
            period: "2010 - 2011"
        }
    ],
     coreCompetencies: [
        {
            title: "Project & Client Management",
            icon: <Users />,
            skills: ["Agile Project Management", "Client Relationship Building", "Strategic Resource Estimation", "Sprint Planning & Retrospectives"]
        },
        {
            title: "Technical & Analytical Expertise",
            icon: <Code />,
            skills: ["R & RShiny Development", "Automated Testing & CI/CD", "Interactive Data Visualization", "Advanced Data Pipelining"]
        },
        {
            title: "Clinical Analytics",
            icon: <Target />,
            skills: ["Clinical Trial Analysis", "TLG Generation", "Pharmaverse Proficiency", "Open Source Contributions (R)"]
        }
    ],
    certifications: [
        "Data Science with R, ScholarsPro (Gurugram)",
        "Machine Learning, Coursera (Stanford University Online)",
        "Big Data & Hadoop, Edureka (Online)",
        "Apache Spark, Edureka (Online)"
    ],
};

// Reusable Section Component
const Section = ({ title, children, id }) => (
    <section id={id} className="mb-16 scroll-m-20">
        <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-8">
            {title}
        </h2>
        {children}
    </section>
);

const CompetencyCard = ({ comp, isOpen, onClick }) => {
    const contentRef = useRef(null);
    return (
        <div className="bg-slate-200/50 dark:bg-slate-800/50 p-4 rounded-lg transition-all duration-300">
            <button onClick={onClick} className="w-full text-left">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <span className="text-indigo-500 dark:text-indigo-400">{comp.icon}</span>
                        <h3 className="font-bold text-slate-800 dark:text-slate-100">{comp.title}</h3>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </div>
            </button>
            <div 
                ref={contentRef}
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px' }}
            >
                <ul className="mt-3 pl-4 list-disc list-inside space-y-1 text-sm text-slate-600 dark:text-slate-300">
                    {comp.skills.map((skill, i) => <li key={i}>{skill}</li>)}
                </ul>
            </div>
        </div>
    )
}

// Main App Component
const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeSection, setActiveSection] = useState('about');
    const [expandedCompetency, setExpandedCompetency] = useState(null);
    
    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
        document.documentElement.style.scrollBehavior = 'smooth';

        const sections = ['about', 'competencies', 'experience', 'skills', 'education', 'certifications'];
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { rootMargin: '-30% 0px -70% 0px' });

        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        
        const script = document.createElement('script');
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
        script.async = true;
        document.body.appendChild(script);
        
        return () => {
             if (document.body.contains(script)) {
                document.body.removeChild(script);
             }
        };
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode(!isDarkMode);
    
    const handleCompetencyClick = (title) => {
        setExpandedCompetency(expandedCompetency === title ? null : title);
    };

    const handleDownload = () => {
         const element = document.getElementById('main-content');
        if (element && window.html2pdf) {
            const opt = {
                margin:       [0.5, 0.5, 0.5, 0.5],
                filename:     'Harsh_Verma_Resume.pdf',
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { scale: 2, useCORS: true, logging: true, letterRendering: true },
                jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            const nav = document.getElementById('primary-nav');
            if (nav) nav.style.display = 'none';
            window.html2pdf().from(element).set(opt).save().then(() => {
                if (nav) nav.style.display = 'block';
            });
        }
    };
    
    const navLinks = [
        { id: 'about', label: 'About' },
        { id: 'competencies', label: 'Competencies' },
        { id: 'experience', label: 'Experience' },
        { id: 'skills', label: 'Skills' },
        { id: 'education', label: 'Education' },
        { id: 'certifications', label: 'Certifications' }
    ];
    
    return (
        <div className="bg-slate-100 dark:bg-slate-900 leading-relaxed text-slate-700 dark:text-slate-400 antialiased selection:bg-indigo-300 selection:text-indigo-900">
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
                <div className="lg:flex lg:justify-between lg:gap-16">
                    
                    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-5/12 lg:flex-col lg:justify-between lg:py-24">
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-5xl">
                                {resumeData.name}
                            </h1>
                            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-800 dark:text-slate-100 sm:text-xl">
                                {resumeData.title}
                            </h2>
                            <p className="mt-4 max-w-xs leading-normal">
                                {resumeData.shortBio}
                            </p>
                            
                            <nav id="primary-nav" className="hidden z-10 mt-16 w-max lg:block" aria-label="In-page jump links">
                                <ul className="flex flex-col space-y-3">
                                    {navLinks.map(link => (
                                        <li key={link.id}>
                                            <a className="group flex items-center py-2" href={`#${link.id}`}>
                                                <span className={`nav-indicator mr-4 h-px w-8 bg-slate-500 dark:bg-slate-600 transition-all duration-300 group-hover:w-16 group-hover:bg-slate-800 dark:group-hover:bg-slate-200 ${activeSection === link.id ? 'w-16 bg-slate-800 dark:bg-slate-200' : ''}`}></span>
                                                <span className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-500 group-hover:text-slate-800 dark:group-hover:text-slate-200 ${activeSection === link.id ? 'text-slate-800 dark:text-slate-200' : ''}`}>
                                                    {link.label}
                                                </span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
                            <li className="mr-5"><a href={resumeData.githubUrl} target="_blank" rel="noreferrer noopener" className="block text-slate-500 hover:text-slate-800 dark:hover:text-slate-100 transition-colors"><span className="sr-only">GitHub</span><Github className="h-6 w-6"/></a></li>
                            <li className="mr-5"><a href={`mailto:${resumeData.email}`} className="block text-slate-500 hover:text-slate-800 dark:hover:text-slate-100 transition-colors"><span className="sr-only">Email</span><Mail className="h-6 w-6"/></a></li>
                            <li className="mr-5"><a href={`tel:${resumeData.phone}`} className="block text-slate-500 hover:text-slate-800 dark:hover:text-slate-100 transition-colors"><span className="sr-only">Phone</span><Phone className="h-6 w-6"/></a></li>
                             <li className="mr-5">
                                <button onClick={toggleTheme} className="block text-slate-500 hover:text-slate-800 dark:hover:text-slate-100 transition-colors">
                                    {isDarkMode ? <Sun className="h-6 w-6"/> : <Moon className="h-6 w-6"/>}
                                </button>
                            </li>
                             <li>
                                <button onClick={handleDownload} className="block text-slate-500 hover:text-slate-800 dark:hover:text-slate-100 transition-colors">
                                    <Download className="h-6 w-6"/>
                                </button>
                            </li>
                        </ul>
                    </header>
                    
                    <main id="main-content" className="pt-24 lg:w-7/12 lg:py-24">
                        <Section id="about" title="About">
                            <p className="mb-4">{resumeData.fullSummary}</p>
                        </Section>
                        
                        <Section id="competencies" title="Core Competencies">
                             <div className="space-y-4">
                                {resumeData.coreCompetencies.map((comp) => (
                                    <CompetencyCard 
                                        key={comp.title} 
                                        comp={comp}
                                        isOpen={expandedCompetency === comp.title}
                                        onClick={() => handleCompetencyClick(comp.title)}
                                    />
                                ))}
                            </div>
                        </Section>

                        <Section id="experience" title="Experience">
                            <ol className="group/list">
                            {resumeData.experience.map((job, index) => (
                                <li key={index} className="mb-12">
                                     <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-200/50 dark:lg:group-hover:bg-slate-800/50"></div>
                                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">{job.period}</header>
                                        <div className="z-10 sm:col-span-6">
                                            <h3 className="font-medium leading-snug text-slate-800 dark:text-slate-100">
                                                <div>
                                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-800 dark:text-slate-100 hover:text-indigo-500 dark:hover:text-indigo-300 focus-visible:text-indigo-500 text-base" href={job.companyUrl} target="_blank" rel="noreferrer noopener">
                                                       {job.role} · {job.company}
                                                    </a>
                                                </div>
                                            </h3>
                                            <ul className="mt-2 list-disc list-inside space-y-2 text-sm">
                                                {Object.values(job.responsibilities).flat().map((point, i) => <li key={i}>{point}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            ))}
                            </ol>
                        </Section>

                        <Section id="skills" title="Skills">
                             <div className="space-y-6">
                                {resumeData.skills.map(skillCat => (
                                    <div key={skillCat.category}>
                                        <h3 className="text-base font-semibold text-slate-700 dark:text-slate-300 mb-3">{skillCat.category}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {skillCat.items.map(item => <span key={item} className="text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300 py-1 px-3 rounded-full">{item}</span>)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Section>

                        <Section id="education" title="Education">
                            {resumeData.education.map((edu, index) => (
                                 <div key={index} className="mb-6 last:mb-0">
                                    <h3 className="text-base font-medium text-slate-800 dark:text-white">{edu.degree}</h3>
                                    <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mt-1">{edu.institution}</p>
                                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mt-1">{edu.period}</p>
                                </div>
                            ))}
                        </Section>
                        
                       <Section id="certifications" title="Certifications">
                           <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300">
                              {resumeData.certifications.map((cert, index) => <li key={index}>{cert}</li>)}
                           </ul>
                       </Section>

                    </main>
                </div>
            </div>
        </div>
    );
};

export default App;
