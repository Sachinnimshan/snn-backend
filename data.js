import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Sachin Nimshan",
      email: "sachinnimshan@gmail.com",
      password: bcrypt.hashSync("1234", 8),
    },
  ],
  projects: [
    {
      title: "Amazon Clone",
      image: "/projects/p1.jpg",
      description: "MERN Stack | E-commerce website",
      demo: "http://snmart.netlify.app",
      youtube:
        "https://www.youtube.com/watch?v=aRjjdu2k-xU&list=PLWzNP2iyv9fCSm_ZRnIvOP0tx3eK6upy9",
      github: "https://github.com/Sachinnimshan/snmart-web",
      languages: [
        "React",
        "Node",
        "Express",
        "Mongo DB",
        "CSS",
        "Material UI",
        "Bootstrap",
      ],
      technology: "MERN Stack",
      gallery: [
        "/projects/p1.jpg",
        "/projects/p1.jpg",
        "/projects/p1.jpg",
        "/projects/p1.jpg",
      ],
    },
    {
      title: "TVSN Movie Web",
      image: "/projects/tvsn.jpg",
      description: "MERN Stack | Movie & Tv Series website",
      demo: "http://tvsn.netlify.app",
      youtube: "https://www.youtube.com/watch?v=SJC6whT0wQM",
      github: "https://github.com/Sachinnimshan/tvsn",
      languages: [
        "React",
        "Node",
        "Express",
        "Mongo DB",
        "CSS",
        "Material UI",
        "Bootstrap",
      ],
      technology: "MERN Stack",
      gallery: [
        "/projects/tvsn.jpg",
        "/projects/tvsn.jpg",
        "/projects/tvsn.jpg",
      ],
    },
    {
      title: "Memosn Social Media Web",
      image: "/projects/memo.jpg",
      description: "MERN Stack | Social Media Website",
      demo: "http://memosn.netlify.app",
      youtube: "https://www.youtube.com/watch?v=SJC6whT0wQM",
      github: "https://github.com/Sachinnimshan/memo_web",
      languages: [
        "React",
        "Node",
        "Express",
        "Mongo DB",
        "CSS",
        "Material UI",
        "Bootstrap",
      ],
      technology: "MERN Stack",
      gallery: ["/projects/memosn.jpg"],
    },
  ],
  comments: [
    {
      name: "Sachin Nimshan",
      email: "sachinnimshan@gmail.com",
      comment: "It's an Amazing work",
      projectID: "6180f74613d717488e90656f",
    },
    {
      name: "John Hicock",
      email: "johnhicock@gmail.com",
      comment: "Wooow, its amazing work",
      projectID: "6180f74613d717488e90656f",
    },
    {
      name: "John Doe",
      email: "John Doe@gmail.com",
      comment: "Elegant work, woooow",
      projectID: "6180f74613d717488e906570",
    },
    {
      name: "Kumar Sangakkara",
      email: "sanga@gmail.com",
      comment: "Woow, Keep it up",
      projectID: "6180f74713d717488e906571",
    },
  ],
  resume: [
    {
      resume: "/projects/K.G.A Sachin Nimshan - CV.pdf",
    },
  ],
  experienceData: [
    {
      start: new Date(2022, 4),
      ends: new Date(2022, 12),
      companyName: "Spades App - United Arab Emirates",
      jobTitle: "Frontend Engineer",
      keyroles: [
        "Rapid feature development and working in an agile environment.",
        "Exposure into CI/CD practices",
        "Frontend developments with react JS adhering to global best practices.",
        "Assist in new feature developments mainly in 2 applications",
        "Maintain and develop reusable components in project for future usage",
        "General bug fixing in front end",
      ],
    },
    {
      start: new Date(2022, 2),
      ends: new Date(2022, 4),
      companyName: "Arimac - Sri Lanka",
      jobTitle: "Software Engineer 1",
      keyroles: [
        "Rapid feature development and working in an agile environment.",
        "Exposure into CI/CD practices",
        "Frontend developments with react JS adhering to global best practices.",
        "General bug fixing in front end",
      ],
    },
    {
      start: new Date(2020, 7),
      ends: new Date(2021, 11),
      companyName: "Codedagger - Australia",
      jobTitle: "Software Developer",
      keyroles: [
        "Exposure into backend implementations (Express JS)",
        "General bug fixing in front end and backend",
        "Frontend developments with react JS adhering to global best practices",
      ],
    },
  ],
  educationData: [
    {
      title: "Bachelor of Science with Honours in Software Engineering",
      years: "2017 - 2018",
      university: "Cardiff Metropolitan University",
      grade: "2nd Class",
      syllabus: [""],
    },
    {
      title: "Higher National Diploma in Computing & Software Engineering",
      years: "2016 - 2017",
      university: "ICBT Campus and Cardiff Metropolitan University",
      grade: "1st Class",
      syllabus: [""],
    },
  ],
};

export default data;
