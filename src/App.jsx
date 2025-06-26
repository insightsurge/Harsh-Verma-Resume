import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Github, Sun, Moon, Briefcase, BrainCircuit, Award, Coffee, Camera, Guitar, Wind, GraduationCap, Building, Link, User, Star, BriefcaseBusiness, BookOpen, Smile, FileText, Download } from 'lucide-react';

// Main Data Object
const resumeData = {
    name: "Harsh Verma",
    title: "R and RShiny Expert - Pharma",
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
            icon: <Briefcase className="w-6 h-6 mr-3 text-indigo-500" />,
            skills: ["Agile Project Management", "Client Relationship Building", "Strategic Resource Estimation", "Sprint Planning & Retrospectives"]
        },
        {
            title: "Technical & Analytical Expertise",
            icon: <BrainCircuit className="w-6 h-6 mr-3 text-indigo-500" />,
            skills: ["R & RShiny Development", "Automated Testing & CI/CD", "Interactive Data Visualization", "Advanced Data Pipelining"]
        },
        {
            title: "Clinical Analytics",
            icon: <Briefcase className="w-6 h-6 mr-3 text-indigo-500" />,
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
        { name: "Specialty Coffee Aficionado", icon: <Coffee className="w-5 h-6 mr-2" /> },
        { name: "Travel & Landscape Photographer", icon: <Camera className="w-5 h-6 mr-2" /> },
        { name: "Perfume Collector", icon: <Wind className="w-5 h-6 mr-2" /> },
        { name: "Hobbyist Guitarist", icon: <Guitar className="w-5 h-6 mr-2" /> }
    ]
};

