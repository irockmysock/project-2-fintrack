var React = require("react");

class EditTxn extends React.Component {
  render() {
    var d = this.props.txnData.rows[0].transaction_date;

    var dateString= ("0"+(d.getMonth()+1)).slice(-2) + "/" + ("0" + d.getDate()).slice(-2) + "/" + d.getFullYear();

    return (
        <html lang="en">
          <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

            <title>Edit TXN</title>
            </head>
            <body>

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
                <label for="exampleFormControlTextarea1">Details</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={this.props.txnData.rows[0].details} name="details"></textarea>
              </div>
               <button type="submit" class="btn btn-primary">EDIT Transaction</button>
            </form>



            </body>



        </html>



    );
  }
}

module.exports = EditTxn;