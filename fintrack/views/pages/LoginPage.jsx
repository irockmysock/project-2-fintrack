var React = require("react");

class Login extends React.Component {
  render() {

    let wrongPW;
    if (this.props.rows[0] === "invalid") {
        wrongPW = (<p>Invalid username or password. Please try again.</p>);
    }

    return (
        <html>
            <head>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

                <title>Login Page</title>

                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

                <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>

                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"/>

                <link rel="stylesheet" type="text/css" href="style.css"/>
            </head>

            <body>
            <div class="container">

                <div class="d-flex justify-content-center h-100">

                    <div class="card">
                        <div class="card-title">
                            <h2><img src="/assets/logo.png" className="logo"/>FinTrack</h2>
                        </div>

                        <div class="card-header">
                            <h3>Sign In</h3>
                            <div class="d-flex justify-content social_icon">
                                {wrongPW}
                            </div>
                        </div>

                        <div class="card-body">
                            <form className="login-form" method="POST" action="/login">
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Username" name="username"/>
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" class="form-control" placeholder="Password" name="password"/>
                                </div>

                                <div class="form-group">
                                    <input type="submit" value="Login" class="btn float-right login_btn"/>
                                </div>
                            </form>
                        </div>

                        <div class="card-footer">
                            <div class="d-flex justify-content-center links">
                                Don't have an account?<a href="/register">Sign Up</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            </body>
        </html>
    );
  }
}

module.exports = Login;