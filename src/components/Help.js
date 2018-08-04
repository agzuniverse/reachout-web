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
           data: [], 
        };
    }


    componentWillMount() {
        let URL = "https://8f555758.ngrok.io/api/getallreqs";
        var xhttp = new XMLHttpRequest();
        let MainComp = this;
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
               let c = JSON.parse(xhttp.responseText);
               console.log(c);
                MainComp.setState({
                   data: c.data,
               });
            }
        };
        xhttp.open("GET", URL, true);
        xhttp.send();
    }

    genCard = (details) => (
        <div className='Card'>
        {console.log(details)}
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
                                if(bool === "true")
                                    return(<FlatButton style={{color:'green'}} label={item.replace("_", " ")} />)
                                else
                                    return(<FlatButton style={{color:'red'}} label={item.replace("_", " ")} />)
                            }
                        }
                    )
                }   
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <FlatButton lable={"Help Done"} />
                </div>
              </CardActions>
              <CardText expendable={true}>

                {/* <iframe 
                 width="300" 
                 height="170" 
                 frameborder="0" 
                 scrolling="no" 
                 marginheight="0" 
                 marginwidth="0" 
                 src={"https://maps.google.com/maps?q='+" + details.location.latitude + "+','+" + details.location.longitude + "+'&hl=es;z=14&amp;output=embed"}
                >
                </iframe>
                <br />
                <small>
                  <a 
                   href={"https://maps.google.com/maps?q='+" + details.location.latitude + "+','+" + details.location.longitude + "+'&hl=es;z=14&amp;output=embed"}
                   style="color:#0000FF;text-align:left" 
                   target="_blank"
                  >
                    See map bigger
                  </a>
                </small> */}
              </CardText>
            </Card>
            <br />
        </div>
    );


    render() {
        console.log(this.state.data);
        return(
        <MuiThemeProvider>
            <div className="Help">
              <AppBar
                title={<span>Help</span>}
              />
              <div className='Items'>
                { this.state.data.map(object => this.genCard(object)) }
            </div>
            </div>
        </MuiThemeProvider>
        );
    }
}

export default Help;