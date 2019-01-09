import React from 'react';
import ReactDOM from 'react-dom';
// import '../style.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Videos from './components/Videos.jsx';
import Clips from './components/Clips.jsx';
import Events from './components/Events.jsx';
import Following from './components/Following.jsx';
import Followers from './components/Followers.jsx';

const styles = {};

styles.nav = {
  padding: 0,
  margin: 0,
  position: "absolute",
  top: 0,
  height: "40px",
  width: "80%",
  display: "flex",
  fontSize: "18px",
  fontFamily: "Helvetica",
  fontColor: "#6441a4"
}

styles.navItem = {
  textAlign: "center",
  flex: 1,
  listStyleType: "none",
  padding: "10px",
  borderBottom: "solid"
}

styles.navRight = {

}


//need to add the username to be dynamic
const Username = () => <h2>Username</h2>;


const AppRouter = (props) => (
  <Router>
    <div>
      <nav>
        <ul style={styles.nav}>
          <li style={styles.navItem}>
            <Link to="/">{props.userInfo.username}</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/Videos">Videos  {props.userInfo.Videos}</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/Clips">Clips</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/Events">Events</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/Followers">Followers  {props.userInfo.followers}</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/Following">Following  {props.userInfo.followings}</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Username} />
      <Route path="/Videos" component={Videos} />
      <Route path="/Clips" component={Clips} />
      <Route path="/Events" component={Events} />
      <Route path="/Followers" component={Followers} />
      <Route path="/Following" component={Following} />

    </div>
  </Router>
);


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: 'milena',
      followers: 54322,
      followings: 34245,
      Videos: 45345
    }


  }

  render () {
    return (
      <div>
        <AppRouter userInfo={this.state}/>
      </div>
    )
  }
}




ReactDOM.render(<App />, document.getElementById('app'));