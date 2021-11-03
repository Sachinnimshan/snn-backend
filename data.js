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
            demo: "http://snmart.herokuapp.com",
            youtube: "https://www.youtube.com/watch?v=aRjjdu2k-xU&list=PLWzNP2iyv9fCSm_ZRnIvOP0tx3eK6upy9",
            github: "https://github.com/Sachinnimshan/snmart-web",
            languages: ['React','Node','Express','Mongo DB','CSS','Material UI','Bootstrap'],
            technology: "MERN Stack",
            gallery: ['/projects/p1.jpg', '/projects/p1.jpg', '/projects/p1.jpg','/projects/p1.jpg']
        },
        {
            title: "Cryptocurrency web",
            image: "/projects/crypto.jpg",
            description: "MERN Stack | Cryptocurrency website",
            demo: "http://cryptsn.herokuapp.com",
            youtube: "https://www.youtube.com/watch?v=aRjjdu2k-xU&list=PLWzNP2iyv9fCSm_ZRnIvOP0tx3eK6upy9",
            github: "https://github.com/Sachinnimshan/crypt-web",
            languages: ['React','Node','Express','Mongo DB','CSS','Material UI','Bootstrap'],
            technology: "MERN Stack",
            gallery: ['/projects/crypto.jpg', '/projects/crypto.jpg', '/projects/crypto.jpg']
        },
        {
            title: "TVSN Movie Web",
            image: "/projects/tvsn.jpg",
            description: "MERN Stack | Movie & Tv Series website",
            demo: "http://tvsn.herokuapp.com",
            youtube: "https://www.youtube.com/watch?v=SJC6whT0wQM",
            github: "https://github.com/Sachinnimshan/tvsn",
            languages: ['React','Node','Express','Mongo DB','CSS','Material UI','Bootstrap'],
            technology: "MERN Stack",
            gallery: ['/projects/tvsn.jpg', '/projects/tvsn.jpg', '/projects/tvsn.jpg']
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
    ]
}

export default data;