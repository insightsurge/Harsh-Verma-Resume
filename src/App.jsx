import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Github, Sun, Moon, Briefcase, BrainCircuit, Award, Coffee, Camera, Guitar, Wind, GraduationCap, Building, Link, User, Star, BriefcaseBusiness, BookOpen, Smile, FileText, Download } from 'lucide-react';

// Main Data Object
const resumeData = {
    name: "Harsh Verma",
    title: "R and RShiny Expert - Clinical",
    location: "Delhi, India",
    phone: "+91 9810669477",
    email: "analyticswithharsh@gmail.com",
    github: "https://github.com/insightsurge",
    headerSummary: "A results-driven RShiny Tech and Project Lead with a proven track record of developing enterprise-grade R/Shiny applications for the life sciences industry. My expertise lies in architecting and delivering robust, interactive dashboards for clinical trial analysis, adhering strictly to CDISC standards like SDTM and ADaM. I leverage modern R frameworks like Golem and Rhino, implement robust CI/CD pipelines, and use the Teal framework to build and deploy scalable, maintainable solutions. As a leader, I manage the full project lifecycle, direct client engagement, and foster a culture of continuous improvement through Agile and Scrum methodologies. This specialized clinical focus is complemented by a strong foundation in data science across other domains, including credit risk and private equity.",
    
    // Expanded summary for the "Professional Summary" tab
    expandedSummary: [
        "With over seven years of dedicated experience in data science and analytics, I have cultivated a specialized expertise in leading the development of high-impact R/Shiny applications for the life sciences sector. As an RShiny Tech and Project Lead, my primary focus is on accelerating clinical trial analysis and drug development by creating sophisticated, enterprise-level solutions.",
        "I possess a deep understanding of clinical data standards, including CDISC (SDTM/ADaM), and have a proven ability to architect and engineer robust, interactive dashboards that empower clinical scientists and stakeholders. My technical leadership extends to implementing modern R frameworks like Golem and Rhino and establishing comprehensive testing protocols with `testthat` and `shinytest2`, all integrated into automated CI/CD pipelines for continuous validation and deployment.",
        "This hands-on technical skill is paired with strong project management capabilities, where I direct the entire project lifecycle using Agile and Scrum methodologies to ensure transparent communication, on-time delivery, and strategic client engagement. While my recent work is centered in the clinical domain, my foundational experience in finance and supply-chain analytics provides me with a versatile, problem-solving mindset, allowing me to deliver value across diverse industries."
    ],
    
    // Summary for the "Skill Tree" tab
    skillsSummary: "My skill set is a blend of deep technical expertise in data science and robust project management capabilities. I possess advanced proficiency in R and Python, specializing in the development of scalable R/Shiny applications and the implementation of CI/CD pipelines for automated testing and deployment. I leverage a wide array of data visualization, testing, and DevOps tools to ensure high-quality, reliable applications. This technical foundation is complemented by strong leadership skills in Agile methodologies, client relations, and strategic planning, enabling me to effectively lead teams and manage complex projects from conception to completion.",

    // Summary for the "Experience" tab
    experienceSummary: "My professional journey spans over 7 years across data science and business intelligence, with a progressive focus on leadership roles within the life sciences and technology sectors. My experience ranges from developing predictive models in finance to architecting enterprise-level clinical analytics solutions with robust CI/CD practices, demonstrating a consistent ability to deliver value through data and drive impactful business decisions.",

    experience: [
        {
            role: "RShiny Tech and Project Lead",
            company: "Appsilon",
            companyUrl: "https://www.appsilon.com/",
            location: "Delhi (Remote)",
            period: "Apr 2023 - Present",
            responsibilities: {
                "Project Management and Client Relations": [
                    "Directed client engagement, building strategic partnerships to drive long-term collaboration and ensure project success.",
                    "Managed the full project lifecycle from conception to delivery, including resource planning, budget alignment, and sprint execution using Agile methodologies (Scrum).",
                    "Led sprint planning, scrums, and retrospectives to foster a culture of continuous improvement and transparency."
                ],
                "Application Architecture & Development": [
                    "Architected and developed specialized R/Shiny modules for the automated generation of Tables, Listings, and Graphs (TLGs) directly from CDISC ADaM datasets.",
                    "Built scalable and maintainable applications using modern R frameworks including golem and rhino."
                ],
                "Dashboarding & Visualization": [
                    "Developed interactive R/Shiny dashboards for clients across multiple domains, ensuring all data handling and visualizations adhered strictly to project-specific requirements and standards.",
                    "Created an Excel validation tool using RShiny and rhandsontable, which automated data integrity checks based on customizable YAML rules and allowed users to edit data directly within the application and submit the file.",
                    "Created high-impact, dynamic data visualizations using plotly and echarts4r."
                ],
                "CI/CD & Testing": [
                     "Implemented CI/CD pipelines using GitHub Actions for automated testing, validation, and deployment of R packages and Shiny apps.",
                     "Established a comprehensive testing framework using testthat and shinytest2 to implement unit, integration, and end-to-end tests."
                ],
                "Internal Initiatives": [
                    "Led the creation of an internal knowledge-sharing platform built with R and Quarto to enhance team collaboration.",
                    "Actively contributed to pre-sales activities, including client calls and the development of POC applications.",
                    "Authored and published technical articles on the official Appsilon blog.",
                    "Developed multiple dashboards for Appsilon's public RShiny Demo Gallery, including 'DepMapV2' and 'DrugFlowOptimizer'."
                ]
            },
            links: [
                { name: "CRAN Contribution", url: "https://cran.r-project.org/web/packages/shiny.emptystate/" },
                { name: "RShiny Demos", url: "https://demo.appsilon.com/" },
                { name: "Appsilon Blog", url: "https://www.appsilon.com/author/harsh" }
            ]
        },
        {
            role: "Senior Analyst - Data Science & Core Analytics",
            company: "equipped.ai",
            companyUrl: "https://www.equipped.ai/",
            location: "Noida",
            period: "Jul 2020 - Mar 2023",
            responsibilities: {
                "Key Responsibilities & Achievements": [
                   "Served as the single point of contact for internal and external stakeholders, leading developments in the BI team.",
                   "Oversaw project planning, including creating BRDs and conducting effort/resource estimations.",
                   "Managed end-to-end delivery of POCs and led the development of new RShiny and PowerBI dashboards.",
                   "Implemented a QA Automation framework that reduced manual BAU for 30+ R Shiny dashboards from 160 hrs to 20hrs monthly.",
                   "Developed classification and regression models for the Danish insurance company to estimate policy claim probability and cost.",
                   "Designed and developed a modularized ETL framework in R which loads the data, performs complex ETL tasks, and computes KPIs.",
                   "Developed 8 dashboards in R Shiny leveraging data marts and visualizing 80+ KPIs & charts for better decision making.",
                   "Automation: Automated BAU execution based on email triggers.",
                   "Developed and expanded in-house R package for more efficient and smoother ETL tasks and data QA.",
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
                "Key Responsibilities & Achievements": [
                   "Supported the development of in-house scorecard model to score new borrowers and flag potential defaults."
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
                "Key Responsibilities & Achievements": [
                    "Led the development & deployment of an analytic solution product for a healthcare supply-chain giant.",
                    "Completed a cross-team effort to develop a large-scale sales prediction pipeline for one of the largest hypermarket & supermarket retail chains in Russia.",
                    "Conducted successful R&D of an association mining algorithm to optimize bill-of-materials for hospitals."
                ]
            }
        }
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
            icon: <Briefcase className="icon" />,
            skills: ["Agile Project Management", "Client Relationship Building", "Strategic Resource Estimation", "Sprint Planning & Retrospectives"]
        },
        {
            title: "Technical & Analytical Expertise",
            icon: <BrainCircuit className="icon" />,
            skills: ["R & RShiny Development", "Automated Testing & CI/CD", "Interactive Data Visualization", "Advanced Data Pipelining"]
        },
        {
            title: "Clinical Analytics",
            icon: <Briefcase className="icon" />,
            skills: ["Clinical Trial Analysis", "TLG Generation", "Pharmaverse Proficiency", "Open Source Contributions (R)"]
        }
    ],
    technologies: [
        { category: "Languages", items: ["R", "CSS", "Python", "JS", "SQL"] },
        { category: "R Packages", items: ["tidyverse", "plumber", "checkmate", "shinytest2", "testthat", "rlang", "devtools", "connectapi", "pins"] },
        { category: "Shiny UI", items: ["shiny", "golem", "rhino", "bslib", "shinydashboard", "bs4dash", "shinyWidgets", "shinyjs", "htmltools", "datamods"] },
        { category: "LLM Integration", items: ["Gemini", "ChatGPT", "Claude", "Github Co-pilot"]},
        { category: "Clinical (pharmaverse)", items: ["teal", "admiral", "rtables", "gtsummary", "tidyr", "tern", "haven"] },
        { category: "Reporting", items: ["RMarkdown", "Quarto", "pkgdown", "PowerBI"] },
        { category: "Posit Ecosystem", items: ["Posit Connect", "RStudio Workbench", "Posit Package Manager"] },
        { category: "DevOps & Platforms", items: ["Git", "GitHub", "GitLab", "Docker", "CI/CD"] },
    ],
    barChartSkills: {
        "R & Shiny Expertise": [
            { skill: 'Tidyverse & Data Manipulation', level: 95 },
            { skill: 'Shiny UI/UX', level: 90 },
            { skill: 'Data Viz', level: 85 },
            { skill: 'Testing', level: 80 },
            { skill: 'Package Dev', level: 80 },
        ],
        "Project Management": [
            { skill: 'Agile/Scrum', level: 90 },
            { skill: 'Client Relations', level: 85 },
            { skill: 'Planning', level: 85 },
            { skill: 'Leadership', level: 80 },
            { skill: 'Estimation', level: 80 },
        ],
        "Languages & Tools": [
            { skill: 'R', level: 95 },
            { skill: 'Git', level: 90 },
            { skill: 'SQL', level: 80 },
            { skill: 'CSS & JS', level: 75 },
            { skill: 'Python', level: 70 },
        ]
    },
    analyticsSkills: {
        r: "Expert in the tidyverse ecosystem, R package development, creating scalable and modular Shiny applications, API development with plumber, and high-performance computing in R.",
        python: "Proficient with pandas for data manipulation, NumPy for numerical operations, and scikit-learn for machine learning tasks.",
        core: "Exploratory Data Analysis (EDA), Market Basket Analysis, Financial Modelling, Portfolio Analysis.",
        ml: "Linear & Logistic Regression, SVM, Gradient Boosting, CART, K-means, PCA, TF-IDF."
    },
    projectManagementSkills: {
        methodologies: "Expert in Agile and Scrum frameworks, adept at facilitating daily stand-ups, sprint planning sessions, comprehensive reviews, and constructive retrospectives to ensure continuous improvement and team alignment.",
        estimation: "Skilled in team capacity planning and resource estimation to deliver projects on time and within budget.",
        tools: ["Jira", "GitHub Projects", "Figma", "draw.io", "ClickUp"]
    },
    certifications: [
        "Data Science with R, ScholarsPro (Gurugram)",
        "Machine Learning, Coursera (Stanford University Online)",
        "Big Data & Hadoop, Edureka (Online)",
        "Apache Spark, Edureka (Online)"
    ],
    hobbies: [
        { name: "Specialty Coffee Aficionado", icon: <Coffee className="icon" /> },
        { name: "Travel & Landscape Photographer", icon: <Camera className="icon" /> },
        { name: "Perfume Collector", icon: <Wind className="icon" /> },
        { name: "Hobbyist Guitarist", icon: <Guitar className="icon" /> }
    ]
};

// Reusable Components
const Section = ({ title, children, className = '' }) => (
    <section className={`section ${className}`}>
        <h2 className="section-title">{title}</h2>
        {children}
    </section>
);

const AnimatedSection = ({ children }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });
        if (ref.current) observer.observe(ref.current);
        return () => { if (ref.current) observer.unobserve(ref.current); };
    }, []);
    return <div ref={ref} className={`animated-section ${isVisible ? 'is-visible' : ''}`}>{children}</div>;
};

