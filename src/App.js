import React, { Component } from 'react';
import Nav from './Components/Nav/Nav';
import { Switch, Route, Link } from 'react-router-dom'; 
import './App.css';
//import queryString from 'query-string';
//Access Token
//AQVZ74UBvd1kZ9DeL3BqGnyu5tCmW8BJcLioJ31GD3EfsOyrHat0VnK24WmTdKMRg-W6RX8vCvUGSyMo5Vl6151PK95sTULiXifaD_V3Yir4qhDNqAuLKso9FnsumDmmM2eLMlQv-0J8lowL_KbCakn2sOWoOB4LN1x4ppVVpMw3kFOcpqFz9Sw2ZU2qsdoYgWUdZMMf-SB7KEE8uTJJAOqiYnotfaV5D8-4ZhYkVGPptDzimMG4wT-aJ9Tcm1TDId9jfUa1VMIPlLBQejtsG_Tj2CzlRFB6jpCb2HgIIIzs5cXNXtbcjL6a-nGfK5SH2yQZWy9cE0485EOEJI_ud_GR6MvmBg

class App extends Component {
  constructor(e){
    super();
    this.state = {
      code: null,
      accesstoken: 'AQVZ74UBvd1kZ9DeL3BqGnyu5tCmW8BJcLioJ31GD3EfsOyrHat0VnK24WmTdKMRg-W6RX8vCvUGSyMo5Vl6151PK95sTULiXifaD_V3Yir4qhDNqAuLKso9FnsumDmmM2eLMlQv-0J8lowL_KbCakn2sOWoOB4LN1x4ppVVpMw3kFOcpqFz9Sw2ZU2qsdoYgWUdZMMf-SB7KEE8uTJJAOqiYnotfaV5D8-4ZhYkVGPptDzimMG4wT-aJ9Tcm1TDId9jfUa1VMIPlLBQejtsG_Tj2CzlRFB6jpCb2HgIIIzs5cXNXtbcjL6a-nGfK5SH2yQZWy9cE0485EOEJI_ud_GR6MvmBg'
    };
  }

  componentDidMount(){
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let code = params.get('code');
    this.setState({code});
    this.getUserInfo();
    if (code) {
      //this.exchangeToken(code);
    }
  }

  exchangeToken(code) {
    return fetch(`https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/&client_id=78dwkxwigx6ii5&client_secret=edivLBOAkw7aWb0E`, {
      method: 'POST',
      mode: 'no-cors',      
      headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded'}),
      //body: `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/&client_id=78dwkxwigx6ii5&client_secret=edivLBOAkw7aWb0E`
    }).then(response => {
      console.log(JSON.stringify(response));
      let accesstoken = JSON.stringify(response);
      //this.setState({accesstoken});
    });
  }

  getUserInfo(){
    return fetch('https://api.linkedin.com/v2/me', {
      method: 'GET',
      mode: 'no-cors',      
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'AQVZ74UBvd1kZ9DeL3BqGnyu5tCmW8BJcLioJ31GD3EfsOyrHat0VnK24WmTdKMRg-W6RX8vCvUGSyMo5Vl6151PK95sTULiXifaD_V3Yir4qhDNqAuLKso9FnsumDmmM2eLMlQv-0J8lowL_KbCakn2sOWoOB4LN1x4ppVVpMw3kFOcpqFz9Sw2ZU2qsdoYgWUdZMMf-SB7KEE8uTJJAOqiYnotfaV5D8-4ZhYkVGPptDzimMG4wT-aJ9Tcm1TDId9jfUa1VMIPlLBQejtsG_Tj2CzlRFB6jpCb2HgIIIzs5cXNXtbcjL6a-nGfK5SH2yQZWy9cE0485EOEJI_ud_GR6MvmBg'
      }),
      //body: `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/&client_id=78dwkxwigx6ii5&client_secret=edivLBOAkw7aWb0E`
    }).then(response => {
      console.log(JSON.stringify(response));
      //this.setState({accesstoken});
    });      
  }  

  render() {
    return(
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Switch>
        <Route exact path='/' render={({ history }) => 
          <div>
            Access Token: {this.state.accesstoken}
          </div>
        }/>             
      </Switch>
    </div>
    )
  }
}

export default App;
