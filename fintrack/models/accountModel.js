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

  let sumUserAccounts = (callback, username) => {

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


  let queryUserAccounts = (callback, userid) => {

    const query = "SELECT * FROM transaction_types INNER JOIN user_accounts ON (transaction_types.id=user_accounts.account_id) WHERE user_id=$1";

    let values = [userid]

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




  let queryAllAccounts = (callback) => {

    const query = "SELECT * FROM transaction_types";

    dbPoolInstance.query(query, (error, queryResult) => {

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


  let addAcc = (callback, type, img) => {

    const query = "INSERT INTO transaction_types (type, type_icon) VALUES ($1,$2) RETURNING *";
    let values = [type, img];

    dbPoolInstance.query(query, values, (error, queryResult) => {

        if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);

        } else if (queryResult.rows[0] === undefined) {
            callback(null, null)
        // invoke callback function with results after query has executed
        } else if( queryResult.rows.length > 0 ){
            callback(null, queryResult)
        } else{
            callback(null, null);
        }
    })
  }


  let linkAcc = (callback, userid, accountid) => {

    const query = "INSERT INTO user_accounts (user_id, account_id) VALUES ($1,$2) RETURNING *";
    let values = [userid, accountid];

    dbPoolInstance.query(query, values, (error, queryResult) => {

        if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);

        } else if (queryResult.rows[0] === undefined) {
            callback(null, null)
        // invoke callback function with results after query has executed
        } else if( queryResult.rows.length > 0 ){
            callback(null, queryResult)
        } else{
            callback(null, null);
        }
    })
  }


  let queryAccTxns = (callback, username, accountid) => {

    const query = "SELECT * FROM transactions INNER JOIN transaction_types ON (transactions.transaction_type=transaction_types.id) INNER JOIN categories ON (transactions.category_id=categories.id) INNER JOIN users ON (users.id=transactions.user_id) INNER JOIN user_accounts ON (transactions.transaction_type=user_accounts.account_id) WHERE username=$1 AND transaction_type=$2;";
    let values = [username, accountid];

    dbPoolInstance.query(query, values, (error, queryResult) => {

        if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);

        } else if (queryResult.rows[0] === undefined) {
            callback(null, null)
        // invoke callback function with results after query has executed
        } else if( queryResult.rows.length > 0 ){
            callback(null, queryResult)
        } else{
            callback(null, null);
        }
    })
  }





  return {
    createInitAcc,
    queryUserAccounts,
    queryAllAccounts,
    sumUserAccounts,
    addAcc,
    linkAcc,
    queryAccTxns,
  };

};