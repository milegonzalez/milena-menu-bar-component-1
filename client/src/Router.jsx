import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Videos from './components/Videos.jsx';
import Clips from './components/Clips.jsx';
import Events from './components/Events.jsx';
import Following from './components/Following.jsx';
import Followers from './components/Followers.jsx';

const AppRouter = (props) => {
  const userInfo = props.userInfo;
  const followingNumbers = <span style={styles.numbers}>{userInfo.users[userInfo.selectedUser].following.toLocaleString()}</span>;
  const followersNumbers = <span style={styles.numbers}>{userInfo.users[userInfo.selectedUser].followers.toLocaleString()}</span>;
  return (
    <Router>
      <div>
        <nav>
          <ul style={styles.nav}>
            <li>
              <img style={styles.logo} src={userInfo.users[userInfo.selectedUser].logo} />
            </li>
            <li style={styles.navItem}>
              <Link to="/" style={styles.linkUsername}>{userInfo.users[userInfo.selectedUser].display_name}</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/Videos" style={styles.link}>Videos  {userInfo.users[userInfo.selectedUser].Videos}</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/Clips" style={styles.link}>Clips</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/Events" style={styles.link}>Events</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/Followers" style={styles.link}>Followers  {followersNumbers}</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/Following" style={styles.link}>Following {followingNumbers} </Link>
            </li>
          </ul>
          <button style={styles.navRight} >Subscribe</button>
          <button style={styles.navRight} onClick={(e) => props.onClick(e)}>Follow</button>
        </nav>

        <Route path="/Videos" component={Videos} />
        <Route path="/Clips" component={Clips} />
        <Route path="/Events" component={Events} />
        <Route path="/Followers" render={(routeProps) => <Followers {...routeProps} userArray={props.userInfo.users}/>} />
        <Route path="/Following" render={(routeProps) => <Following {...routeProps} userArray={props.userInfo.users}/>} />

      </div>
    </Router>
  );
}

const styles = {};

styles.numbers = {
  color: "gray"
}

styles.linkUsername = {
  textDecoration: "none",
  color: "black"
}

styles.link = {
  textDecoration: "none",
}

styles.border = {
  paddingTop: "30px",
  borderBottom: "solid",
  borderColor: "#d3d3d3",
  borderWidth: "1px",
}

styles.nav = {
  padding: 0,
  margin: 0,
  position: "absolute",
  left: "251px",
  top: 0,
  height: "51px",
  display: "flex",
  fontSize: "14px",
  fontFamily: "Helvetica",
  fontColor: "#6441a4",
  alignContent: "center",
}

styles.navItem = {
  textAlign: "center",
  listStyleType: "none",
  padding: "10px",
}

styles.navRight = {
 float: "right",
 cursor: "pointer",
 backgroundColor: "#6441A5",
 borderColor: "#6441A5",
 borderRadius: "4px",
 padding: ".4rem .8rem",
 color: "white",
 marginRight: "10px"
}

styles.logo = {
  width: "25%",
  borderRadius: "4px",
  paddingTop: "10px",
  // position: "absolute",
  paddingLeft: "70px"
}


export default AppRouter;