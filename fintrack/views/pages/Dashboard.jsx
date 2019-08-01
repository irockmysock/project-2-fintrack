var React = require("react");

class Dashboard extends React.Component {
  render() {
    return (
        <html lang="en">
          <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

            <title>Dashboard</title>

            <link rel="canonical" href="https://getbootstrap.com/docs/4.3/examples/dashboard/"/>

            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>

            <link href="dashboard.css" rel="stylesheet"/>
          </head>

          <body>
            <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">My FinTrack</a>
          <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/>
          <ul class="navbar-nav px-3">
            <li class="nav-item text-nowrap">
              <a class="nav-link" href={"/logout"}>Sign out</a>

            </li>
          </ul>
        </nav>

        <div class="container-fluid">
          <div class="row">
            <nav class="col-md-2 d-none d-md-block bg-light sidebar">
              <div class="sidebar-sticky">
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">
                      <span data-feather="home"></span>
                      Dashboard <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <span data-feather="file"></span>
                      Orders
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <span data-feather="shopping-cart"></span>
                      Products
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <span data-feather="users"></span>
                      Customers
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <span data-feather="bar-chart-2"></span>
                      Reports
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <span data-feather="layers"></span>
                      Integrations
                    </a>
                  </li>
                </ul>

                <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                  <span>Saved reports</span>
                  <a class="d-flex align-items-center text-muted" href="#">
                    <span data-feather="plus-circle"></span>
                  </a>
                </h6>
                <ul class="nav flex-column mb-2">
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <span data-feather="file-text"></span>
                      Current month
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <span data-feather="file-text"></span>
                      Last quarter
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <span data-feather="file-text"></span>
                      Social engagement
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <span data-feather="file-text"></span>
                      Year-end sale
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
              <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Dashboard</h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                  <div class="btn-group mr-2">
                    <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
                  </div>
                  <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                    <span data-feather="calendar"></span>
                    This week
                  </button>
                </div>
              </div>

              <canvas class="my-4 w-100" id="myChart" width="900" height="380"></canvas>






              <h2>TOTAL SPEND FOR THIS MONTH!</h2>
              <h2>${this.props.sum.rows[0].sum}</h2>

              <a href={"/home/" + this.props.username[0] + "/newTransaction"}>ADD New Transaction </a>

              <h2>Latest Transactions</h2>
              <div class="table-responsive">
                <table class="table table-striped table-sm">
                  <thead>
                    <tr>

                      <th>Date</th>
                      <th>Amount</th>
                      <th>Category</th>
                      <th>Account</th>
                      <th>Details</th>
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
                      <td><a href={"/home/"+transaction.username+"/"+transaction.txnid+"/editTransaction"}>EDIT </a></td>
                    </tr>
                    )}

                    <tr>

                      <td>sodales</td>
                      <td>ligula</td>
                      <td>in</td>
                      <td>sadf</td>
                      <td>libero</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </main>
          </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>


        <script src="/docs/4.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-xrRywqdh3PHs8keKZN+8zzc5TX0GRTLCcmivcbNJWm2rs5C8PRhcEn3czEjhAO9o" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.9.0/feather.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js"></script>
        <script src="dashboard.js"></script></body>

        <script src="../script.js"></script>

        </html>



    );
  }
}

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