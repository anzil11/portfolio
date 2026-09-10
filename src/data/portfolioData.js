export const personalInfo = {
  name: "Anzil AK",
  title: "Frontend Team Lead & Full Stack Developer",
  tagline: "Leading frontend teams, architecting high-performance ERP systems & building scalable enterprise web platforms.",
  location: "Palakkad, Kerala, India",
  email: "anzilinfo12@gmail.com",
  phone: "+91 9567559962",
  phoneDisplay: "+91 95675 59962",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  avatar: "/profile.jpeg",
  resumeUrl: "/Anzil_Ak_CV.pdf",
  summary: "Frontend Team Lead and Full Stack Developer with proven experience leading a frontend team of 6 engineers and building complex enterprise ERP systems, e-commerce platforms, and responsive web applications using React.js, Angular, and Next.js. Experienced in enterprise UI architecture, optimizing ERP components for performance and data integrity, building secure REST APIs, and coordinating agile delivery.",
  stats: [
    { label: "Leadership", value: "Lead of 6", desc: "Frontend Engineering Team" },
    { label: "Core Specialization", value: "ERP", desc: "Sales, Billing, HR, Inventory" },
    { label: "Tech Stacks", value: "React / Next / Angular", desc: "MERN & Microservices" },
    { label: "Code Integrity", value: "100%", desc: "Clean UI & Secure APIs" },
  ]
};

export const experiences = [
  {
    id: "exouzia",
    company: "Exouzia",
    type: "Full-time",
    totalDuration: "Nov 2023 - Present",
    current: true,
    roles: [
      {
        title: "Frontend Team Lead",
        period: "Jul 2026 - Present",
        highlight: "Leading a frontend engineering team of 6 members on enterprise ERP systems",
        skills: ["Team Leadership", "Frontend Architecture", "React.js", "Next.js", "Angular", "Code Reviews", "REST APIs", "Agile / Scrum"],
        bullets: [
          "Leading a team of 6 frontend developers in architecting, developing, and scaling enterprise ERP web applications.",
          "Overseeing frontend code quality, component reusability, architecture standards, and conducting comprehensive code reviews.",
          "Driving seamless integration of core ERP modules (Sales, Billing, Inventory, Accounting, HR) with backend RESTful services and APIs.",
          "Mentoring developers, planning sprint deliverables, and collaborating directly with cross-functional stakeholders."
        ]
      },
      {
        title: "Frontend Developer",
        period: "Jul 2025 - Jul 2026",
        highlight: "Enterprise scale UI architecture & real-time REST integration",
        skills: ["React.js", "Next.js", "Angular", "Redux Toolkit", "REST APIs", "Tailwind CSS", "TypeScript", "UI Architecture"],
        bullets: [
          "Built and maintained complex ERP and e-commerce web applications using React.js, Angular, and Next.js, focusing on scalability, performance, and clean UI architecture.",
          "Designed and implemented fully responsive websites optimized for multiple devices and modern browsers, ensuring consistent user experience.",
          "Developed and modernized ERP modules (sales, billing, inventory, reporting) by enhancing components based on client requirements and business logic.",
          "Integrated frontend applications with backend services using REST APIs, enabling smooth data flow and real-time updates across enterprise systems.",
          "Applied efficient state management and reusable component patterns to improve maintainability and performance of large-scale applications."
        ]
      },
      {
        title: "Angular Developer",
        period: "Jan 2025 - Jul 2025",
        highlight: "Specialized ERP modules in Accounting, HR & Payroll",
        skills: ["Angular", "PrimeNG", "TypeScript", "JSON", "REST APIs", "Access Control"],
        bullets: [
          "Developed and maintained Angular-based ERP applications covering Accounting, HR & Payroll, CRM, Transactions, and Purchase & Sales.",
          "Implemented modular component architecture with PrimeNG for high data-density forms and interactive dashboards.",
          "Engineered role-based access protection and fine-grained data visibility controls."
        ]
      },
      {
        title: "React Developer",
        period: "Nov 2023 - Jan 2025",
        highlight: "E-Commerce, Billing & Interactive Sales Modules",
        skills: ["React.js", "Redux", "CSS3 / SCSS", "ERP Software", "API Integration"],
        bullets: [
          "Developed and maintained React-based web applications for E-commerce platforms, ERP systems, and Billing software.",
          "Implemented responsive layouts and dynamic shopping cart / billing workflows with optimized JS array processing.",
          "Collaborated closely with backend teams to establish standardized REST contracts."
        ]
      }
    ]
  },
  {
    id: "luminar",
    company: "Luminar Technolab",
    type: "Internship",
    totalDuration: "May 2023 - Nov 2023 (7 mos)",
    location: "Calicut, Kerala",
    current: false,
    roles: [
      {
        title: "MEARN Stack Developer Intern",
        period: "May 2023 - Nov 2023",
        highlight: "Full stack MERN foundations & agile team collaboration",
        skills: ["MongoDB", "Express.js", "React.js", "Node.js", "Angular", "Git", "REST APIs"],
        bullets: [
          "United with an agile engineering team to develop web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Angular for select client projects.",
          "Created user-friendly, responsive, and cross-browser compatible web pages using React.js.",
          "Incorporated front-end and back-end systems by connecting RESTful APIs for seamless functionality.",
          "Utilized MongoDB to design data schemas and manage database queries across various projects.",
          "Identified and fixed critical bugs, improving overall application performance and responsiveness.",
          "Used Git for team version control and managed pull requests on shared production codebases."
        ]
      }
    ]
  }
];

