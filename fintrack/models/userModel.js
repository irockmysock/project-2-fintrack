/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  //Check User Accounts
  let checkAccounts = (callback,username) => {

    const query = 'SELECT * FROM users INNER JOIN user_accounts ON (users.id=user_accounts.user_id)INNER JOIN transaction_types ON (transaction_types.id=user_accounts.account_id)WHERE username=$1';
    let values = [username];

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

    const query = "SELECT * FROM transactions INNER JOIN users ON (users.id=transactions.user_id) INNER JOIN categories ON (transactions.category_id=categories.id) INNER JOIN transaction_types ON (transactions.transaction_type=transaction_types.id) WHERE username=$1 AND transaction_date >= date_trunc('month', CURRENT_DATE) ORDER BY transaction_date DESC";
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

  let postTxn = (amount, transaction_date, transaction_type, category_id, user_id, details, receipt, callback) => {

    const query = "INSERT INTO transactions (amount, transaction_date, transaction_type, category_id, user_id, details,receipt_url) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *";

    let values = [amount, transaction_date, transaction_type, category_id, user_id, details, receipt]

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


  let showTxn = (callback,txnID,username) => {

    const query = "SELECT * FROM transactions INNER JOIN users ON (transactions.user_id=users.id) INNER JOIN categories ON (categories.id=transactions.category_id) INNER JOIN transaction_types ON (transactions.transaction_type=transaction_types.id) WHERE transactions.txnid=$1 AND username=$2;"
    // let hashedPassword = sha256( password + TWEEDR );
    let values = [txnID, username];
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


  let editTxn = (callback, amount, transaction_date, transaction_type, category_id, user_id, details, txnid) => {

    const query = "UPDATE transactions SET amount=$1, transaction_date=$2, transaction_type=$3, category_id=$4, user_id=$5, details=$6 WHERE txnid=$7 RETURNING *";

    let values = [amount, transaction_date, transaction_type, category_id, user_id, details, txnid]

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


  let deleteTxn = (callback, txnid, userid) => {

    const query = "DELETE FROM transactions WHERE txnid=$1 AND user_id=$2";

    let values = [txnid, userid]

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


  let sumLatestTxns = (callback,username) => {

    const query = "SELECT SUM(amount) FROM transactions INNER JOIN users ON (users.id=transactions.user_id) INNER JOIN categories ON (transactions.category_id=categories.id) INNER JOIN transaction_types ON (transactions.transaction_type=transaction_types.id) WHERE username=$1 AND transaction_date >= date_trunc('month', CURRENT_DATE)";

    let values = [username];

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

  let expenseByCat = (callback,userid) => {

    const query = "SELECT category_id, cat_name, SUM (amount) FROM transactions INNER JOIN categories ON (transactions.category_id=categories.id) WHERE user_id=$1 GROUP BY categories.cat_name, transactions.category_id ORDER BY category_id";

    let values = [userid];

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



  let sumTxnsByMonth = (callback,username) => {

    const query = "SELECT SUM(amount), to_char(transaction_date, 'MM-YYYY') as month FROM transactions INNER JOIN users ON (transactions.user_id = users.id) WHERE username=$1 GROUP BY month";

    let values = [username];

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
    checkAccounts,
    checkLatestTxns,
    checkAllTransactions,
    getCategories,
    getTxnTypes,
    postTxn,
    showTxn,
    editTxn,
    deleteTxn,
    sumLatestTxns,
    expenseByCat,
    sumTxnsByMonth,
  };

};