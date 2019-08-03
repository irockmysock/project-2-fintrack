var React = require("react");
const Layout = require('./LayoutCom.jsx');

class AddTxn extends React.Component {
  render() {
    return (

        <Layout>

            <div class="container-fluid">
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
                    <label for="exampleFormControlTextarea1">Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="details"></textarea>
                  </div>
                   <button type="submit" class="btn btn-primary">Add Transaction</button>
                </form>
            </div>

        </Layout>


    );
  }
}

module.exports = AddTxn;