export const skillsData = {
  frontend: {
    category: "Frontend Engineering",
    description: "Modern, high-speed, reactive user interfaces and scalable component architectures.",
    skills: [
      { name: "React.js", level: "Advanced", icon: "react" },
      { name: "Next.js", level: "Advanced", icon: "next" },
      { name: "Angular", level: "Advanced", icon: "angular" },
      { name: "Redux Toolkit", level: "Advanced", icon: "redux" },
      { name: "TypeScript", level: "Proficient", icon: "ts" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "js" },
      { name: "Tailwind CSS", level: "Advanced", icon: "tailwind" },
      { name: "HTML5 / SCSS", level: "Advanced", icon: "html" },
      { name: "Bootstrap", level: "Advanced", icon: "bootstrap" },
      { name: "PrimeNG", level: "Proficient", icon: "primeng" },
      { name: "Figma (UI/UX)", level: "Design", icon: "figma" }
    ]
  },
  backend: {
    category: "Backend & APIs",
    description: "Server-side logic, secure REST contracts, real-time messaging, and microservices.",
    skills: [
      { name: "Node.js", level: "Advanced", icon: "node" },
      { name: "Express.js", level: "Advanced", icon: "express" },
      { name: "RESTful APIs", level: "Advanced", icon: "api" },
      { name: "WebSockets", level: "Proficient", icon: "socket" },
      { name: "Microservices", level: "Proficient", icon: "microservices" },
      { name: "JSON & Data Flow", level: "Advanced", icon: "json" }
    ]
  },
  database: {
    category: "Databases & Storage",
    description: "Relational and document storage, data integrity, indexing, and query optimization.",
    skills: [
      { name: "PostgreSQL", level: "Proficient", icon: "postgres" },
      { name: "MongoDB", level: "Advanced", icon: "mongo" },
      { name: "MySQL", level: "Proficient", icon: "mysql" },
      { name: "SQL", level: "Advanced", icon: "sql" }
    ]
  },
  devops: {
    category: "DevOps & Developer Tools",
    description: "Version control, API documentation, testing, and modern workflows.",
    skills: [
      { name: "Git", level: "Advanced", icon: "git" },
      { name: "GitLab", level: "Proficient", icon: "gitlab" },
      { name: "Postman", level: "Advanced", icon: "postman" },
      { name: "Swagger", level: "Proficient", icon: "swagger" },
      { name: "Vite / Webpack", level: "Advanced", icon: "vite" }
    ]
  },
  enterprise: {
    category: "ERP & Domain Expertise",
    description: "Specialized business logic systems engineered for accuracy, security, and scalability.",
    skills: [
      { name: "Sales & Invoicing Modules", level: "Specialist", icon: "sales" },
      { name: "Inventory & Stock Tracking", level: "Specialist", icon: "inventory" },
      { name: "HR & Payroll Processing", level: "Specialist", icon: "hr" },
      { name: "Accounting & Ledger Flow", level: "Specialist", icon: "accounting" },
      { name: "Role-Based Access Control (RBAC)", level: "Specialist", icon: "security" },
      { name: "Purchase Order Management", level: "Specialist", icon: "po" }
    ]
  },
  softSkills: [
    "Problem-solving",
    "Technical Architecture",
    "Teamwork & Agile Cooperation",
    "Cross-functional Communication",
    "Time Management",
    "Critical Thinking"
  ]
};

