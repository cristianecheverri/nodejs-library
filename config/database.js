import postgres from 'postgres';

const sql = postgres({
    database: 'biblioteca',
    user: 'postgres',
    password: 'postgres'
});// will use psql environment variables

export default sql;