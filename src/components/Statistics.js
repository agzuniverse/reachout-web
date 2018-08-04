import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Statistics extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    genCard = (details) => (
        <Card>
          <CardHeader
            title={details.name}
            subtitle={details.location}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
          <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
        </Card>
    );


    render() {
        return(
        <MuiThemeProvider>
            <div className="Statistics">
              <AppBar
                title={<span >Statistics</span>}
              />
                { this.state.details.map((details) => this.genCard(details)) }
            </div>
        </MuiThemeProvider>
        );
    }
}

export default Statistics;