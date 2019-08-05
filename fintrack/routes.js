var multer = require('multer');
var upload = multer({ dest: './public/uploads/' });


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
  const accountControllerCallbacks = require('./controllers/accountController')(allModels);

   // *  =========================================
   // *         Login + Register User Routes
   // *  =========================================
  app.get('/', loginControllerCallbacks.redirect);
  app.get('/login', loginControllerCallbacks.login);
  app.post('/login', loginControllerCallbacks.loginCheck);
  app.get('/register', loginControllerCallbacks.register);
  app.post('/register', loginControllerCallbacks.createUser);
  app.get('/logout', loginControllerCallbacks.logout);
  app.get('/home/:username', userControllerCallbacks.home);

   // *  =========================================
   // *   User Transaction Routes
   // *  =========================================
  app.get('/home/:username/newTransaction', userControllerCallbacks.newTxnPage);
  app.post('/home/:username/newTransaction',upload.single('receipt'), userControllerCallbacks.addTxn);
  app.get('/home/:username/allTransactions', userControllerCallbacks.transactions);
  app.get('/home/:username/:txnId/editTransaction', userControllerCallbacks.editTxnPage);
  app.put('/home/:username/:txnId/', userControllerCallbacks.edit);
  app.delete('/home/:username/:txnId/', userControllerCallbacks.delete);
  app.get('/test', userControllerCallbacks.test);
  app.get('/test2', userControllerCallbacks.test2);

   // *  =========================================
   // *   User Account Routes
   // *  =========================================
  app.get('/home/:username/accounts', accountControllerCallbacks.displayAccounts);
  app.get('/home/:username/newAccount', accountControllerCallbacks.newAccPage);
  app.post('/home/:username/newAccount', accountControllerCallbacks.addAcc);
  app.get('/home/:username/accounts/:accId', accountControllerCallbacks.accTxns);

}