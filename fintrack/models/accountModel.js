/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  //Create Cash Account for new user
  let createInitAcc = (callback, users) => {

    const query = "INSERT into user_accounts (user_id, account_id) VALUES ($1,$2) returning *";

    let values = [users.userid, 1]

    dbPoolInstance.query(query, values, (error, queryResult) => {

        if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);

        } else if (queryResult.rows[0] === undefined) {
            callback(null, null)
        // invoke callback function with results after query has executed
        } else if( queryResult.rows.length > 0 ){
            callback(null, queryResult);
        } else{
            callback(null, null);
        }
    })
  }

  let queryAllAccounts = (callback, username) => {

    const query = "SELECT transaction_type, type_icon, type, username, SUM(amount) FROM transactions INNER JOIN users ON (users.id=transactions.user_id) INNER JOIN transaction_types ON (transactions.transaction_type=transaction_types.id)WHERE username=$1 AND transaction_date >= date_trunc('month', CURRENT_DATE) GROUP BY transaction_type, type_icon, type, username";

    let values = [username]

    dbPoolInstance.query(query, values, (error, queryResult) => {

        if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);

        } else if (queryResult.rows[0] === undefined) {
            callback(null, null)
        // invoke callback function with results after query has executed
        } else if( queryResult.rows.length > 0 ){
            callback(null, queryResult);
        } else{
            callback(null, null);
        }
    })
  }


  return {
    createInitAcc,
    queryAllAccounts,
  };

};