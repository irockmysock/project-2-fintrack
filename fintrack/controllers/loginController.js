const sha256=require('js-sha256');
const SALT = 'SAVE FinTrack MONEY!';


module.exports = (db) => {

  /**
   * ===========================================
   * Login Controllers
   * ===========================================
   */

  function hash(string) {
    let hashedString = sha256( string + SALT);
    return hashedString;
  }

  let redirectPage = (request,response) => {
      // response.redirect('/login');
      response.render('pages/Dashboard')
  }

  let displayLoginPage = (request,response) =>{
      response.render('pages/LoginPage');
  }

  let checkUserCallback = (request, response) => {
        var callback = function (error,results) {
            let hashedPassword = sha256( request.body.password + TWEEDR );
            if (results===null){
                console.log("Wrong password!");
                // console.log(results)
                // console.log("request body pw")
                // console.log(request.body.username)
                response.redirect('/login');
            } else if (hashedPassword === results[0].password) {
                // console.log(request.cookies)
                let username = request.body.username;
                let sessionToken = sha256( username + TWEEDR );

                response.cookie('loggedin', sessionToken);
                response.cookie('username', request.body.username);

                response.redirect('/user/'+results[0].userid);
            }
        }

        db.users.checkUser(callback, request.body.username, request.body.password);
    };

  // let checkLogin = (request,response) => {
  //     let callback = function(error, id, username) {
  //       if(error){
  //         response.send(error);
  //       } else if (id>0) {
  //         let sessionCookie = sha256(`true` + SALT + id);
  //         let user_name = username;
  //         let user_id = id

  //         response.cookie('meow',sessionCookie);
  //         response.cookie('woof',user_name);
  //         response.cookie('woof',user_id);
  //         response.redirect('/home/' + user);
  //       }else{
  //         response.redirect('/login');
  //       }
  //     }
  //     db.login.checkLogin(callback,request.body);

  // }

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
                let username = request.cookies.username;
                // let sessionToken = sha256( username + SALT );
                let sessionToken = hash(username);
                // console.log("sessionToken is: ")
                // console.log(sessionToken);
                // // they have succesfully registered, log them in
                response.cookie('loggedin', sessionToken);
                response.cookie('username', request.body.username);

                response.redirect('/login');

          } else {
            let data = ["usernameExist"]
            response.render('pages/RegisterPage', {rows: data});
          }
        };

        // let hashedPW = sha256( request.body.password + SALT );
        let hashedPW = hash(request.body.password);
        let userDetails = {
                    username: request.body.username,
                    password: hashedPW
                }
        db.login.createUser(callback,userDetails);
  };

  // let displayHomePage = (request,response) => {
  //     response.send('HELLO WORLD')
  // }


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
    // home: displayHomePage
  };

}