export const projects = [
  {
    id: "axent-erp",
    title: "Axent ERP System",
    subtitle: "Enterprise Management Suite",
    category: "ERP Systems",
    featured: true,
    tags: ["React.js", "Next.js", "Node.js", "REST APIs", "PostgreSQL", "Tailwind CSS"],
    shortDesc: "Comprehensive enterprise ERP platform integrating Sales, Inventory, Human Resources (HR), and Accounting modules into a unified reactive dashboard.",
    problem: "Enterprise operations faced fragmented data silos across departments, slow billing reconciliation, and lack of real-time inventory synchronization.",
    solution: "Designed and built an interconnected ERP architecture with responsive modules, secure POST APIs for financial protection, and real-time backend synchronization.",
    contributions: [
      "Architected responsive modular interfaces for Sales, Inventory, HR, and Accounting workflows.",
      "Engineered secure POST APIs to safeguard sensitive financial, payroll, and employee records.",
      "Collaborated with backend teams to integrate RESTful endpoints and ensure consistent state across modules.",
      "Enhanced page load efficiency and grid rendering for high-volume enterprise tables."
    ],
    features: [
      "Multi-module unified dashboard (Sales, Inventory, HR, Accounting)",
      "Secure role-based API data endpoints",
      "Real-time stock level synchronization",
      "Financial ledger reporting with print/export capabilities"
    ]
  },
  {
    id: "ecommerce-platform",
    title: "Full-Stack E-Commerce Platform",
    subtitle: "Modern Storefront & Admin Portal",
    category: "Full Stack",
    featured: true,
    tags: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    shortDesc: "End-to-end responsive e-commerce web application featuring dynamic catalog filtering, shopping cart state management, checkout, and admin order fulfillment.",
    problem: "Need for a fast, mobile-first e-commerce experience with role-based access for store managers and frictionless customer cart management.",
    solution: "Built a reactive React frontend backed by Express/MongoDB with real-time cart persistence, JWT authentication, and administrative inventory controls.",
    contributions: [
      "Developed responsive client storefront with instant product search, categorization, and sorting.",
      "Implemented customer and administrator role-based authentication (RBAC).",
      "Engineered Redux cart state with offline persistence and live order tracking endpoints.",
      "Integrated backend endpoints for automated stock deduction upon checkout."
    ],
    features: [
      "Live search, filtering & pagination",
      "Granular Customer vs. Admin access control",
      "Cart management & checkout pipeline",
      "Order status lifecycle & tracking"
    ]
  },
  {
    id: "billing-software",
    title: "Billing & Sales Management S/W",
    subtitle: "High-Speed Invoicing Engine",
    category: "ERP Systems",
    featured: true,
    tags: ["React.js", "Redux", "RESTful APIs", "Advanced JS", "Bootstrap"],
    shortDesc: "High-throughput billing and sales analytics ERP software engineered for rapid order summaries, purchase order generation, and tax computations.",
    problem: "Legacy billing tools caused checkout bottlenecks and calculation delays during peak transaction hours.",
    solution: "Optimized frontend calculation pipelines using advanced JavaScript array transformations and memoization for instant invoice generation.",
    contributions: [
      "Modernized billing components to dynamically compute taxes, discounts, and itemized totals with zero UI lag.",
      "Refactored purchase order and sales summary components using advanced array algorithms.",
      "Built exportable sales report generation tools with customizable date ranges."
    ],
    features: [
      "Instant invoice computation & receipt generation",
      "Purchase order tracking & reconciliation",
      "Dynamic daily/monthly sales reporting",
      "Optimized for high-volume transactions"
    ]
  },
  {
    id: "room-booking-erp",
    title: "Room Booking & Hospitality ERP",
    subtitle: "Modular Angular ERP Solution",
    category: "ERP Systems",
    featured: false,
    tags: ["Angular", "PrimeNG", "TypeScript", "REST APIs", "Access Control"],
    shortDesc: "Comprehensive room booking ERP platform built with Angular and PrimeNG, providing automated reservation calendars and strict access control.",
    problem: "Hospitality venues required a reliable scheduling interface that prevented double-bookings and controlled staff permissions.",
    solution: "Developed modular Angular components with PrimeNG calendar grids and multi-tier authentication.",
    contributions: [
      "Expanded and sustained the complete ERP application using Angular and PrimeNG design patterns.",
      "Modernized booking calendar components to adapt dynamically to custom client constraints.",
      "Blended secure authentication protocols to protect guest records and staff authorization."
    ],
    features: [
      "Interactive calendar reservation matrix",
      "Room status tracking (Occupied, Cleaning, Available)",
      "Role-based staff authentication & audit trail",
      "PrimeNG data grid tables with custom sorting"
    ]
  },
  {
    id: "seosko-serv",
    title: "Seosko Serv Enterprise Solutions",
    subtitle: "Business Support & IT Infrastructure",
    category: "Enterprise Architecture",
    featured: false,
    tags: ["IT Solutions", "Project Management", "Consultancy", "Process Automation"],
    shortDesc: "Business support and IT infrastructure platform delivering export consultancy, streamlined cross-functional operations, and organizational training.",
    problem: "Coordinating multi-disciplinary teams and export consulting workflows without a centralized operational system.",
    solution: "Delivered client-focused IT architecture and workflow management tools to streamline communication and execution.",
    contributions: [
      "Supported comprehensive business solutions including export consultancy and project workflows.",
      "Collaborated on strategic IT partnerships to optimize internal operational throughput.",
      "Facilitated team alignment and technical training for organizational tools."
    ],
    features: [
      "Cross-functional project tracking",
      "Export consultancy workflow management",
      "Operational efficiency dashboards"
    ]
  },
  {
    id: "skyrockets",
    title: "Skyrockets CRM & Growth Suite",
    subtitle: "Digital Branding & CRM/ERP Services",
    category: "Enterprise Architecture",
    featured: false,
    tags: ["CRM/ERP", "Digital Strategy", "Web Development", "Analytics"],
    shortDesc: "Comprehensive digital growth suite offering CRM/ERP integrations, market research analytics, customer engagement workflows, and brand presence tools.",
    problem: "Businesses struggling to connect customer engagement pipelines directly with backend CRM/ERP records.",
    solution: "Designed integrated interfaces connecting front-facing digital channels with backend customer relationship management.",
    contributions: [
      "Implemented CRM/ERP workflows to enhance customer retention and pipeline visibility.",
      "Developed web components for user experience enhancement and lead conversion.",
      "Assisted in technical execution for customer engagement and analytics."
    ],
    features: [
      "Integrated CRM lead & deal pipelines",
      "Market analytics & performance tracking",
      "End-to-end customer lifecycle management"
    ]
  }
];

