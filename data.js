import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: "Sachin Nimshan",
            email: "sachinnimshan@gmail.com",
            password: bcrypt.hashSync('1234', 8)
        }
    ],
    projects: [
        {
            title: "Amazon Clone",
            image: "/projects/p1.jpg",
            description: "MERN Stack | E-commerce website",
            demo: "http://snmart.netlify.app",
            youtube: "https://www.youtube.com/watch?v=aRjjdu2k-xU&list=PLWzNP2iyv9fCSm_ZRnIvOP0tx3eK6upy9",
            github: "https://github.com/Sachinnimshan/snmart-web",
            languages: ['React','Node','Express','Mongo DB','CSS','Material UI','Bootstrap'],
            technology: "MERN Stack",
            gallery: ['/projects/p1.jpg', '/projects/p1.jpg', '/projects/p1.jpg','/projects/p1.jpg']
        },
        {
            title: "TVSN Movie Web",
            image: "/projects/tvsn.jpg",
            description: "MERN Stack | Movie & Tv Series website",
            demo: "http://tvsn.netlify.app",
            youtube: "https://www.youtube.com/watch?v=SJC6whT0wQM",
            github: "https://github.com/Sachinnimshan/tvsn",
            languages: ['React','Node','Express','Mongo DB','CSS','Material UI','Bootstrap'],
            technology: "MERN Stack",
            gallery: ['/projects/tvsn.jpg', '/projects/tvsn.jpg', '/projects/tvsn.jpg']
        },
        {
            title: "Memosn Social Media Web",
            image: "/projects/memo.jpg",
            description: "MERN Stack | Social Media Website",
            demo: "http://memosn.netlify.app",
            youtube: "https://www.youtube.com/watch?v=SJC6whT0wQM",
            github: "https://github.com/Sachinnimshan/memo_web",
            languages: ['React','Node','Express','Mongo DB','CSS','Material UI','Bootstrap'],
            technology: "MERN Stack",
            gallery: ['/projects/memosn.jpg']
        }
    ],
    comments: [
        {
            name: "Sachin Nimshan",
            email: "sachinnimshan@gmail.com",
            comment: "It's an Amazing work",
            projectID: "6180f74613d717488e90656f"
        },
        {
            name: "John Hicock",
            email: "johnhicock@gmail.com",
            comment: "Wooow, its amazing work",
            projectID: "6180f74613d717488e90656f"
        },
        {
            name: "John Doe",
            email: "John Doe@gmail.com",
            comment: "Elegant work, woooow",
            projectID: "6180f74613d717488e906570"
        },
        {
            name: "Kumar Sangakkara",
            email: "sanga@gmail.com",
            comment: "Woow, Keep it up",
            projectID: "6180f74713d717488e906571"
        }
    ],
    resume: [
        {
            resume: "/projects/K.G.A Sachin Nimshan - CV.pdf"
        }
    ]
}

export default data;