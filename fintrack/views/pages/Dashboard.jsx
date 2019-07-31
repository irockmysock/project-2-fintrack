var React = require("react");

class Dashboard extends React.Component {
  render() {
    return (
        <html>
            <div>
            This is the dashboard!
            {this.props.rows.map(account =>
                <div>
                <h2>Account</h2>
                <p>{account.account_id}</p>
                </div>
            )}

            </div>

        </html>
    );
  }
}

module.exports = Dashboard;