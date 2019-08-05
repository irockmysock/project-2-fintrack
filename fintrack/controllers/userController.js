const sha256=require('js-sha256');
var cloudinary = require('cloudinary');
const SALT = 'SAVE FinTrack MONEY!';

cloudinary.config({
    cloud_name: 'irockmysock',
    api_key: '933467472654765',
    api_secret: 'QHHJj_0tTrWQX_CoeuQVgtIdgDM'
});

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

  let test = (request,response) => {
    var callback = function (error,results) {
            if (results===null){
                response.send("NO DATA")
            } else {
                let data = {
                    categories: results.rows
                };
                // response.send(data)
                response.render('pages/test', data);
            }
    }
    db.users.expenseByCat(callback, request.cookies.userid)
  }

  let test2 = (request,response) => {
    response.render('pages/LayoutCom')
  }


  let displayHomePage = (request,response) => {
        let data = {
            transactions: null,
            sum: null,
            username: [request.params.username],
            categories: null,
            accounts: null,
            date: getCurrentDate(),
        };


        var callback = function (error,results) {

            if (results===null){
                // response.send("NO Transactions!")
                var accCallback = function (error,results) {
                    if (results===null){
                        response.send("NO Accounts")
                    } else {

                        data.accounts = results.rows;
                        // response.send(data);
                        response.render('pages/Dashboard', data)
                    }
                }
                db.users.checkAccounts(accCallback,request.params.username);


            } else {
                if (request.params.username === results.rows[0].username && request.cookies.loggedin === hash(request.params.username) && request.params.username === request.cookies.username) {

                    data.transactions = results;

                    var sumCallback = function (error,results2) {

                        if (results===null){
                            response.send("NO sum!")
                        } else {
                            data.sum = results2;
                            // console.log("TYPE IS")
                            // console.log(typeof results2.rows[0].sum)
                            // response.send(results2)
                            // response.render('pages/Dashboard', data)
                            var catCallback = function (error,results3) {
                                    if (results===null){
                                        response.send("NO cat!")
                                    } else {
                                        data.categories = results3.rows;
                                        // response.send(data)
                                        // response.render('pages/Dashboard', data);
                                        var sumAccCallback = function (error,results4) {
                                            if (results===null){
                                                response.send("NO Accounts")
                                            } else {

                                                data.accounts = results4.rows
                                                // response.send(data)
                                                response.render('pages/Dashboard', data)
                                            }
                                        }
                                        db.accounts.sumUserAccounts(sumAccCallback, request.params.username);
                                    }
                            }
                            db.users.expenseByCat(catCallback, request.cookies.userid)
                        }
                    }
                    db.users.sumLatestTxns(sumCallback, request.params.username);
                    // response.send(data.transactions)
                    // response.render('pages/Dashboard',data )

                } else {
                    // response.redirect('/')
                    response.send("NO TXN! ")
                }
            }
        }
        db.users.checkLatestTxns(callback, request.params.username);
        // db.users.checkAccounts(callback, request.params.username);
    };

    let displayTransactions = (request,response) => {
        let data = {
            transactions: null,
            monthSum: null,
            username: [request.params.username],
            categories: null,
            date: getCurrentDate(),
        };

        var callback = function (error,results) {

            if (results===null){

                // response.send("NO DATA")
                response.render('pages/Transactions',data )

            } else {
                if (request.params.username === results.rows[0].username && request.cookies.loggedin === hash(request.params.username)) {

                    data.transactions = results.rows

                    var sumMonthCallback = function (error,results2) {

                        if (results===null){
                            response.send("NO monthly DATA")

                        } else {

                            data.monthSum = results2.rows;
                            // response.send(data)
                            response.render('pages/Transactions',data )
                        }
                    }
                    db.users.sumTxnsByMonth(sumMonthCallback, request.params.username);

                } else {
                    response.redirect('/')
                }
            }
        }
        db.users.checkAllTransactions(callback, request.params.username);
    };

    let newTransaction = (request,response) => {
        let data = {
            categories: null,
            types: null,
            username: [request.params.username],
        };

        console.log("hashed name is");
        console.log(hash(request.params.username));

        var callback = function (error,results) {
            if (results===null){
                response.send("NO DATA")
            } else {
                if (request.cookies.loggedin === hash(request.params.username)) {
                        console.log("THERE ARE RESULTS FROM CATEGORIES")
                        // response.send(results);
                        data.categories = results.rows;

                        var callback2 = function (error,results2) {
                            if (results2===null){
                                response.send("NO DATA")
                            } else {
                                console.log("THERE ARE RESULTS FROM TXN TYPES")
                                data.types = results2.rows;
                                // response.send(data)
                                response.render('pages/AddTxn', data)
                            }
                        }
                        db.users.checkAccounts(callback2,request.params.username );
                }  else {
                    response.redirect('/')
                }
            }
        };
        db.users.getCategories(callback);
    }


    let addTransaction = (request,response) => {
        console.log("REQ FILE IS")
        console.log(request.file)
        if (request.cookies.loggedin === hash(request.params.username) && request.file !== undefined) {
            cloudinary.uploader.upload(request.file.path, function(photoResult) {

                db.users.postTxn(request.body.amount, request.body.transaction_date, request.body.transaction_type, request.body.category_id, request.cookies.userid, request.body.details, photoResult.url, (error, results) => {

                    if (results===null){
                        response.send("NO DATA")
                    } else {
                        response.redirect('/home/'+request.params.username )
                        // response.send(request.file);
                    }
                })
            });
        } else if (request.cookies.loggedin === hash(request.params.username) && request.file === undefined) {
            console.log("HEREEE")

            db.users.postTxn(request.body.amount, request.body.transaction_date, request.body.transaction_type, request.body.category_id, request.cookies.userid, request.body.details, null, (error, results) => {

                    if (results===null){
                        response.send("NO DATA")
                    } else {
                        response.redirect('/home/'+request.params.username )
                        // response.send(request.file);
                    }
            })
        }
    }




    //     var callback = function (error,results) {

    //         if (results===null){
    //             response.send("NO DATA")
    //         } else {
    //             if (request.cookies.loggedin === hash(request.params.username)) {
    //                 // response.redirect('/home/'+request.params.username )
    //                 console.log(request.file)
    //                 // response.send(request.file);
    //                 cloudinary.uploader.upload(request.file.path, function(result) {
    //                     response.send(result);
    //                     data.receipt = result.url;
    //                 })
    //             } else {
    //                 response.redirect('/')
    //             }
    //         }
    //     }
    //     db.users.postTxn(callback, request.body.amount, request.body.transaction_date, request.body.transaction_type, request.body.category_id, request.cookies.userid, request.body.details, data.receipt);
    // };


    let showTransaction = (request,response) => {
        let data = {
            categories: null,
            types: null,
            username: [request.params.username],
            txnData: null
        };

        var callbackCat = function (error,results) {
            if (results===null){
                response.send("NO DATA")
            } else {
                if (request.cookies.loggedin === hash(request.params.username)) {
                        console.log("THERE ARE RESULTS FROM CATEGORIES")
                        // response.send(results);
                        data.categories = results.rows;

                        var callbackTxnType = function (error,results2) {
                            if (results===null){
                                response.send("NO DATA")
                            } else {
                                console.log("USER HAS ACCOUNTS")
                                data.types = results2.rows;

                                var callbackTxnData = function (error,results3) {
                                    if (results===null){
                                        response.send("NO TXN DATA")
                                    } else {
                                        console.log("USER HAS TXNS");
                                        console.log(results3);
                                        data.txnData = results3;
                                        // response.send(data);
                                        response.render("pages/EditTxn",data)
                                    }
                                }
                                db.users.showTxn(callbackTxnData,request.params.txnId, request.params.username);

                            }

                        }
                        db.users.checkAccounts(callbackTxnType, request.params.username);
                }  else {
                    response.redirect('/')
                }
            }
        };
        db.users.getCategories(callbackCat);
    }


    let editTransaction = (request,response) => {
        // response.send("ADDED TRANSACTION!")
        var callback = function (error,results) {

            if (results===null){

                response.send("NO DATA")

            } else {
                if (request.cookies.loggedin === hash(request.params.username)) {
                    // console.log(request.cookies)
                    console.log("REQUEST params IS")
                    console.log(request.params.username);
                    response.redirect('/home/'+ request.params.username + '/allTransactions')
                    // response.redirect('/')
                    // response.redirect('/user/'+results[0].id);
                } else {
                    response.redirect('/')
                }
            }
        }
        db.users.editTxn(callback, request.body.amount, request.body.transaction_date, request.body.transaction_type, request.body.category_id, request.cookies.userid, request.body.details, request.params.txnId);
    };

    let deleteTransaction = (request,response) => {

        var callback = function (error,results) {
            if (error) {
                console.error('query error:', error.stack);
                response.send( 'query error' );
            } else if (request.cookies.loggedin === hash(request.params.username)) {
                // response.redirect('/home/'+request.params.username )
                response.redirect('/');
            }
        }
        db.users.deleteTxn(callback, request.params.txnId, request.cookies.userid);
    };




  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    test: test,
    home: displayHomePage,
    transactions: displayTransactions,
    newTxnPage: newTransaction,
    addTxn: addTransaction,
    editTxnPage: showTransaction,
    edit: editTransaction,
    delete: deleteTransaction,
    test2:test2,
  };

}