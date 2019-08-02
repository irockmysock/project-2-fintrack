/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  //Check Login Function
  let checkUser = (callback,username,password) => {

    const query = 'SELECT * FROM users WHERE username=$1 AND password=$2';
    // let hashedPassword = sha256( password + TWEEDR );
    let values = [username, password];
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
            callback(null, queryResult.rows);
        } else{
            callback(null, null);
        }
    })
  }

  //Add User Function
  let createUser = (callback , users) => {

    let queryString = "SELECT * FROM users WHERE username=$1";
    let values = [users.username];
    dbPoolInstance.query(queryString, values, (error,queryResult) => {
      if (error) {

        callback (error,false);

      } else if (queryResult.rows.length === 0 ) {

        let queryString = "INSERT into users (username,password) VALUES ($1,$2) returning *";
        let values = [users.username, users.password];

        dbPoolInstance.query(queryString, values, (error,queryResult2)=>{
          if (error){
            callback (error,false);
          } else {
            callback(null, queryResult2);
          }
        })

      } else {
        console.log("USERNAME EXISITS");
        // console.log(queryResult.rows.length)
        // console.log(queryResult);
        callback (null,false);
      }
    });
  };



  return {
    checkUser,
    createUser
  };

};