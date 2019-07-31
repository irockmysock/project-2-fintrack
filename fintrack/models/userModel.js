/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  //Check User Accounts
  let checkAccounts = (callback,username) => {

    const query = 'SELECT * FROM users INNER JOIN user_accounts ON (users.id=user_accounts.user_id) WHERE username=$1';
    // let hashedPassword = sha256( password + TWEEDR );
    let values = [username];
    // console.log("hashed pw is")
    // console.log(hashedPassword)

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

  //Check User Transactions
  let checkLatestTxns = (callback,username) => {

    const query = "SELECT * FROM transactions INNER JOIN users ON (users.id=transactions.user_id) INNER JOIN categories ON (transactions.category_id=categories.id) INNER JOIN transaction_types ON (transactions.transaction_type=transaction_types.id) WHERE username=$1 AND transaction_date BETWEEN '2019-06-01' AND '2019-06-30' ORDER BY transaction_date DESC";
    // let hashedPassword = sha256( password + TWEEDR );
    let values = [username];
    // console.log("hashed pw is")
    // console.log(hashedPassword)

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


  let checkAllTransactions = (callback,username) => {

    const query = "SELECT * FROM transactions INNER JOIN users ON (users.id=transactions.user_id) INNER JOIN categories ON (transactions.category_id=categories.id) INNER JOIN transaction_types ON (transactions.transaction_type=transaction_types.id) WHERE username=$1 ORDER BY transaction_date DESC" ;
    // let hashedPassword = sha256( password + TWEEDR );
    let values = [username];
    // console.log("hashed pw is")
    // console.log(hashedPassword)

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

  let getCategories = (callback) => {

    const query = "SELECT * FROM categories";

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


  let getTxnTypes = (callback) => {

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

  let postTxn = (callback, amount, transaction_date, transaction_type, category_id, user_id, details) => {

    const query = "INSERT INTO transactions (amount, transaction_date, transaction_type, category_id, user_id, details) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *";

    let values = [amount, transaction_date, transaction_type, category_id, user_id, details]

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




  // let addTransactions = (callback,username) => {

  //   const query = "SELECT * FROM categories;
  //   // let hashedPassword = sha256( password + TWEEDR );
  //   let values = [username];
  //   // console.log("hashed pw is")
  //   // console.log(hashedPassword)

  //   dbPoolInstance.query(query, values, (error, queryResult) => {

  //       if( error ){
  //       // invoke callback function with results after query has executed
  //       callback(error, null);

  //       } else if (queryResult.rows[0] === undefined) {
  //           callback(null, null)
  //       // invoke callback function with results after query has executed
  //       } else if( queryResult.rows.length > 0 ){
  //           callback(null, queryResult);
  //       } else{
  //           callback(null, null);
  //       }
  //   })
  // }




  return {
    checkAccounts,
    checkLatestTxns,
    checkAllTransactions,
    getCategories,
    getTxnTypes,
    postTxn,
  };

};