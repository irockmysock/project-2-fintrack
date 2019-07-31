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

  // //Add User Function
  // let createUser = (callback , users) => {
  //   let queryString = "SELECT * FROM users WHERE username=$1";
  //   let values = [users.username];
  //   dbPoolInstance.query(queryString, values, (error,queryResult) => {
  //     if (error) {

  //       callback (error,false);

  //     } else if (queryResult.rows.length === 0 ) {

  //       let queryString = "INSERT into users (username,password) VALUES ($1,$2) returning *";
  //       let values = [users.username,users.password];
  //       dbPoolInstance.query(queryString, values, (error,queryResult)=>{
  //         if (error){
  //           callback (error,false);
  //         } else {
  //           callback(null,true);
  //         }
  //       });

  //     } else {
  //       console.log("USERNAME EXISITS");
  //       // console.log(queryResult.rows.length)
  //       // console.log(queryResult);
  //       callback (null,false);
  //     }
  //   });
  // };



  return {
    checkAccounts,
    // createUser
  };

};