var React = require("react");

class Test extends React.Component {
  render() {
    let data = {
        categories: this.props.categories
    };
    let jData = JSON.stringify(data);
    console.log("WOO")
    console.log(jData);
    return (




            <body>
              <div class="container">
                <canvas id="myChart"></canvas>
              </div>
              <script src="/script.js"></script>
              <script dangerouslySetInnerHTML={ {__html:
                    `var cat = ${jData};`
                  }}/>
                  <meta charset="UTF-8"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
              <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
              <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
            </body>

    );
  }
}

module.exports = Test;