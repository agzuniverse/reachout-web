import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import FlatButton from 'material-ui/FlatButton';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class Request extends Component {

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
          </CardText>
        </Card>
    );


    render() {
        return(
        <MuiThemeProvider>
            <div className="Request">
              <AppBar
                title={<span >Request</span>}
              />
                { this.state.details.map((details) => this.genCard(details)) }
            </div>
        </MuiThemeProvider>
        );
    }
}

export default Request;