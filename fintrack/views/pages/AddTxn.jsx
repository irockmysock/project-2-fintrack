var React = require("react");

class AddTxn extends React.Component {
  render() {
    return (
        <html lang="en">
          <head>

            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>



            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>

            <title>Add Transaction</title>
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

            <div>
                <h1>Add New Transaction</h1>
            </div>

            <form method="POST" action={"/home/"+this.props.username[0]+"/newTransaction"}>
              <div class="form-group">
                <label for="exampleFormControlInput1">Amount</label>
                <input type="number" step="0.01" class="form-control" id="exampleFormControlInput1" placeholder="$" name="amount"/>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Date</label>
                <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="YYYY-MM-DD" name="transaction_date"/>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Account</label>
                <select class="form-control" id="exampleFormControlSelect1" name="transaction_type">
                {this.props.types.map(type =>
                  <option value={type.id}>{type.type}</option>
                )}
                </select>


              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Category</label>
                <select class="form-control" id="exampleFormControlSelect1" name="category_id">
                {this.props.categories.map(category =>
                  <option value={category.id}>{category.cat_name}</option>
                )}
                </select>


              </div>

              <div class="form-group">
                <label for="exampleFormControlTextarea1">Details</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="details"></textarea>
              </div>
               <button type="submit" class="btn btn-primary">Add Transaction</button>
            </form>



            </body>



        </html>



    );
  }
}

module.exports = AddTxn;