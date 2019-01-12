import React from 'react';

const SideBar = (props) => {
  console.log(props)
    return (
      <div style={styles.background}>
        <h3 style={styles.h3}>Followed Channels</h3>
        <div style={styles.username}>{props.userInfo.followedUser}</div>
        <div style={styles.category}>{props.userInfo.followedCategory}</div>
        <h3 style={styles.h3}>Recommended Channels</h3>
        <div style={styles.username}>Dr. Lupo</div>
        <div style={styles.category}>Fort Nite</div>
        <div></div>
        <div style={styles.username}>CrazyMan</div>
        <div style={styles.category}>Fort Nite</div>
        <div></div>
        <div style={styles.username}>Loeya</div>
        <div style={styles.category}>Fort Nite</div>
      </div>
    )
  }

const styles = {};


styles.logo = {
  width: "25%",
  borderRadius: "4px"
}


styles.h3 = {
  fontSize: "15px",
  fontFamily: "Helvetica Neue",
  color: "#F8F8F8",
  paddingLeft: "15px",
  paddingTop: "5px",
  fontWeight: "400",
}

styles.username = {
  fontSize: "12px",
  fontFamily: "Helvetica Neue",
  color: "#F8F8F8",
  fontWeight: "400",
  paddingLeft: "15px",
  paddingTop: "8px"
}

styles.category = {
  fontSize: "11px",
  fontFamily: "Helvetica Neue",
  color: "#DCDCDC",
  fontWeight: "200",
  paddingLeft: "15px"
}

styles.background = {
  position: "absolute",
  left: "5px",
  background: "#181818",
  width: "250px",
  height: "700px",
  float: 'right'
}


export default SideBar;