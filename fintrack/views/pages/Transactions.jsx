var React = require("react");
const Layout = require('./LayoutCom.jsx');

class Transactions extends React.Component {
  render() {
    return (

        <Layout>

            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
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
                  <p class="mb-0">Monthly Expenditure</p>

                  <p class="text-danger">monthly bar chart here</p>

              </blockquote>



              <h2>Transaction History</h2>
              <div class="table-responsive">
                <table class="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Category</th>
                      <th>Account</th>
                      <th>Details</th>
                    </tr>
                  </thead>

                  <tbody>
                  {this.props.transactions.map(transaction =>

                    <tr>
                        <td>{String(transaction.transaction_date).slice(8,10)} {String(transaction.transaction_date).slice(4,7)} {String(transaction.transaction_date).slice(11,15)}</td>
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



        </Layout>


    );
  }
}

module.exports = Transactions;