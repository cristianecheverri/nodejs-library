import sql from '../../config/database.js';

export async function userSignUp(user) {
    const new_user = await sql`
        insert into users 
        ${sql(user, 'username', 'password', 'user_first_name', 'user_last_name', 'user_age', 'user_birth_date')} 
        returning id_user, username;`;
    return new_user;
}

export async function verifyUser(user) {
    const verified_user = await sql`
    select
        *
      from users WHERE username = ${user.username} AND password = ${user.password}
     `;
    return verified_user;
}