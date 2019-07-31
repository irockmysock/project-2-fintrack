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


   // *  =========================================
   // *         Login + Register User Routes
   // *  =========================================
  app.get('/', loginControllerCallbacks.redirect);
  app.get('/login', loginControllerCallbacks.login);
  app.post('/login', loginControllerCallbacks.loginCheck);
  app.get('/register', loginControllerCallbacks.register);
  app.post('/register', loginControllerCallbacks.createUser);

   // *  =========================================
   // *   User Homepage and Transaction Routes
   // *  =========================================
  app.get('/home/:username', userControllerCallbacks.home);
  app.get('/home/:username/newTransaction', userControllerCallbacks.newTxnPage);
  app.post('/home/:username/newTransaction',userControllerCallbacks.addTxn);
  app.get('/home/:username/allTransactions', userControllerCallbacks.transactions);
  app.get('/home/:username/:txnId/editTransaction', userControllerCallbacks.editTxnPage);
  app.put('/home/:username/:txnId/', userControllerCallbacks.editTxn);

}