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
  const userControllerCallbacks = require('./controllers/userController')(allModels);

  //Login + Register User Routes
  app.get('/', loginControllerCallbacks.redirect);
  app.get('/login', loginControllerCallbacks.login);
  app.post('/login', loginControllerCallbacks.loginCheck);
  app.get('/register', loginControllerCallbacks.register);
  app.post('/register', loginControllerCallbacks.createUser);

  // //User Page
  app.get('/home/:username', userControllerCallbacks.home);
  app.get('/home/:username/newTransaction', userControllerCallbacks.newTxn);
  app.post('/home/:username/newTransaction',userControllerCallbacks.addTxn);
  app.get('/home/:username/allTransactions', userControllerCallbacks.transactions);

}