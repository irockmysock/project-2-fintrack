var React = require("react");
const Layout = require('./LayoutCom.jsx');

class Accounts extends React.Component {
  render() {
    return (

        <html lang="en">
          <head>

            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>

            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/slate/bootstrap.min.css"/>

            <link rel="stylesheet" type="text/css" href="/layout.css"/>

            <title>My FinTrack</title>
          </head>

          <body>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="/">
              <img src="/assets/logo.png" className="logo"/>FinTrack</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
                  <a class="nav-item nav-link" href={"/home/" + this.props.username[0] + "/accounts"}>Accounts</a>
                  <a class="nav-item nav-link" href={"/home/" + this.props.username[0] + "/allTransactions"}>Transactions</a>
                  <a class="nav-item nav-link disabled" href="#">Budgets</a>
                  <a class="nav-item nav-link" href="/logout">Logout</a>
                </div>
              </div>
            </nav>


            <div class="container-fluid">

                <div className="row">
                    <div className="col-12">
                      <blockquote class="blockquote text-center">
                          <h1>{this.props.date}</h1>
                      </blockquote>

                      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h2>Your Accounts</h2>
                        <div class="btn-toolbar mb-2 mb-md-0">
                            <div class="btn-group mr-2">
                                <a href={"/"} class="btn btn-primary">Dashboard</a>
                                <a href={"/home/" + this.props.username[0] + "/allTransactions"} class="btn btn-primary">All Transactions</a>
                                <a href={"/home/" + this.props.username[0] + "/accounts"} class="btn btn-primary">All Accounts</a>
                            </div>
                            <div>
                                <a href={"/home/" + this.props.username[0] + "/newAccount"} class="btn  btn-secondary btn-info">Add New Account</a>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>

                <div className="row">
                    {this.props.accounts.rows.map( account =>
                    <div className='col-12 col-sm-6 col-md-4 col-lg-12'>

                        <div class="card mb-3">
                          <h3 class="card-header">{account.type}</h3>

                          <a href={"/home/"+this.props.username[0]+'/accounts/'+account.account_id}><img className="card-img" src={account.type_icon}/></a>

                          <div class="card-body">
                            <p class="card-text">Billing Date: {account.billing_date}</p>
                          </div>

                          <div class="card-body">
                            <a href="#" class="btn btn-sm btn-primary btn-success card-link">Edit</a>
                            <a href="#" class="btn btn-sm btn-primary btn-danger card-link">Delete</a>
                          </div>

                          <div class="card-footer text-muted">
                            Added: 06/06/2018
                          </div>

                        </div>

                      </div>
                      )}
                    </div>
                </div>




        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
          </body>
        </html>




    );
  }
}

module.exports = Accounts;