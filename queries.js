const Pool = require('pg').Pool
const pool = new Pool({
  user: 'harrydobbs',
  host: 'localhost',
  database: 'ecommerce_app',
  password: null,
  port: 5432,
});

//Get all user_accounts

const getUserAccounts = (request, response) => {
    pool.query('SELECT * FROM user_accounts ORDER BY user_id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  };

  const getUserAccountById = (request, response) => {
    const id = parseInt(request.params.user_id)
  
    pool.query('SELECT * FROM user_accounts WHERE user_id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  };

  // const createUserAccount = (request, response) => {
  //   const { user_id, user_email} = request.body
  
  //   pool.query('INSERT INTO user_account (user_id, user_email) VALUES ($1, $2) RETURNING *', [user_id, user_email], (error, results) => {
  //     if (error) {
  //       throw error
  //     }
  //     response.status(201).send(`User added with ID: ${results.rows[0].user_id}`)
  //   })
  // };

  // const updateUserAccount = (request, response) => {
  //   const id = parseInt(request.params.id)
  //   const { name, email } = request.body
  
  //   pool.query(
  //     'UPDATE users SET name = $1, email = $2 WHERE id = $3',
  //     [name, email, id],
  //     (error, results) => {
  //       if (error) {
  //         throw error
  //       }
  //       response.status(200).send(`User modified with ID: ${id}`)
  //     }
  //   )
  // };

  const deleteUserAccount = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM user_accounts WHERE user_id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }

  module.exports = {
    getUserAccounts,
    getUserAccountById,
    // createUserAccount,
    // updateUserAccount,
    deleteUserAccount,
  };