export const educationData = [
  {
    degree: "Bachelor of Science in Computer Science (B.Sc. CS)",
    institution: "Lement College of Advanced Studies, Palakkad",
    location: "Palakkad, Kerala",
    period: "2020 - 2023",
    status: "Graduated",
    highlights: [
      "Core coursework in Data Structures, Algorithms, Database Management Systems, Object-Oriented Programming, and Software Engineering.",
      "Built academic projects focusing on full-stack web technologies, modern JavaScript, and database integration.",
      "Active participant in technical problem-solving and software development workshops."
    ]
  }
];

export const engineeringPrinciples = [
  {
    title: "Scalable UI Architecture",
    desc: "Designing modular, reusable components with strict separation of concerns, enabling enterprise codebases to grow effortlessly.",
    icon: "layers"
  },
  {
    title: "Enterprise Data Integrity",
    desc: "Implementing secure API contracts, strict typing, and validation across complex business logic like Sales, Billing, and HR.",
    icon: "shield"
  },
  {
    title: "Zero-Lag Performance",
    desc: "Optimizing state updates, utilizing efficient JS algorithms, and memoizing heavy computations for instant user feedback.",
    icon: "zap"
  },
  {
    title: "Cross-Device Excellence",
    desc: "Crafting pixel-perfect, accessible, and fully responsive layouts that perform seamlessly from mobile devices to 4K displays.",
    icon: "monitor"
  }
];
