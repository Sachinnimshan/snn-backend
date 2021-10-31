import bcrypt from 'bcryptjs';

const data = [
    {
        name: "Sachin Nimshan",
        email: "sachinnimshan@gmail.com",
        password: bcrypt.hashSync('1234', 8)
    }
]

export default data;