var React = require("react");
const Layout = require('./LayoutCom.jsx');

class EditTxn extends React.Component {
  render() {
    var d = this.props.txnData.rows[0].transaction_date;

    var dateString= ("0"+(d.getMonth()+1)).slice(-2) + "/" + ("0" + d.getDate()).slice(-2) + "/" + d.getFullYear();

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
                  <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                  <a class="nav-item nav-link" href={"/home/" + this.props.username[0] + "/accounts"}>Accounts</a>
                  <a class="nav-item nav-link" href={"/home/" + this.props.username[0] + "/allTransactions"}>Transactions</a>
                  <a class="nav-item nav-link disabled" href="#">Budgets</a>
                  <a class="nav-item nav-link" href="/logout">Logout</a>
                </div>
              </div>
            </nav>


            <div class="container-fluid">

                <div className="text-center">
                    <h1 className="text-success">Edit Transaction</h1>
                </div>

                <form method="POST" action={"/home/"+this.props.username[0]+"/"+this.props.txnData.rows[0].txnid+'/?_method=PUT'}>

                  <div class="form-group">
                    <label for="exampleFormControlInput1">Amount</label>
                    <input type="number" step="0.01" class="form-control" id="exampleFormControlInput1" value={this.props.txnData.rows[0].amount} name="amount"/>
                  </div>

                  <div class="form-group">
                    <label for="exampleFormControlInput1">Date</label>
                    <input  class="form-control" id="exampleFormControlInput1" value={dateString} name="transaction_date"/>
                  </div>

                  <div class="form-group">
                    <label for="exampleFormControlInput1">Account</label>
                    <select class="form-control" id="exampleFormControlSelect1" name="transaction_type">
                    <option selected value={this.props.txnData.rows[0].transaction_type}>{this.props.txnData.rows[0].type}</option>
                    {this.props.types.map(type =>
                      <option value={type.id}>{type.type}</option>
                    )}
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Category</label>
                    <select class="form-control" id="exampleFormControlSelect1" name="category_id">
                    <option selected value={this.props.txnData.rows[0].category_id}>{this.props.txnData.rows[0].cat_name}</option>
                    {this.props.categories.map(category =>
                      <option value={category.id}>{category.cat_name}</option>
                    )}
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={this.props.txnData.rows[0].details} name="details"></textarea>
                  </div>

                  <div className="text-center">
                    <button type="submit" class="btn btn-primary btn-success">EDIT Transaction</button>
                  </div>

                </form>

                <div className="text-center">
                    <form method="POST" action={"/home/"+this.props.username[0]+"/"+this.props.txnData.rows[0].txnid+'/?_method=DELETE'}>
                        <button type="submit" class="btn btn-primary btn-danger">DELETE Transaction</button>
                    </form>
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

module.exports = EditTxn;