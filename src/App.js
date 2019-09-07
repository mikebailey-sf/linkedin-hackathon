import {React, Component } from 'react';
import Nav from './Components/Nav/Nav';
import { Switch, Route, Link } from 'react-router-dom'; 
import './App.css';

//Tinder Components 
import Header from './Components/Header';
import Person from './Components/Person';
import Lonely from './Components/Lonely';

//Dummy Data JSON
import data from './data.json'

//import queryString from 'query-string';
//Access Token
//AQVZ74UBvd1kZ9DeL3BqGnyu5tCmW8BJcLioJ31GD3EfsOyrHat0VnK24WmTdKMRg-W6RX8vCvUGSyMo5Vl6151PK95sTULiXifaD_V3Yir4qhDNqAuLKso9FnsumDmmM2eLMlQv-0J8lowL_KbCakn2sOWoOB4LN1x4ppVVpMw3kFOcpqFz9Sw2ZU2qsdoYgWUdZMMf-SB7KEE8uTJJAOqiYnotfaV5D8-4ZhYkVGPptDzimMG4wT-aJ9Tcm1TDId9jfUa1VMIPlLBQejtsG_Tj2CzlRFB6jpCb2HgIIIzs5cXNXtbcjL6a-nGfK5SH2yQZWy9cE0485EOEJI_ud_GR6MvmBg

class App extends Component {
  constructor(e){
    super();
    this.state = {
      code: null,
      people: data,
      likedUsers: [],
      dislikedUsers: [],
      activeUser: data[0],
      accesstoken: 'AQVZ74UBvd1kZ9DeL3BqGnyu5tCmW8BJcLioJ31GD3EfsOyrHat0VnK24WmTdKMRg-W6RX8vCvUGSyMo5Vl6151PK95sTULiXifaD_V3Yir4qhDNqAuLKso9FnsumDmmM2eLMlQv-0J8lowL_KbCakn2sOWoOB4LN1x4ppVVpMw3kFOcpqFz9Sw2ZU2qsdoYgWUdZMMf-SB7KEE8uTJJAOqiYnotfaV5D8-4ZhYkVGPptDzimMG4wT-aJ9Tcm1TDId9jfUa1VMIPlLBQejtsG_Tj2CzlRFB6jpCb2HgIIIzs5cXNXtbcjL6a-nGfK5SH2yQZWy9cE0485EOEJI_ud_GR6MvmBg'
    };

  // //hooks tinder state logic
  // const [people, setPeople] = useState(data);
  // const [likedUsers, setLikedUsers] = useState([]);
  // const [dislikedUsers, setDislikedUsers] = useState([]);
  // const activeUser = 0;

  const removedPersonFromDataSrc = (peopleSource, userId) =>
    peopleSource.filter(user => user.id !== userId);

  const modifyChoices = (userId, action) => {
    const newPeople = [...this.state.people];
    const newLikedUsers = [this.state.likedUsers];
    const newDislikedUsers = [this.state.dislikedUsers];

    switch (action) {
      case 'ADD_TO_LIKED_USERS':
        if (!this.state.people[this.state.activeUser].likedUsers.includes(userId)) {
          newPeople[this.state.activeUser].likedUsers.push(userId);
          newLikedUsers.push(data[userId]);

          this.setState({newLikedUsers});
          removedPersonFromDataSrc(this.state.people, userId);
        }
        break;
      case 'ADD_TO_DISLIKED_USERS':
        if (!this.state.people[this.state.activeUser].dislikedUsers.includes(userId)) {
          newPeople[this.state.activeUser].dislikedUsers.push(userId);
          newDislikedUsers.push(data[userId]);

          this.setState({
            dislikedUsers: newDislikedUsers,
          });
          removedPersonFromDataSrc(this.state.people, userId);
        }
        break;
      default:
        return this.state.people;
    }
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

  //LINKEDIN TOKEN LOGIC

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

  //RENDER METHOD

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

      {/* RENDER TINDER COMPONENTS */}
      <Header />
      {/* TERNARY TO RENDER CARDS IF THERE ARE UNSWIPED PEOPLE */}
      {this.state.people[1] ? (
        <Person
          key={this.state.people[1].id}
          person={this.state.people[1]}
          modifyChoices={this.modifyChoices}
          likedUsers={this.likedUsers}
        />
      ) : (
        <Lonely
          activeUserImage={this.state.people[this.state.activeUser].image}
          likedUsers={this.state.likedUsers}
        />
      )}

    </div>
    )
  }
}

export default App;