import mongoose, { mongo } from 'mongoose';

async function conectarDB() {
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
};

export default conectarDB; //exportando a função conectar