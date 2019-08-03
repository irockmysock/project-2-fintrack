var React = require("react");
const Layout = require('./LayoutCom.jsx');

class Accounts extends React.Component {
  render() {
    return (


        <div>
            <h1>ACCOUNTSSS</h1>
            <h2>Total Spend for current month</h2>
            {this.props.accounts.rows.map( account =>
                <div>
             <h1>{account.type}</h1>
             <img width="180px" height="120px" src={account.type_icon}/>
             <h2>Total: ${account.sum}</h2>
                </div>
             )}
        </div>




    );
  }
}

module.exports = Accounts;