// Component to highlight keywords
const HighlightKeywords = ({ text, keywords }) => {
    if (!keywords || keywords.length === 0) {
        return text;
    }
    const regex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');
    const parts = text.split(regex);

    return (
        <>
            {parts.map((part, index) =>
                keywords.some(keyword => new RegExp(`^${keyword}$`, 'i').test(part)) ? (
                    <strong key={index} className="highlight">{part}</strong>
                ) : (
                    part
                )
            )}
        </>
    );
};

const SkillBar = ({ skill, level }) => {
    const barRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.5 });
        if (barRef.current) observer.observe(barRef.current);
        return () => { if (barRef.current) observer.unobserve(barRef.current); };
    }, []);

    return (
        <div ref={barRef} className="skill-bar-wrapper">
            <div className="skill-bar-info">
                <span className="skill-bar-label">{skill}</span>
                <span className="skill-bar-level">{level}%</span>
            </div>
            <div className="skill-bar-bg">
                <div 
                    className="skill-bar-fg"
                    style={{ width: isVisible ? `${level}%` : '0%' }}
                ></div>
            </div>
        </div>
    );
};

// Tab Content Components
const ProfessionalSummaryTab = () => (
    <AnimatedSection>
        <Section title="Professional Summary">
            {resumeData.expandedSummary.map((paragraph, index) => (
                <p key={index} className="summary-paragraph">{paragraph}</p>
            ))}
        </Section>
    </AnimatedSection>
);

