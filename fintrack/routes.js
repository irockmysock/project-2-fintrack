module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *         ALL ROUTES FOR CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const loginControllerCallbacks = require('./controllers/loginController')(allModels);
  // const userControllerCallbacks = require('./controllers/user')(allModels);

  //Login + Register User Routes
  app.get('/', loginControllerCallbacks.redirect);
  app.get('/login', loginControllerCallbacks.login);
  // app.post('/login', loginControllerCallbacks.loginCheck);
  app.get('/register', loginControllerCallbacks.register);
  app.post('/register', loginControllerCallbacks.createUser);

  // //User Page
  // app.get('/home/:username', userControllerCallbacks.home);
  // app.post('/home/:username',userControllerCallbacks.addTweed);
  // app.get('/home/:username/alltweeds', userControllerCallbacks.allTweeds);

}