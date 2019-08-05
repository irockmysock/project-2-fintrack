const sha256=require('js-sha256');
const SALT = 'SAVE FinTrack MONEY!';


module.exports = (db) => {

  /**
   * ===========================================
   * Login Controllers
   * ===========================================
   */

  function hash(string) {
    let hashedString = sha256( string + SALT );
    return hashedString;
  }

  let redirectPage = (request,response) => {
    if (request.cookies.username){
      response.redirect('/home/'+request.cookies.username);
    } else {
        response.redirect('/login');
    }
  }

  let displayLoginPage = (request,response) =>{
        let defaultpage = ["default"];
        response.render ('pages/LoginPage', {rows: defaultpage});
        // response.render('pages/LoginPage');
  }

  let checkUserCallback = (request, response) => {
        var callback = function (error,results) {

            if (results===null){

                let data = ["invalid"]
                response.render('pages/LoginPage', {rows: data});
                console.log(results);
                console.log("Wrong password!");

            } else if (hashedPassword === results[0].password) {
                // console.log(request.cookies)
                let username = request.body.username;
                let sessionToken = hash(username);

                response.cookie('loggedin', sessionToken);
                response.cookie('username', request.body.username);
                response.cookie('userid', results[0].id);

                response.redirect('/home/'+request.body.username)
                // response.redirect('/user/'+results[0].id);
            }
        }
        let hashedPassword = hash(request.body.password);
        db.login.checkUser(callback, request.body.username, hashedPassword);
    };

  let displayRegisterPage = (request,response) => {
        let defaultpage = [];
        response.render ('pages/RegisterPage', {rows: defaultpage});
        // console.log("LENGTH IS")
        // console.log(defaultpage.length)
  }

  let createUserCallback = (request,response) => {
        let callback = function (error,result) {
          if (error){
            response.send(error);
          } else if (result) {
                let username = request.body.username;
                let sessionToken = hash(username);

                response.cookie('loggedin', sessionToken);
                response.cookie('username', request.body.username);
                response.cookie('userid', result.rows[0].id);
                userDetails.userid = result.rows[0].id
                // response.send(result)

                let createAccCallback = function (error,result2) {
                  if (error){
                    response.send(error);
                  } else if (result2) {
                    response.redirect('/');
                  }
                }
                db.accounts.createInitAcc(createAccCallback, userDetails);

          } else {
            let data = ["usernameExist"]
            response.render('pages/RegisterPage', {rows: data});
          }
        };

        // let hashedPW = sha256( request.body.password + SALT );
        let hashedPW = hash(request.body.password);
        let userDetails = {
                    username: request.body.username,
                    password: hashedPW,
                    userid: null
        }
        db.login.createUser(callback,userDetails);
  };


  let logoutController = (request, response) => {

      response.clearCookie('loggedin');
      response.clearCookie('userid');
      response.clearCookie('username')
      response.redirect('/');
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    redirect: redirectPage,
    login: displayLoginPage,
    loginCheck: checkUserCallback,
    register:displayRegisterPage,
    createUser:createUserCallback,
    logout: logoutController,
  };

}