var React = require("react");
const Test = require('./test.jsx');

//<canvas class="my-4 w-100" id="myChart" width="900" height="380"></canvas>

class Dashboard extends React.Component {
  render() {
    let jData = JSON.stringify(this.props);

    return (
        <html lang="en">
          <head>

            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>



            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>

            <title>Dashboard</title>
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
                  <a class="nav-item nav-link" href="#">Accounts</a>
                  <a class="nav-item nav-link" href="#">Budgets</a>
                  <a class="nav-item nav-link" href="/logout">Logout</a>
                </div>
              </div>
            </nav>

            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
              <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Dashboard</h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                  <div class="btn-group mr-2">
                  <a href={"/home/" + this.props.username[0] + "/newTransaction"} class="btn btn-sm btn-outline-secondary">Add New Transaction </a>
                  <a href={"/home/" + this.props.username[0] + "/allTransactions"} class="btn btn-sm btn-outline-secondary">All Transactions </a>
                  </div>
                  <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                    <span data-feather="calendar"></span>
                    Current month
                  </button>
                </div>
              </div>

              <h4>Total Expenditure For Current Month</h4>
              <h4>${this.props.sum.rows[0].sum}</h4>

              <canvas class="my-4 w-100" id="myChart" width="900" height="380"></canvas>

              <script src="/script.js"></script>
              <script dangerouslySetInnerHTML={ {__html:
                    `var cat = ${jData};`
                  }}/>

              <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
              <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>





              <h2>Latest Transactions</h2>
              <div class="table-responsive">
                <table class="table table-striped table-sm">
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
                  <tbody>
                  {this.props.transactions.rows.map(transaction =>

                    <tr>

                      <td>{String(transaction.transaction_date).slice(4,15)}</td>
                      <td>${transaction.amount}</td>
                      <td>{transaction.cat_name}</td>
                      <td>{transaction.type}</td>
                      <td>{transaction.details}</td>
                      <td><a href={"/home/"+transaction.username+"/"+transaction.txnid+"/editTransaction"} class="btn btn-secondary btn-sm">EDIT </a></td>
                    </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </main>










            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
          </body>
        </html>



    );
  }
}

// <script src="../script.js"></script>
module.exports = Dashboard;

// <html>
//             <div>
//             This is the dashboard!
//             {this.props.rows.map(account =>
//                 <div>
//                 <h2>Account</h2>
//                 <p>{account.account_id}</p>
//                 </div>
//             )}

//             </div>

//         </html>