import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import FlatButton from 'material-ui/FlatButton';

import '../css/Help.css';

class Help extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    details: {
                        user:{
                            name:'John Doe',
                            bloodgroup:'A+',
                            phone:'8089967299',
                        },
                        location: {
                            latitude:'80.8999',
                            longitude:'80.6767',
                        },
                        resources: {
                            food:true,
                            water:true,
                            shelter:true,
                            first_aid:true,
                            blankets:true,
                            clothes:true,
                            medical:true,
                            transport:true,
                            ppl:4,
                            desc:'Help me please',
                        }
                    }
                },
                {
                    details: {
                        user:{
                            name:'John Doe',
                            bloodgroup:'A+',
                            phone:'8089967299',
                        },
                        location: {
                            latitude:'80.8999',
                            longitude:'80.6767',
                        },
                        resources: {
                            food:true,
                            water:true,
                            shelter:true,
                            first_aid:true,
                            blankets:true,
                            clothes:true,
                            medical:true,
                            transport:true,
                            ppl:4,
                            desc:'Help me please',
                        }
                    }
                }
            ],
        };
    }


    componentWillMount() {
        let URL = "https://8f555758.ngrok.io/api/getallreqs";
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
               console.log(JSON.parse(xhttp.responseText));
            }
        };
        xhttp.open("GET", URL, true);
        xhttp.send();
    }

    genCard = (details) => (
        <div className='Card'>
            <Card>
              <CardHeader
                title={details.user.name}
                subtitle={"Mobile Number: " + details.user.phone}
                actAsExpander={true}
                showExpandableButton={true}
              />
              <CardActions>
                <div>
                <i style={{fontSize: '12px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blood Group: {details.user.bloodgroup}</i>
                <p style={{fontSize: '12px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Has requested for:</p> 
                {
                    Object.keys(details.resources).map(item => {
                            if(item != 'desc' && item != 'ppl') {
                                var bool = details.resources[item];
                                console.log(details.resources[item]);
                                if(bool === true)
                                    // return (<ListItem primaryText={item} rightIcon={<ActionInfo />} />)
                                    return(<FlatButton label={item} />)
                            }
                        }
                    )
                }   
                </div>
              </CardActions>
              <CardText expendable={true}>
              
              </CardText>
            </Card>
            <br />
        </div>
    );


    render() {
        this.state.data.forEach(item => console.log(item.details));
        return(
        <MuiThemeProvider>
            <div className="Help">
              <AppBar
                title={<span>Help</span>}
              />
              <div className='Items'>
                { this.state.data.map(object => this.genCard(object.details)) }
            </div>
            </div>
        </MuiThemeProvider>
        );
    }
}

export default Help;