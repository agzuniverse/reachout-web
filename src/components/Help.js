import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import '../css/Help.css';

class Help extends Component {

    constructor(props) {
        super(props);
        this.state = {
            details:[{
                name: 'Aswin',
                location: 'Vytilla',
                requesting: [
                    'Food',
                    'Water',
                ],
            },            
            {
                name:'Vivek',
                location: 'SN',
                requesting: [
                    'Food',
                    'water',
                ],
            }
            ],
        }
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
            <List>
            {
                details.requesting.map((item) => 
                    (<ListItem primaryText={ item } rightIcon={<ActionInfo />} />)
                )
            }   
            </List>
          </CardActions>
          <CardText expendable={true}>
            <div class="mapouter"><div class="gmap_canvas"><iframe width="639" height="387" id="gmap_canvas" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.crocothemes.net">crocothemes.net</a></div><style>.mapouter{text-align:right;height:387px;width:639px;}.gmap_canvas {overflow:hidden;background:none!important;height:387px;width:639px;}</style></div>
          </CardText>
        </Card>
    );

    render() {
        console.log(this.state);
        return(
        <MuiThemeProvider>
            <div className="Help">
              <AppBar
                title={<span >Help</span>}
              />
                { this.state.details.map((details) => this.genCard(details)) }
            </div>
        </MuiThemeProvider>
        );
    }
}

export default withGoogleMap(Help);