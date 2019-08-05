var React = require("react");

class Register extends React.Component {
  render() {

    let taken;
    if (this.props.rows.length === 1) {
        taken = (
            <p>Username has been taken. Please choose another username</p>);
    }

    return (
        <html>
            <head>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

                <title>Register</title>

                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>

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
                            <h3>Create New Account</h3>
                            <div class="d-flex justify-content social_icon">
                            {taken}
                            </div>
                        </div>

                        <div class="card-body">
                            <form className="register-form" method="POST" action="/register">
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
                                    <input type="submit" value="Create Account" class="btn float-right login_btn"/>
                                </div>
                            </form>
                        </div>

                        <div class="card-footer">
                            <div class="d-flex justify-content-center links">
                                Already have an account?<a href="/login">Sign In</a>
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

module.exports = Register;