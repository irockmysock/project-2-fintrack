const sha256=require('js-sha256');
const PSALT = 'sErceT pAsSwoRd adDiTioNaL pHraSe';


/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  //Check Login Function
  let checkLogin = (callback, userDetails) =>{
    let queryString = "SELECT * FROM users WHERE username = '" + userDetails.username +"'";
    dbPoolInstance.query(queryString, (error,queryResult)=> {
      if (error) {
        callback(error,0,null);
      } else {
        let passwordHash = sha256(userDetails.password + PSALT);
        if (queryResult.rows.length>0 && passwordHash === queryResult.rows[0].password){
          callback(error,queryResult.rows[0].id,queryResult.rows[0].username);
        } else {
          callback(error,0,null);
        }
      }
    });
  };

  //Add User Function
  let createUser = (callback , users) => {
    let queryString = "SELECT * FROM users WHERE username=$1";
    let values = [users.username];
    dbPoolInstance.query(queryString, values, (error,queryResult) => {
      if (error) {

        callback (error,false);

      } else if (queryResult.rows.length === 0 ) {

        let queryString = "INSERT into users (username,password) VALUES ($1,$2) returning *";
        let values = [users.username,users.password];
        dbPoolInstance.query(queryString, values, (error,queryResult)=>{
          if (error){
            callback (error,false);
          } else {
            callback(null,true);
          }
        });

      } else {
        console.log("USERNAME EXISITS");
        // console.log(queryResult.rows.length)
        // console.log(queryResult);
        callback (null,false);
      }
    });
  };



  return {
    checkLogin,
    createUser
  };

};