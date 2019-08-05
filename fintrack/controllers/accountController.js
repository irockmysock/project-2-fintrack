const sha256=require('js-sha256');
const SALT = 'SAVE FinTrack MONEY!';

module.exports = (db) => {

  /**
   * ===========================================
   * User Controllers
   * ===========================================
   */

    function hash(string) {
        let hashedString = sha256( string + SALT );
        return hashedString;
    }

    function getCurrentDate(){

        let newDate = new Date()
        let date = ('0'+newDate.getDate()).slice(-2);
        let month = newDate.toLocaleString('default', { month: 'long' });
        let year = newDate.getFullYear();
        return `${date} ${month} ${year}`
    }


    let displayAccountPage = (request,response) => {
        let data = {
                accounts: null,
                username: [request.params.username],
                date: getCurrentDate()
            };
        var callback = function (error,results) {

            if (results===null){

                response.send("No accounts found")

            } else {
                if (request.cookies.loggedin === hash(request.params.username)) {

                    data.accounts = results;
                    // response.send(results)
                    response.render('pages/allAccountsPage', data)
                } else {
                    response.redirect('/')
                }
            }
        }
        db.accounts.queryUserAccounts(callback, request.cookies.userid);
        // db.users.checkAccounts(callback, request.params.username);
    };

    let newAccount = (request,response) => {
        let data = {
                accounts: null,
                username: [request.params.username],
                date: getCurrentDate()
            };
        var callback = function (error,results) {

            if (results===null){

                response.send("No accounts")

            } else {
                if (request.cookies.loggedin === hash(request.params.username)) {

                    data.accounts = results.rows;
                    // response.send(results)
                    response.render('pages/AddAcc', data)
                } else {
                    // response.redirect('/')
                    response.send("username wrong??")
                }
            }
        }
        db.accounts.queryAllAccounts(callback);
        // db.users.checkAccounts(callback, request.params.username);
    };


    let addAccount = (request,response) => {
        let data = {
                newAccount: null,
                username: [request.params.username],
                date: getCurrentDate()
            };
        var addAccCallback = function (error,results) {

            if (results===null){

                response.send("No accounts")

            } else {
                if (request.cookies.loggedin === hash(request.params.username)) {

                    data.newAccount = results.rows;
                    // response.send(data)

                    // response.render('pages/AddAcc', data)
                    var linkAccCallback = function (error,results) {

                        if (results===null){
                            response.send("Never link accounts");
                        } else {
                            // response.send("account LINKED!");
                            response.redirect('/home/'+request.cookies.username+'/accounts')
                        }
                    }
                    db.accounts.linkAcc(linkAccCallback, request.cookies.userid, data.newAccount[0].id);

                } else {
                    // response.redirect('/')
                    response.send("username wrong??")
                }
            }
        }
        db.accounts.addAcc(addAccCallback, request.body.type, request.body.type_icon);
        // db.users.checkAccounts(callback, request.params.username);
    };


    let displayAccTxns = (request,response) => {
        let data = {
                transactions: null,
                username: [request.params.username],
                date: getCurrentDate()
            };
        var callback = function (error,results) {

            if (results===null){

                response.send("No transactions found")

            } else {
                if (request.cookies.loggedin === hash(request.params.username)) {

                    data.transactions = results;
                    // response.send(results)
                    response.render('pages/AccTransactions', data)
                } else {
                    response.redirect('/')
                }
            }
        }
        db.accounts.queryAccTxns(callback, request.cookies.username, request.params.accId);
        // db.users.checkAccounts(callback, request.params.username);
    };



  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    displayAccounts: displayAccountPage,
    newAccPage: newAccount,
    addAcc: addAccount,
    accTxns: displayAccTxns,
  };

}