const SkillTreeTab = () => (
    <AnimatedSection>
        <Section title="Skill Tree">
             <p className="summary-paragraph">{resumeData.skillsSummary}</p>
            
            <Section title="Key Skill Areas" className="sub-section">
                 <div className="bar-chart-grid">
                    {Object.entries(resumeData.barChartSkills).map(([title, skills]) => (
                        <div key={title}>
                            <h4 className="bar-chart-title">{title}</h4>
                            <div>
                                {skills.map(skill => <SkillBar key={skill.skill} skill={skill.skill} level={skill.level} />)}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section title="Core Competencies" className="sub-section">
                <div className="competencies-grid">
                    {resumeData.coreCompetencies.map((comp, index) => (
                        <div key={index} className="competency-card">
                            <div className="competency-title-wrapper">{comp.icon}<h3 className="competency-title">{comp.title}</h3></div>
                            <ul className="competency-list">
                                {comp.skills.map((skill, i) => <li key={i}><span className="bullet">◆</span>{skill}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </Section>
            <Section title="Technical & Managerial Skills" className="sub-section">
                <div className="skills-grid">
                    <div>
                        <h3 className="skills-subtitle"><BrainCircuit className="icon"/>Analytics Skills</h3>
                        <div className="skills-detail-group">
                            <div>
                                <h4>R Programming</h4>
                                <p>{resumeData.analyticsSkills.r}</p>
                            </div>
                            <div>
                                <h4>Python</h4>
                                <p>{resumeData.analyticsSkills.python}</p>
                            </div>
                            <div>
                                <h4>Core Skills & ML</h4>
                                <p><strong>Core:</strong> {resumeData.analyticsSkills.core}</p>
                                <p><strong>ML:</strong> {resumeData.analyticsSkills.ml}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="skills-subtitle"><Briefcase className="icon"/>Project Management Skills</h3>
                        <div className="skills-detail-group">
                            <div><h4>Agile Methodologies</h4><p>{resumeData.projectManagementSkills.methodologies}</p></div>
                            <div><h4>Estimation & Planning</h4><p>{resumeData.projectManagementSkills.estimation}</p></div>
                            <div>
                                <h4>Tools</h4>
                                <div className="tag-container">{resumeData.projectManagementSkills.tools.map((item, i) => <span key={i} className="tag-alt">{item}</span>)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <Section title="Technologies" className="sub-section">
                <div className="tech-grid">
                    {resumeData.technologies.map((tech) => (
                        <div key={tech.category}>
                            <h4 className="tech-category-title">{tech.category}</h4>
                            <div className="tag-container">{tech.items.map((item) => <span key={item} className="tag">{item}</span>)}</div>
                        </div>
                    ))}
                </div>
            </Section>
        </Section>
    </AnimatedSection>
);

const ExperienceTab = () => (
    <AnimatedSection>
        <Section title="Professional Journey">
            <p className="summary-paragraph">{resumeData.experienceSummary}</p>
            <div className="experience-container">
                {resumeData.experience.map((job, index) => (
                    <div key={index} className="experience-job">
                        <div className="experience-icon-wrapper"><Building className="icon"/></div>
                        <div className="experience-details">
                            <h3 className="job-role">{job.role}</h3>
                            <p className="job-company">
                                <a href={job.companyUrl} target="_blank" rel="noopener noreferrer">{job.company}</a> - <span className="job-location">{job.location}</span>
                            </p>
                            <p className="job-period">{job.period}</p>
                            {job.responsibilities && Object.entries(job.responsibilities).map(([category, points]) => (
                                <div key={category} className="responsibilities-block">
                                    <h4 className="responsibilities-category">{category}</h4>
                                    <ul className="responsibilities-list">{points.map((point, i) => <li key={i}>{point}</li>)}</ul>
                                </div>
                            ))}
                            {job.links && <div className="links-container">{job.links.map((link, i) => <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="job-link"><Link className="icon-sm"/>{link.name}</a>)}</div>}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    </AnimatedSection>
);

const EducationAndCertificationTab = () => (
    <AnimatedSection>
        <Section title="Education">
            <div className="education-container">
                {resumeData.education.map((edu, index) => (
                    <div key={index} className="education-item">
                        <div className="education-icon-wrapper"><GraduationCap className="icon"/></div>
                        <div>
                            <h3 className="degree">{edu.degree}</h3>
                            <p className="institution">{edu.institution}</p>
                            <p className="period">{edu.period}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
        <Section title="Certifications">
            <ul className="certifications-list">{resumeData.certifications.map((cert, index) => <li key={index}><Award className="icon-sm"/><span>{cert}</span></li>)}</ul>
        </Section>
    </AnimatedSection>
);

const ActivitiesAndHobbiesTab = () => (
    <AnimatedSection>
        <Section title="Activities & Hobbies">
            <ul className="hobbies-list">{resumeData.hobbies.map((hobby, index) => <li key={index}>{hobby.icon}<span>{hobby.name}</span></li>)}</ul>
        </Section>
    </AnimatedSection>
);

const FullResume = () => {
    const keywordsToBold = ["Scrum", "TLGs", "CDISC ADaM", "RShiny", "SDTM", "ADaM", "golem", "rhino", "plotly", "echarts4r", "testthat", "shinytest2", "Quarto", "R Shiny", "PowerBI", "ETL", "KPIs", "R package", "scorecard model", "sales prediction pipeline", "association mining algorithm", "CI/CD", "GitHub Actions"];
    const fullResumeExperience = JSON.parse(JSON.stringify(resumeData.experience));
    // Remove teal from the full resume view as well
    if (fullResumeExperience[0] && fullResumeExperience[0].responsibilities["Application Architecture & Development"]) {
        fullResumeExperience[0].responsibilities["Application Architecture & Development"] = fullResumeExperience[0].responsibilities["Application Architecture & Development"].filter(
            point => !point.includes("teal framework")
        );
    }

    return (
        <>
            <AnimatedSection><Section title="Professional Summary"><p className="summary-paragraph">{resumeData.headerSummary}</p></Section></AnimatedSection>
            <AnimatedSection><Section title="Core Competencies"><div className="competencies-grid">{resumeData.coreCompetencies.map((comp, index) => (<div key={index} className="competency-card"><div className="competency-title-wrapper">{comp.icon}<h3 className="competency-title">{comp.title}</h3></div><ul className="competency-list">{comp.skills.map((skill, i) => (<li key={i}><span className="bullet">◆</span>{skill}</li>))}</ul></div>))}</div></Section></AnimatedSection>
            <AnimatedSection><Section title="Technical & Managerial Skills"><div className="skills-grid"><div><h3 className="skills-subtitle"><BrainCircuit className="icon"/>Analytics Skills</h3><div className="skills-detail-group"><div><h4>R Programming</h4><p>{resumeData.analyticsSkills.r}</p></div><div><h4>Python</h4><p>{resumeData.analyticsSkills.python}</p></div><div><h4>Core Skills & ML</h4><p><strong>Core:</strong> {resumeData.analyticsSkills.core}</p><p><strong>ML:</strong> {resumeData.analyticsSkills.ml}</p></div></div></div><div><h3 className="skills-subtitle"><Briefcase className="icon"/>Project Management Skills</h3><div className="skills-detail-group"><div><h4>Agile Methodologies</h4><p>{resumeData.projectManagementSkills.methodologies}</p></div><div><h4>Estimation & Planning</h4><p>{resumeData.projectManagementSkills.estimation}</p></div><div><h4>Tools</h4><div className="tag-container">{resumeData.projectManagementSkills.tools.map((item, i) => (<span key={i} className="tag-alt">{item}</span>))}</div></div></div></div></div></Section></AnimatedSection>
            <AnimatedSection>
                <Section title="Work Experience">
                    <div className="experience-container">
                        {fullResumeExperience.map((job, index) => (
                            <div key={index} className="experience-job">
                                <div className="experience-icon-wrapper"><Building className="icon"/></div>
                                <div className="experience-details">
                                    <h3 className="job-role">{job.role}</h3>
                                    <p className="job-company">
                                         <a href={job.companyUrl} target="_blank" rel="noopener noreferrer">{job.company}</a> - <span className="job-location">{job.location}</span>
                                    </p>
                                    <p className="job-period">{job.period}</p>
                                    {job.responsibilities && Object.entries(job.responsibilities).map(([category, points]) => (
                                        <div key={category} className="responsibilities-block">
                                            <h4 className="responsibilities-category">{category}</h4>
                                             <ul className="responsibilities-list">{points.map((point, i) => <li key={i}><HighlightKeywords text={point} keywords={keywordsToBold} /></li>)}</ul>
                                        </div>
                                    ))}
                                    {job.links && <div className="links-container">{job.links.map((link, i) => <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="job-link"><Link className="icon-sm"/>{link.name}</a>)}</div>}
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>
            </AnimatedSection>
            <AnimatedSection><Section title="Technologies"><div className="tech-grid">{resumeData.technologies.map((tech) => (<div key={tech.category}><h4 className="tech-category-title">{tech.category}</h4><div className="tag-container">{tech.items.map((item) => (<span key={item} className="tag">{item}</span>))}</div></div>))}</div></Section></AnimatedSection>
            <AnimatedSection><Section title="Education"><div className="education-container">{resumeData.education.map((edu, index) => (<div key={index} className="education-item"><div className="education-icon-wrapper"><GraduationCap className="icon"/></div><div><h3 className="degree">{edu.degree}</h3><p className="institution">{edu.institution}</p><p className="period">{edu.period}</p></div></div>))}</div></Section></AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8"><AnimatedSection><Section title="Certifications"><ul className="certifications-list">{resumeData.certifications.map((cert, index) => <li key={index}><Award className="icon-sm"/><span>{cert}</span></li>)}</ul></Section></AnimatedSection><AnimatedSection><Section title="Activities & Hobbies"><ul className="hobbies-list">{resumeData.hobbies.map((hobby, index) => <li key={index}>{hobby.icon}<span>{hobby.name}</span></li>)}</ul></Section></AnimatedSection></div>
        </>
    )
};

const PdfResumeContent = () => {
    return (
        <div className="p-8 bg-white text-slate-900" style={{ fontFamily: 'sans-serif', fontSize: '10pt' }}>
            <style>
                {`
                    .pdf-section { page-break-inside: avoid; }
                    .pdf-job { page-break-inside: avoid; margin-bottom: 1rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 1rem; }
                    .pdf-job:last-child { border-bottom: none; }
                `}
            </style>
            <header className="text-center mb-6">
                <h1 className="text-3xl font-bold text-slate-900">{resumeData.name}</h1>
                <h2 className="text-lg mt-1 font-light text-indigo-600">{resumeData.title}</h2>
                <div className="mt-2 flex justify-center items-center flex-wrap gap-x-3 gap-y-1 text-xs text-slate-600">
                    <span>{resumeData.location}</span> | <a href={`tel:${resumeData.phone}`}>{resumeData.phone}</a> | <a href={`mailto:${resumeData.email}`}>{resumeData.email}</a> | <a href={resumeData.github}>GitHub</a>
                </div>
            </header>

            <div className="pdf-section">
                <h3 className="text-xl font-bold border-b-2 border-slate-300 pb-1 mb-2">Professional Summary</h3>
                <p className="text-sm leading-normal">{resumeData.headerSummary}</p>
            </div>

            <div className="pdf-section mt-4">
                <h3 className="text-xl font-bold border-b-2 border-slate-300 pb-1 mb-2">Work Experience</h3>
                {resumeData.experience.map((job, index) => (
                    <div key={index} className="pdf-job">
                        <h4 className="text-md font-bold text-slate-900">{job.role}</h4>
                        <p className="font-semibold text-indigo-600 text-sm">{job.company} - {job.location}</p>
                        <p className="text-xs text-slate-500 mb-1">{job.period}</p>
                        {Object.entries(job.responsibilities).map(([category, points]) => (
                            <div key={category} className="mb-1">
                                <h5 className="font-semibold text-xs text-slate-700">{category}</h5>
                                <ul className="list-disc list-inside space-y-0.5 text-xs text-slate-600 pl-2">
                                    {points.map((point, i) => <li key={i}>{point}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            
            <div className="pdf-section mt-4">
                 <h3 className="text-xl font-bold border-b-2 border-slate-300 pb-1 mb-2">Technologies</h3>
                 <div className="text-xs">
                    {resumeData.technologies.map((tech) => (
                        <div key={tech.category} className="flex mb-1">
                            <strong className="w-1/4 font-semibold pr-2">{tech.category}:</strong>
                            <span className="w-3/4">{tech.items.join(', ')}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="pdf-section mt-4">
                <h3 className="text-xl font-bold border-b-2 border-slate-300 pb-1 mb-2">Education</h3>
                 <div className="space-y-2">
                    {resumeData.education.map((edu, index) => (
                        <div key={index}>
                            <h4 className="text-md font-bold text-slate-900">{edu.degree}</h4>
                            <p className="font-semibold text-sm text-slate-700">{edu.institution}</p>
                            <p className="text-xs text-slate-500">{edu.period}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Main App Component
const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeTab, setActiveTab] = useState('Summary');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
        const script = document.createElement('script');
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);

    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    const handleDownload = () => {
        const resumeElement = document.getElementById('pdf-resume-content');
        if (resumeElement && window.html2pdf) {
            const opt = {
                margin:       [0.5, 0.2, 0.5, 0.2],
                filename:     'Harsh_Verma_Resume.pdf',
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { scale: 2, useCORS: true, letterRendering: true },
                jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
            };
            window.html2pdf().from(resumeElement).set(opt).save();
        } else {
            console.error("PDF generation library not found or resume element not found.");
        }
    };

    const tabs = [
        { name: 'Summary', icon: <User /> },
        { name: 'Skill Tree', icon: <Star /> },
        { name: 'Professional Journey', icon: <BriefcaseBusiness /> },
        { name: 'Education & Certification', icon: <BookOpen /> },
        { name: 'Hobbies', icon: <Smile /> },
        { name: 'Full Resume', icon: <FileText /> },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'Summary': return <ProfessionalSummaryTab />;
            case 'Skill Tree': return <SkillTreeTab />;
            case 'Professional Journey': return <ExperienceTab />;
            case 'Education & Certification': return <EducationAndCertificationTab />;
            case 'Hobbies': return <ActivitiesAndHobbiesTab />;
            case 'Full Resume': return <FullResume />;
            default: return <ProfessionalSummaryTab />;
        }
    };

    return (
        <div className="app-wrapper">
            <style>{`
                /* Global Styles & Variables */
                :root {
                    --bg-color: #f1f5f9;
                    --text-color: #334155;
                    --header-color: #1e293b;
                    --accent-color: #4f46e5;
                    --card-bg-color: #ffffff;
                    --border-color: #e2e8f0;
                    --secondary-text-color: #64748b;
                }
                [data-theme='dark'] {
                    --bg-color: #0f172a;
                    --text-color: #cbd5e1;
                    --header-color: #f8fafc;
                    --accent-color: #818cf8;
                    --card-bg-color: #1e293b;
                    --border-color: #334155;
                    --secondary-text-color: #94a3b8;
                }
                body {
                    font-family: sans-serif;
                    background-color: var(--bg-color);
                    color: var(--text-color);
                    transition: background-color 0.3s, color 0.3s;
                    line-height: 1.6;
                }
                .app-wrapper {
                    max-width: 1024px;
                    margin: 0 auto;
                    padding: 2rem 1rem;
                }
                
                /* Header */
                .app-header { text-align: center; margin-top: 3rem; margin-bottom: 2rem; }
                .app-header h1 { font-size: 3rem; font-weight: bold; color: var(--header-color); }
                .app-header h2 { font-size: 1.5rem; font-weight: 300; color: var(--accent-color); margin-top: 0.5rem; }
                .contact-info { display: flex; justify-content: center; flex-wrap: wrap; gap: 1.5rem; margin-top: 1.5rem; color: var(--secondary-text-color); }
                .contact-info a { color: var(--secondary-text-color); text-decoration: none; display: flex; align-items: center; gap: 0.5rem; }
                .contact-info a:hover { color: var(--accent-color); }
                .contact-info-item { display: flex; align-items: center; gap: 0.5rem; }
                .icon { width: 1.25rem; height: 1.25rem; }
                .icon-sm { width: 1rem; height: 1rem; }

                /* Controls */
                .controls-container { position: fixed; top: 1rem; right: 1rem; z-index: 50; display: flex; align-items: center; gap: 0.5rem; }
                .control-button { display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem; border-radius: 9999px; background-color: #e2e8f0; transition: all 0.3s; border: none; cursor: pointer; }
                [data-theme='dark'] .control-button { background-color: #334155; }
                .control-button:hover { background-color: #cbd5e1; }
                [data-theme='dark'] .control-button:hover { background-color: #475569; }
                .control-button .icon { color: var(--accent-color); }
                .control-button span { font-size: 0.875rem; font-weight: 600; padding-right: 0.5rem; }

                /* Tabs */
                .tabs-container { position: sticky; top: 0; background-color: rgba(241, 245, 249, 0.8); backdrop-filter: blur(4px); z-index: 40; padding: 1rem 0; margin-bottom: 2rem; }
                 [data-theme='dark'] .tabs-container { background-color: rgba(15, 23, 42, 0.8); }
                .tabs-nav { display: flex; justify-content: center; flex-wrap: wrap; gap: 1rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem; }
                .tab-button { display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0.75rem; font-size: 1rem; font-weight: 600; border-radius: 0.5rem 0.5rem 0 0; border: none; background: transparent; cursor: pointer; transition: all 0.3s; color: var(--secondary-text-color); border-bottom: 2px solid transparent; }
                .tab-button.active { color: var(--accent-color); border-bottom-color: var(--accent-color); }
                .tab-button:not(.active):hover { color: var(--accent-color); background-color: #e2e8f0; }
                 [data-theme='dark'] .tab-button:not(.active):hover { background-color: #1e293b; }

                /* Sections & Cards */
                .section { background-color: var(--card-bg-color); border: 1px solid var(--border-color); border-radius: 0.75rem; padding: 1.5rem 2rem; margin-bottom: 2rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1); }
                .section-title { font-size: 1.875rem; font-weight: bold; color: var(--header-color); margin-bottom: 1.5rem; padding-bottom: 0.75rem; border-bottom: 2px solid var(--accent-color); }
                .sub-section { box-shadow: none; border: none; padding: 0; }

                /* Animated Section */
                .animated-section { transition: all 0.7s ease-in-out; opacity: 0; transform: translateY(2rem); }
                .animated-section.is-visible { opacity: 1; transform: translateY(0); }

                /* Specific Component Styles */
                .summary-paragraph { font-size: 1.125rem; line-height: 1.75; margin-bottom: 1rem; }
                .bar-chart-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; }
                .bar-chart-title { font-size: 1.25rem; font-weight: 600; color: var(--header-color); margin-bottom: 1rem; text-align: center; }
                .competencies-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; }
                .competency-card { background-color: #f1f5f9; padding: 1.5rem; border-radius: 0.5rem; transition: transform 0.3s; }
                 [data-theme='dark'] .competency-card { background-color: #334155; }
                .competency-card:hover { transform: translateY(-5px); }
                .competency-title-wrapper { display: flex; align-items: center; margin-bottom: 0.75rem; gap: 0.75rem; }
                .competency-title { font-size: 1.25rem; font-weight: 600; color: var(--header-color); }
                .competency-list { list-style: none; padding: 0; margin: 0; space-y: 0.5rem; color: var(--secondary-text-color); }
                .competency-list li { display: flex; align-items: center; }
                .bullet { color: var(--accent-color); margin-right: 0.5rem; }
                .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2.5rem; margin-top: 2rem;}
                .skills-subtitle { font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.75rem; color: var(--header-color); }
                .skills-detail-group > div { margin-bottom: 1rem; }
                .skills-detail-group h4 { font-size: 1.125rem; font-weight: 600; color: var(--text-color); }
                .skills-detail-group p { color: var(--secondary-text-color); }
                .tag-container { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.25rem; }
                .tag { background-color: #e2e8f0; color: #475569; font-size: 0.875rem; font-weight: 500; padding: 0.25rem 0.625rem; border-radius: 0.375rem; }
                .tag-alt { background-color: #e2e8f0; color: #475569; font-size: 0.875rem; font-weight: 500; padding: 0.125rem 0.625rem; border-radius: 9999px; }
                 [data-theme='dark'] .tag, [data-theme='dark'] .tag-alt { background-color: #475569; color: #cbd5e1; }
                .tech-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem 2rem; }
                .tech-category-title { font-weight: 600; font-size: 1.125rem; margin-bottom: 0.75rem; color: var(--header-color); border-bottom: 1px solid var(--border-color); padding-bottom: 0.25rem; }
                .experience-container { display: flex; flex-direction: column; gap: 3rem; }
                .experience-job { display: flex; gap: 1rem; }
                .experience-icon-wrapper { margin-top: 0.25rem; flex-shrink: 0; }
                .job-role { font-size: 1.25rem; font-weight: bold; color: var(--header-color); }
                .job-company a { font-weight: 600; color: var(--accent-color); text-decoration: none; }
                .job-company a:hover { text-decoration: underline; }
                .job-location { color: var(--secondary-text-color); font-weight: 400; }
                .job-period { font-size: 0.875rem; color: var(--secondary-text-color); margin-bottom: 1rem; }
                .responsibilities-block { margin-bottom: 1rem; }
                .responsibilities-category { font-weight: 600; color: var(--text-color); margin-bottom: 0.5rem; }
                .responsibilities-list { list-style: disc; padding-left: 1.25rem; color: var(--secondary-text-color); }
                .links-container { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1rem; }
                .job-link { display: flex; align-items: center; gap: 0.375rem; font-size: 0.875rem; color: var(--accent-color); text-decoration: none; }
                .job-link:hover { text-decoration: underline; }
                .education-container { display: flex; flex-direction: column; gap: 1.5rem; }
                .education-item { display: flex; gap: 1rem; align-items: flex-start; }
                .degree { font-size: 1.25rem; font-weight: bold; color: var(--header-color); }
                .institution { font-weight: 600; color: var(--accent-color); }
                .period { font-size: 0.875rem; color: var(--secondary-text-color); }
                .certifications-list, .hobbies-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.75rem; }
                .certifications-list li, .hobbies-list li { display: flex; align-items: center; gap: 0.75rem; }
                .highlight { color: var(--header-color); font-weight: bold; }
                
                /* Skill Bar */
                .skill-bar-wrapper { margin-bottom: 1rem; }
                .skill-bar-info { display: flex; justify-content: space-between; margin-bottom: 0.25rem; }
                .skill-bar-label { font-size: 1rem; font-weight: 500; color: var(--text-color); }
                .skill-bar-level { font-size: 0.875rem; font-weight: 500; color: var(--accent-color); }
                .skill-bar-bg { width: 100%; background-color: #e2e8f0; border-radius: 9999px; height: 0.625rem; }
                 [data-theme='dark'] .skill-bar-bg { background-color: #334155; }
                .skill-bar-fg { background-color: var(--accent-color); height: 100%; border-radius: 9999px; transition: width 1s ease-out; }
                
                /* Footer */
                .app-footer { text-align: center; margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid var(--border-color); }
                .app-footer p:first-child { color: var(--secondary-text-color); font-size: 0.875rem; }
                .app-footer p:last-child { color: #94a3b8; font-size: 0.75rem; margin-top: 0.25rem; }
                 [data-theme='dark'] .app-footer p:last-child { color: #475569; }

                /* PDF Styles */
                .pdf-section { page-break-inside: avoid; }
                .pdf-job { page-break-inside: avoid; margin-bottom: 1rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 1rem; }
                .pdf-job:last-child { border-bottom: none; }
            `}</style>
            <div className="app-container">
                <div className="controls-container">
                     <button onClick={handleDownload} className="control-button">
                        <Download className="icon" />
                        <span className="hidden sm:inline">Download PDF</span>
                    </button>
                    <button onClick={toggleTheme} className="control-button">
                        {isDarkMode ? <Sun className="icon" /> : <Moon className="icon" />}
                    </button>
                </div>

                <header className="app-header">
                    <h1>{resumeData.name}</h1>
                    <h2>{resumeData.title}</h2>
                    <div className="contact-info">
                        <span className="contact-info-item"><MapPin className="icon-sm" />{resumeData.location}</span>
                        <a href={`tel:${resumeData.phone}`}><Phone className="icon-sm" />{resumeData.phone}</a>
                        <a href={`mailto:${resumeData.email}`}><Mail className="icon-sm" />{resumeData.email}</a>
                        <a href={resumeData.github} target="_blank" rel="noopener noreferrer"><Github className="icon-sm" />insightsurge</a>
                    </div>
                </header>

                <div className="tabs-container">
                    <div className="tabs-nav">
                        {tabs.map(tab => (
                            <button
                                key={tab.name}
                                onClick={() => setActiveTab(tab.name)}
                                className={`tab-button ${activeTab === tab.name ? 'active' : ''}`}
                            >
                                {tab.icon}
                                <span className="hidden sm:inline">{tab.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <main>
                    {renderContent()}
                </main>
                
                <footer className="app-footer">
                    <p>© 2025 Harsh Verma. All rights reserved.</p>
                    <p>Built with React, TypeScript, and Tailwind CSS.</p>
                </footer>
                
                {/* Hidden component for PDF generation */}
                <div style={{ display: 'none' }}>
                    <div id="pdf-resume-content">
                       <PdfResumeContent />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
