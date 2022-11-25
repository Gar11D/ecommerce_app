const Pool = require('pg').Pool
const pool = new Pool({
  user: 'harrydobbs',
  host: 'localhost',
  database: 'ecommerce_app',
  password: null,
  port: 5432,
});

//GET all user_accounts

const getUserAccounts = (request, response) => {
    pool.query('SELECT * FROM user_accounts ORDER BY user_id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  };

//GET all user_accounts by ID

  const getUserAccountById = (request, response) => {
    const id = parseInt(request.params.user_id)
  
    pool.query('SELECT * FROM user_accounts WHERE user_id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  };

//CREATE a new user_account

  const createUserAccount = (request, response) => {
    const { user_id, user_email} = request.body
  
    pool.query('INSERT INTO user_accounts (user_id, user_email) VALUES ($1, $2) RETURNING *', [user_id, user_email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.rows[0].user_id}`)
    })
  };

//UPDATE an existing user_account

  const updateUserAccount = (request, response) => {
    const user_id = parseInt(request.params.user_id);
    const { user_email } = request.body
  
    pool.query(
      'UPDATE user_accounts SET user_email = $1 WHERE user_id = $2',
      [user_email, user_id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${user_id}`)
      }
    )
  };

//DELETE a user_account

  const deleteUserAccount = (request, response) => {
    const id = parseInt(request.params.user_id)
  
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
    createUserAccount,
    updateUserAccount,
    deleteUserAccount,
  };