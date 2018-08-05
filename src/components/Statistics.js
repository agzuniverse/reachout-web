import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import { Chart, Axis, Series, Tooltip, Cursor, Line } from "react-charts";

class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      request: [],
      help: []
    };
  }

  componentWillMount() {
    let request = [],
      help = [];
    let mainComp = this;
    let URL1 = "https://8f555758.ngrok.io/api/getalloffers";
    let URL2 = "https://8f555758.ngrok.io/api/getallreqs";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(xhttp.responseText);
         request = JSON.parse(xhttp.responseText);
        console.log(request);
        request = request.data;
        request.shift();
        mainComp.setState({
          request: request
        });
        var xhttp2 = new XMLHttpRequest();
        xhttp2.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            // console.log(xhttp.responseText)
            help = JSON.parse(xhttp2.responseText);
            mainComp.setState({
              help: help
            });
            console.log(help);
          }
        };
        xhttp2.open("GET", URL2, true);
        xhttp2.send();
      }
    };
    xhttp.open("GET", URL1, true);
    xhttp.send();
  }

  render() {
    console.log(this.state);
    return (
      <MuiThemeProvider>
        <div className="Statistics">
          <AppBar title={<span>Statistics</span>} />
          <div style={{ height: "30px" }}>
            {/* <Chart
    data={[
      {
        label: "Series 1",
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
      },
      {
        label: "Series 2",
        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      }
    ]}
  >
    <Axis primary type="time" />
    <Axis type="linear" />
    <Series type={Line} />
  </Chart> */}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Statistics;