// Reusable Components
const Section = ({ title, children, className = '' }) => (
    <section className={`bg-white dark:bg-slate-800/50 shadow-md rounded-xl p-6 md:p-8 mb-8 ring-1 ring-slate-900/5 dark:ring-white/10 ${className}`}>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 border-b-2 border-indigo-500/50 pb-3">{title}</h2>
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
    return <div ref={ref} className={`transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{children}</div>;
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
                    <strong key={index} className="text-slate-900 dark:text-slate-100 font-bold">{part}</strong>
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
        <div ref={barRef} className="mb-4">
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-slate-700 dark:text-slate-300">{skill}</span>
                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{level}%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2.5 dark:bg-slate-700">
                <div 
                    className="bg-indigo-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
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
                <p key={index} className="text-lg leading-relaxed mb-4 last:mb-0">{paragraph}</p>
            ))}
        </Section>
    </AnimatedSection>
);

const SkillTreeTab = () => (
    <AnimatedSection>
        <Section title="Skill Tree">
             <p className="text-lg leading-relaxed mb-8">{resumeData.skillsSummary}</p>
            
            <Section title="Key Skill Areas" className="!shadow-none !ring-0 !p-0 mb-8">
                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {Object.entries(resumeData.barChartSkills).map(([title, skills]) => (
                        <div key={title}>
                            <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4 text-center">{title}</h4>
                            <div>
                                {skills.map(skill => <SkillBar key={skill.skill} skill={skill.skill} level={skill.level} />)}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section title="Core Competencies" className="!shadow-none !ring-0 !p-0">
                <div className="grid md:grid-cols-3 gap-8">
                    {resumeData.coreCompetencies.map((comp, index) => (
                        <div key={index} className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="flex items-center mb-3">{comp.icon}<h3 className="text-xl font-semibold text-slate-900 dark:text-white">{comp.title}</h3></div>
                            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                                {comp.skills.map((skill, i) => <li key={i} className="flex items-center"><span className="text-indigo-500 mr-2">◆</span>{skill}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </Section>
            <Section title="Technical & Managerial Skills" className="!shadow-none !ring-0 !p-0">
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center text-slate-900 dark:text-white"><BrainCircuit className="w-6 h-6 mr-3 text-indigo-500"/>Analytics Skills</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-lg text-slate-800 dark:text-slate-200">R Programming</h4>
                                <p className="text-slate-600 dark:text-slate-400">{resumeData.analyticsSkills.r}</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg text-slate-800 dark:text-slate-200">Python</h4>
                                <p className="text-slate-600 dark:text-slate-400">{resumeData.analyticsSkills.python}</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg text-slate-800 dark:text-slate-200">Core Skills & ML</h4>
                                <p className="text-slate-600 dark:text-slate-400"><strong>Core:</strong> {resumeData.analyticsSkills.core}</p>
                                <p className="text-slate-600 dark:text-slate-400"><strong>ML:</strong> {resumeData.analyticsSkills.ml}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center text-slate-900 dark:text-white"><Briefcase className="w-6 h-6 mr-3 text-indigo-500"/>Project Management Skills</h3>
                        <div className="space-y-4">
                            <div><h4 className="font-semibold text-lg text-slate-800 dark:text-slate-200">Agile Methodologies</h4><p className="text-slate-600 dark:text-slate-400">{resumeData.projectManagementSkills.methodologies}</p></div>
                            <div><h4 className="font-semibold text-lg text-slate-800 dark:text-slate-200">Estimation & Planning</h4><p className="text-slate-600 dark:text-slate-400">{resumeData.projectManagementSkills.estimation}</p></div>
                            <div>
                                <h4 className="font-semibold text-lg text-slate-800 dark:text-slate-200">Tools</h4>
                                <div className="flex flex-wrap gap-2 mt-1">{resumeData.projectManagementSkills.tools.map((item, i) => <span key={i} className="bg-slate-200 text-slate-800 text-sm font-medium px-2.5 py-0.5 rounded-full dark:bg-slate-700 dark:text-slate-300">{item}</span>)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <Section title="Technologies" className="!shadow-none !ring-0 !p-0">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6">
                    {resumeData.technologies.map((tech) => (
                        <div key={tech.category}>
                            <h4 className="font-semibold text-lg mb-3 text-slate-800 dark:text-slate-100 border-b border-indigo-200 dark:border-indigo-800 pb-1">{tech.category}</h4>
                            <div className="flex flex-wrap gap-2">{tech.items.map((item) => <span key={item} className="bg-slate-200 text-slate-700 text-sm font-medium px-2.5 py-1 rounded-md dark:bg-slate-700 dark:text-slate-300">{item}</span>)}</div>
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
            <p className="text-lg leading-relaxed mb-8">{resumeData.experienceSummary}</p>
            <div className="space-y-12">
                {resumeData.experience.map((job, index) => (
                    <div key={index} className="flex flex-col sm:flex-row gap-4">
                        <div className="mt-1 flex-shrink-0"><Building className="w-6 h-6 text-indigo-500"/></div>
                        <div className="w-full">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{job.role}</h3>
                            <p className="font-semibold text-indigo-600 dark:text-indigo-400">
                                <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{job.company}</a> - <span className="text-slate-500 dark:text-slate-400 font-normal">{job.location}</span>
                            </p>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{job.period}</p>
                            {job.responsibilities && Object.entries(job.responsibilities).map(([category, points]) => (
                                <div key={category} className="mb-4">
                                    <h4 className="font-semibold text-md text-slate-700 dark:text-slate-200 mb-2">{category}</h4>
                                    <ul className="list-disc list-inside space-y-1.5 text-slate-600 dark:text-slate-300">{points.map((point, i) => <li key={i}>{point}</li>)}</ul>
                                </div>
                            ))}
                            {job.links && <div className="mt-4 flex flex-wrap gap-4">{job.links.map((link, i) => <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:underline transition-colors"><Link className="w-4 h-4 mr-1.5"/>{link.name}</a>)}</div>}
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
            <div className="space-y-6">
                {resumeData.education.map((edu, index) => (
                    <div key={index} className="flex gap-4 items-start">
                        <div className="mt-1"><GraduationCap className="w-6 h-6 text-indigo-500"/></div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                            <p className="font-semibold text-indigo-600 dark:text-indigo-400">{edu.institution}</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">{edu.period}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
        <Section title="Certifications">
            <ul className="space-y-3">{resumeData.certifications.map((cert, index) => <li key={index} className="flex items-start"><Award className="w-5 h-5 mr-3 mt-1 text-indigo-500 flex-shrink-0"/><span>{cert}</span></li>)}</ul>
        </Section>
    </AnimatedSection>
);

const ActivitiesAndHobbiesTab = () => (
    <AnimatedSection>
        <Section title="Activities & Hobbies">
            <ul className="space-y-3">{resumeData.hobbies.map((hobby, index) => <li key={index} className="flex items-center">{hobby.icon}<span>{hobby.name}</span></li>)}</ul>
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
            <AnimatedSection><Section title="Professional Summary"><p className="text-lg leading-relaxed">{resumeData.headerSummary}</p></Section></AnimatedSection>
            <AnimatedSection><Section title="Core Competencies"><div className="grid md:grid-cols-3 gap-8">{resumeData.coreCompetencies.map((comp, index) => (<div key={index} className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"><div className="flex items-center mb-3">{comp.icon}<h3 className="text-xl font-semibold text-slate-900 dark:text-white">{comp.title}</h3></div><ul className="space-y-2 text-slate-600 dark:text-slate-300">{comp.skills.map((skill, i) => (<li key={i} className="flex items-center"><span className="text-indigo-500 mr-2">◆</span>{skill}</li>))}</ul></div>))}</div></Section></AnimatedSection>
            <AnimatedSection><Section title="Technical & Managerial Skills"><div className="grid md:grid-cols-2 gap-10"><div><h3 className="text-xl font-bold mb-4 flex items-center text-slate-900 dark:text-white"><BrainCircuit className="w-6 h-6 mr-3 text-indigo-500"/>Analytics Skills</h3><div className="space-y-4"><div><h4 className="font-semibold text-lg text-slate-800 dark:text-slate-200">R Programming</h4><p className="text-slate-600 dark:text-slate-400">{resumeData.analyticsSkills.r}</p></div><div><h4 className="font-semibold text-lg text-slate-800 dark:text-slate-200">Python</h4><p className="text-slate-600 dark:text-slate-400">{resumeData.analyticsSkills.python}</p></div><div><h4 className="font-semibold text-lg text-slate-800 dark:text-slate-200">Core Skills & ML</h4><p className="text-slate-600 dark:text-slate-400"><strong>Core:</strong> {resumeData.analyticsSkills.core}</p><p className="text-slate-600 dark:text-slate-400"><strong>ML:</strong> {resumeData.analyticsSkills.ml}</p></div></div></div><div><h3 className="text-xl font-bold mb-4 flex items-center text-slate-900 dark:text-white"><Briefcase className="w-6 h-6 mr-3 text-indigo-500"/>Project Management Skills</h3><div className="space-y-4"><div><h4 className="font-semibold text-lg text-slate-800 dark:text-slate-200">Agile Methodologies</h4><p className="text-slate-600 dark:text-slate-400">{resumeData.projectManagementSkills.methodologies}</p></div><div><h4 className="font-semibold text-lg text-slate-800 dark:text-slate-200">Estimation & Planning</h4><p className="text-slate-600 dark:text-slate-400">{resumeData.projectManagementSkills.estimation}</p></div><div><h4 className="font-semibold text-lg text-slate-800 dark:text-slate-200">Tools</h4><div className="flex flex-wrap gap-2 mt-1">{resumeData.projectManagementSkills.tools.map((item, i) => (<span key={i} className="bg-slate-200 text-slate-800 text-sm font-medium px-2.5 py-0.5 rounded-full dark:bg-slate-700 dark:text-slate-300">{item}</span>))}</div></div></div></div></div></Section></AnimatedSection>
            <AnimatedSection>
                <Section title="Work Experience">
                    <div className="space-y-12">
                        {fullResumeExperience.map((job, index) => (
                            <div key={index} className="flex flex-col sm:flex-row gap-4">
                                <div className="mt-1 flex-shrink-0"><Building className="w-6 h-6 text-indigo-500"/></div>
                                <div className="w-full">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{job.role}</h3>
                                    <p className="font-semibold text-indigo-600 dark:text-indigo-400">
                                         <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{job.company}</a> - <span className="text-slate-500 dark:text-slate-400 font-normal">{job.location}</span>
                                    </p>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{job.period}</p>
                                    {job.responsibilities && Object.entries(job.responsibilities).map(([category, points]) => (
                                        <div key={category} className="mb-4">
                                            <h4 className="font-semibold text-md text-slate-700 dark:text-slate-200 mb-2">{category}</h4>
                                             <ul className="list-disc list-inside space-y-1.5 text-slate-600 dark:text-slate-300">{points.map((point, i) => <li key={i}><HighlightKeywords text={point} keywords={keywordsToBold} /></li>)}</ul>
                                        </div>
                                    ))}
                                    {job.links && <div className="mt-4 flex flex-wrap gap-4">{job.links.map((link, i) => <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:underline transition-colors"><Link className="w-4 h-4 mr-1.5"/>{link.name}</a>)}</div>}
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>
            </AnimatedSection>
            <AnimatedSection><Section title="Technologies"><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6">{resumeData.technologies.map((tech) => (<div key={tech.category}><h4 className="font-semibold text-lg mb-3 text-slate-800 dark:text-slate-100 border-b border-indigo-200 dark:border-indigo-800 pb-1">{tech.category}</h4><div className="flex flex-wrap gap-2">{tech.items.map((item) => (<span key={item} className="bg-slate-200 text-slate-700 text-sm font-medium px-2.5 py-1 rounded-md dark:bg-slate-700 dark:text-slate-300">{item}</span>))}</div></div>))}</div></Section></AnimatedSection>
            <AnimatedSection><Section title="Education"><div className="space-y-6">{resumeData.education.map((edu, index) => (<div key={index} className="flex gap-4 items-start"><div className="mt-1"><GraduationCap className="w-6 h-6 text-indigo-500"/></div><div><h3 className="text-xl font-bold text-slate-900 dark:text-white">{edu.degree}</h3><p className="font-semibold text-indigo-600 dark:text-indigo-400">{edu.institution}</p><p className="text-sm text-slate-500 dark:text-slate-400">{edu.period}</p></div></div>))}</div></Section></AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8"><AnimatedSection><Section title="Certifications"><ul className="space-y-3">{resumeData.certifications.map((cert, index) => <li key={index} className="flex items-start"><Award className="w-5 h-5 mr-3 mt-1 text-indigo-500 flex-shrink-0"/><span>{cert}</span></li>)}</ul></Section></AnimatedSection><AnimatedSection><Section title="Activities & Hobbies"><ul className="space-y-3">{resumeData.hobbies.map((hobby, index) => <li key={index} className="flex items-center">{hobby.icon}<span>{hobby.name}</span></li>)}</ul></Section></AnimatedSection></div>
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

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeTab, setActiveTab] = useState('Summary');

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
        const script = document.createElement('script');
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, [isDarkMode]);

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
            console.error("PDF generation library not found.");
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
        <div className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 min-h-screen font-sans transition-colors duration-300">
            <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-5xl">
                <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
                     <button onClick={handleDownload} className="flex items-center gap-2 p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900">
                        <Download className="w-5 h-5 text-indigo-500" />
                        <span className="text-sm font-semibold pr-2 hidden sm:inline">Download PDF</span>
                    </button>
                    <button onClick={toggleTheme} className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-transform transform hover:scale-110 duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900">
                        {isDarkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-indigo-500" />}
                    </button>
                </div>

                <header className="text-center mt-12 mb-8">
                    <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white">{resumeData.name}</h1>
                    <h2 className="text-2xl mt-2 font-light text-indigo-600 dark:text-indigo-400">{resumeData.title}</h2>
                    <div className="mt-6 flex justify-center items-center flex-wrap gap-x-6 gap-y-2 text-slate-600 dark:text-slate-400">
                        <span className="flex items-center"><MapPin className="w-4 h-4 mr-2" />{resumeData.location}</span>
                        <a href={`tel:${resumeData.phone}`} className="flex items-center hover:text-indigo-500 transition-colors"><Phone className="w-4 h-4 mr-2" />{resumeData.phone}</a>
                        <a href={`mailto:${resumeData.email}`} className="flex items-center hover:text-indigo-500 transition-colors"><Mail className="w-4 h-4 mr-2" />{resumeData.email}</a>
                        <a href={resumeData.github} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-indigo-500 transition-colors"><Github className="w-4 h-4 mr-2" />insightsurge</a>
                    </div>
                </header>

                <div className="sticky top-0 z-40 bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-sm py-4 mb-8">
                    <div className="flex justify-center flex-wrap gap-2 md:gap-4 border-b-2 border-slate-200 dark:border-slate-700 pb-2">
                        {tabs.map(tab => (
                            <button
                                key={tab.name}
                                onClick={() => setActiveTab(tab.name)}
                                className={`flex items-center gap-2 px-3 py-2 text-sm md:text-base font-semibold rounded-t-lg transition-all duration-300
                                    ${activeTab === tab.name 
                                        ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400' 
                                        : 'text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-200 dark:hover:bg-slate-800'}`
                                }
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
                
                <footer className="text-center mt-12 py-6 border-t border-slate-200 dark:border-slate-800">
                    <p className="text-sm text-slate-500 dark:text-slate-400">© 2025 Harsh Verma. All rights reserved.</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Built with React, TypeScript, and Tailwind CSS.</p>
                </footer>
                
                {/* Hidden component for PDF generation */}
                <div className="hidden">
                    <div id="pdf-resume-content">
                       <PdfResumeContent />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default App;
