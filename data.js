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
            github: "https://github.com/Sachinnimshan/snmart-web"
        },
        {
            title: "Cryptocurrency web",
            image: "/projects/crypto.jpg",
            description: "MERN Stack | Cryptocurrency website",
            demo: "http://cryptsn.herokuapp.com",
            youtube: "https://www.youtube.com/watch?v=aRjjdu2k-xU&list=PLWzNP2iyv9fCSm_ZRnIvOP0tx3eK6upy9",
            github: "https://github.com/Sachinnimshan/crypt-web"
        },
        {
            title: "TVSN Movie Web",
            image: "/projects/tvsn.jpg",
            description: "MERN Stack | Movie & Tv Series website",
            demo: "http://tvsn.herokuapp.com",
            youtube: "https://www.youtube.com/watch?v=SJC6whT0wQM",
            github: "https://github.com/Sachinnimshan/tvsn"
        }
    ]
}

export default data;