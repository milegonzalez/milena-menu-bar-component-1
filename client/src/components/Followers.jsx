import React from 'react';
import { Follower } from './Follower.jsx'

const Followers = (props) => {

  const reversedUserArray = props.userArray.reverse();
  return (
    <div style={styles.position}>
      {reversedUserArray.map((user, index) => {
        return <div style={styles.follower} key={index}> <Follower userData={user}/></div>;
      })}
    </div>
  )
}

const styles = {};

styles.position = {
  position: "absolute",
  top: "25px",
  left: "260px",
  float: "left",
  margin: "20px"
}

styles.follower = {
  float: "left",
  margin: "10px"
}


export default Followers;