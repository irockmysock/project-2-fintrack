var React = require("react");
const Layout = require('./LayoutCom.jsx');

// https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/slate/bootstrap.min.css

class Dashboard extends React.Component {
  render() {
    let jData = JSON.stringify(this.props);

    let chart;
    let latestTxns;
    let sum;

    if (this.props.transactions === null) {
        chart = (<p class="text-danger text-center">No Data To Display</p>);
        latestTxns = (<p class="text-danger">No Transactions To Display</p>);
    } else {
        chart = (
            <div className="col-12">
                <canvas class="my-4 w-100" id="myChart" width="900" height="380"></canvas>
                <script src="/script.js"></script>
                <script dangerouslySetInnerHTML={ {__html:
                    `var data = ${jData};`
                  }}/>

                <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
                <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
            </div>);

        latestTxns = (
            <tbody>
            {this.props.transactions.rows.map(transaction =>
                <tr>
                    <td>{String(transaction.transaction_date).slice(8,10)} {String(transaction.transaction_date).slice(4,7)} {String(transaction.transaction_date).slice(11,15)}</td>
                    <td>${transaction.amount}</td>
                    <td><img class="icon" src={transaction.cat_icon} width="30px" height="30px"/>{transaction.cat_name}</td>
                    <td>{transaction.type}</td>
                    <td>{transaction.details}</td>
                    <td><a href={"/home/"+transaction.username+"/"+transaction.txnid+"/editTransaction"} class="btn btn-secondary btn-sm">EDIT </a></td>
                </tr>
            )}
            </tbody>);

        sum = (<h2 class="mb-0">${this.props.sum.rows[0].sum}</h2>);
    }

    return (


         <html lang="en">
          <head>

            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>

            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/slate/bootstrap.min.css"/>

            <link rel="stylesheet" type="text/css" href="layout.css"/>

            <title>My FinTrack</title>
          </head>

          <body>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="/">My FinTrack</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                  <a class="nav-item nav-link" href={"/home/" + this.props.username[0] + "/accounts"}>Accounts</a>
                  <a class="nav-item nav-link" href="#">Budgets</a>
                  <a class="nav-item nav-link" href="/logout">Logout</a>
                </div>
              </div>
            </nav>



            <div class="container-fluid">
              <blockquote class="blockquote text-center">
                  <h1 class="mb-0">Welcome {this.props.username[0]}</h1>
              </blockquote>

              <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2>Your Dashboard</h2>
                <div class="btn-toolbar mb-2 mb-md-0">
                  <div class="btn-group mr-2">
                  <a href={"/home/" + this.props.username[0] + "/newTransaction"} class="btn btn-sm btn-primary">Add New Transaction </a>
                  <a href={"/home/" + this.props.username[0] + "/allTransactions"} class="btn btn-sm btn-primary">All Transactions </a>
                  </div>
                  <button type="button" class="btn btn-sm btn-primary dropdown-toggle">
                    <span data-feather="calendar"></span>
                    Current month
                  </button>
                </div>
              </div>

              <blockquote class="blockquote text-center">
                  <p class="mb-0">Total Expenditure For Current Month</p>

                  {sum}

              </blockquote>


              <div class="row">

                {chart}

              </div>






                  <h3>Your Accounts</h3>
                  <div class="table-responsive">
                    <table class="table table-striped table-sm table-primary">
                      <thead>
                        <tr>
                          <th>Account</th>
                          <th></th>
                          <th>Total Spend</th>

                        </tr>
                      </thead>

                      <tbody>
                        {this.props.accounts.map( account =>
                            <tr>
                                <td><img width="90px" height="60px" src={account.type_icon}/></td>
                                <td>{account.type}</td>
                                <td>${account.sum}</td>

                            </tr>
                        )}
                        </tbody>

                    </table>
                  </div>







              <h3>Latest Transactions</h3>
              <div class="table-responsive">
                <table className="table table-striped table-sm table-primary table-hover">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Category</th>
                      <th>Account</th>
                      <th>Description</th>
                      <th>Edit</th>
                    </tr>
                  </thead>

                  {latestTxns}

                </table>
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

module.exports = Dashboard;