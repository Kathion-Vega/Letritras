import React, { Component } from 'react';
import './App.css';
import Main from "./Main";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: ''
		}
	}

	// async componentDidMount() {
	// 	// let algo = await axios.get('/api/users');
	// 	// console.log(users);
	// }

	render() {
		// console.log(this.state.users);
		return (
			<Main>
				
			</Main>
		);
	}
}

export default App;


//    this.state = {
//      loggedInStatus: "NOT_LOGGED_IN",
//      user: {}
//    };
//
//    this.handleLogin = this.handleLogin.bind(this);
//    this.handleLogout = this.handleLogout.bind(this);
//  }
//
//  checkLoginStatus() {
//    axios
//      .get("http://localhost:3000/logged_in", { withCredentials: true })
//      .then(response => {
//        if (
//          response.data.logged_in &&
//          this.state.loggedInStatus === "NOT_LOGGED_IN"
//        ) {
//          this.setState({
//            loggedInStatus: "LOGGED_IN",
//            user: response.data.user
//          });
//        } else if (
//          !response.data.logged_in &
//          (this.state.loggedInStatus === "LOGGED_IN")
//        ) {
//          this.setState({
//            loggedInStatus: "NOT_LOGGED_IN",
//            user: {}
//          });
//        }
//      })
//      .catch(error => {
//        console.log("check login error", error);
//      });
//  }
//
//  componentDidMount() {
//    this.checkLoginStatus();
//  }
//
//  handleLogout() {
//    this.setState({
//      loggedInStatus: "NOT_LOGGED_IN",
//      user: {}
//    });
//  }
//
//  handleLogin(data) {
//    this.setState({
//      loggedInStatus: "LOGGED_IN",
//      user: data.user
//    });
//  }
//

