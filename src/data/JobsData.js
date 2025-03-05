const JobsData = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'TechCorp',
      location: 'New York',
      description: 'Develop and maintain web applications using modern frameworks.',
      responsibilities: [
        "Write clean, scalable code using JavaScript and React.",
        "Collaborate with UI/UX designers to improve user experience.",
        "Troubleshoot, debug, and upgrade existing applications."
      ],
      qualifications: ["Bachelor's in Computer Science", "2+ years experience", "Proficiency in React & Node.js"],
      benefits: ["Health insurance", "401(k)", "Remote work options"],
      jobType: "Part-Time"
    },
    {
      id: 2,
      title: 'Data Analyst',
      company: 'Data Inc.',
      location: 'San Francisco',
      description: 'Analyze business data to provide valuable insights.',
      responsibilities: [
        "Collect, clean, and analyze data sets.",
        "Generate reports and present findings to stakeholders.",
        "Work with teams to improve business strategies."
      ],
      qualifications: ["Degree in Statistics or related field", "Experience with SQL & Python", "Data visualization skills"],
      benefits: ["Flexible hours", "Gym membership", "Performance bonuses"],
      jobType: "Full-Time"
    },
    {
      id: 3,
      title: 'Project Manager',
      company: 'Biz Solutions',
      location: 'Chicago',
      description: 'Manage project timelines and teams effectively.',
      responsibilities: [
        "Coordinate project activities and delegate tasks.",
        "Ensure project deadlines and budgets are met.",
        "Communicate with clients and stakeholders."
      ],
      qualifications: ["PMP certification preferred", "5+ years in project management", "Strong leadership skills"],
      benefits: ["Company car", "Work from home options", "Annual retreats"],
      jobType: "Full-Time"
    },
    {
      id: 4,
      title: 'Marketing Manager',
      company: 'BrandX',
      location: 'Los Angeles',
      description: 'Oversee marketing campaigns and brand strategies.',
      responsibilities: [
        "Develop and execute marketing strategies.",
        "Manage social media presence and digital advertising.",
        "Monitor campaign performance and optimize content."
      ],
      qualifications: ["MBA in Marketing", "Expertise in SEO & digital marketing", "Creative mindset"],
      benefits: ["Stock options", "Paid time off", "Wellness programs"],
      jobType: "Part-Time"
    },
    {
      id: 5,
      title: 'HR Specialist',
      company: 'PeopleFirst',
      location: 'Boston',
      description: 'Manage recruitment, training, and employee relations.',
      responsibilities: [
        "Develop HR policies and maintain employee records.",
        "Oversee recruitment and onboarding of new employees.",
        "Handle employee grievances and benefits programs."
      ],
      qualifications: ["HR certification (SHRM or similar)", "3+ years experience", "Strong interpersonal skills"],
      benefits: ["Retirement plan", "Work-life balance initiatives", "Career growth opportunities"],
      jobType: "Part-Time"
    },
    {
      id: 6,
      title: 'UX Designer',
      company: 'Creative Minds',
      location: 'Bangalore',
      description: 'Design engaging and user-friendly digital experiences.',
      responsibilities: [
        "Conduct user research and usability testing.",
        "Develop wireframes, prototypes, and user flows.",
        "Collaborate with developers to implement UI designs."
      ],
      qualifications: ["Degree in Design or similar", "Proficiency in Figma & Sketch", "Understanding of HTML & CSS"],
      benefits: ["Remote work options", "Company retreats", "Equipment allowance"],
      jobType: "Full-Time"
    },
    {
      id: 7,
      title: "Software Engineer",
      company: "TechCorp",
      location: "New York",
      description: "Develop and maintain web applications using modern frameworks.",
      responsibilities: [
        "Write clean, scalable code using JavaScript and React.",
        "Collaborate with UI/UX designers to improve user experience.",
        "Troubleshoot, debug, and upgrade existing applications."
      ],
      qualifications: ["Bachelor's in Computer Science", "2+ years experience", "Proficiency in React & Node.js"],
      benefits: ["Health insurance", "401(k)", "Remote work options"],
      jobType: "Part-Time"
    },
    {
      id: 8,
      title: "Data Analyst",
      company: "Data Inc.",
      location: "San Francisco",
      description: "Analyze business data to provide valuable insights.",
      responsibilities: [
        "Collect, clean, and analyze data sets.",
        "Generate reports and present findings to stakeholders.",
        "Work with teams to improve business strategies."
      ],
      qualifications: ["Degree in Statistics or related field", "Experience with SQL & Python", "Data visualization skills"],
      benefits: ["Flexible hours", "Gym membership", "Performance bonuses"],
      jobType: "Full-Time"
    },
    {
      id: 9,
      title: "Project Manager",
      company: "Biz Solutions",
      location: "Chicago",
      description: "Manage project timelines and teams effectively.",
      responsibilities: [
        "Coordinate project activities and delegate tasks.",
        "Ensure project deadlines and budgets are met.",
        "Communicate with clients and stakeholders."
      ],
      qualifications: ["PMP certification preferred", "5+ years in project management", "Strong leadership skills"],
      benefits: ["Company car", "Work from home options", "Annual retreats"],
      jobType: "Contract"
    },
    {
      id: 10,
      title: "Marketing Manager",
      company: "BrandX",
      location: "Los Angeles",
      description: "Oversee marketing campaigns and brand strategies.",
      responsibilities: [
        "Develop and execute marketing strategies.",
        "Manage social media presence and digital advertising.",
        "Monitor campaign performance and optimize content."
      ],
      qualifications: ["MBA in Marketing", "Expertise in SEO & digital marketing", "Creative mindset"],
      benefits: ["Stock options", "Paid time off", "Wellness programs"],
      jobType: "Full-Time"
    },
    {
      id: 11,
      title: "HR Specialist",
      company: "PeopleFirst",
      location: "Boston",
      description: "Manage recruitment, training, and employee relations.",
      responsibilities: [
        "Develop HR policies and maintain employee records.",
        "Oversee recruitment and onboarding of new employees.",
        "Handle employee grievances and benefits programs."
      ],
      qualifications: ["HR certification (SHRM or similar)", "3+ years experience", "Strong interpersonal skills"],
      benefits: ["Retirement plan", "Work-life balance initiatives", "Career growth opportunities"],
      jobType: "Internship"
    },
    {
      id: 12,
      title: "UX Designer",
      company: "Creative Minds",
      location: "Bangalore",
      description: "Design engaging and user-friendly digital experiences.",
      responsibilities: [
        "Conduct user research and usability testing.",
        "Develop wireframes, prototypes, and user flows.",
        "Collaborate with developers to implement UI designs."
      ],
      qualifications: ["Degree in Design or similar", "Proficiency in Figma & Sketch", "Understanding of HTML & CSS"],
      benefits: ["Remote work options", "Company retreats", "Equipment allowance"],
      jobType: "Full-Time"
    },
    {
      id: 13,
      title: "Software Developer Intern",
      company: "InnovateX",
      location: "Austin",
      description: "Assist in developing and testing new software applications.",
      responsibilities: [
        "Write and maintain clean code.",
        "Work closely with senior developers to improve software solutions.",
        "Participate in daily stand-up meetings."
      ],
      qualifications: ["Currently pursuing a Computer Science degree", "Experience with JavaScript & React", "Eagerness to learn"],
      benefits: ["Mentorship program", "Flexible working hours", "Remote options"],
      jobType: "Internship"
    },
    {
      id: 14,
      title: "IT Support Specialist",
      company: "NetTech",
      location: "Agra",
      description: "Provide technical support for software and hardware issues.",
      responsibilities: [
        "Assist users with troubleshooting software and hardware issues.",
        "Maintain IT systems and perform routine checks.",
        "Work with the cybersecurity team to ensure data safety."
      ],
      qualifications: ["Degree in IT or related field", "2+ years experience", "Strong problem-solving skills"],
      benefits: ["Paid training", "Medical insurance", "401(k)"],
      jobType: "Contract"
    }  
  ];

  export default JobsData;