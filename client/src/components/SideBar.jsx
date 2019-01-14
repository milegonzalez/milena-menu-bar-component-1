import React from 'react';

const SideBar = (props) => {
  const userInfo = props.userInfo;
  const firstThree = userInfo.slice(0, 3);
  console.log(firstThree);
  const three = firstThree.map((user, index) => {
    return (
      <div key={index} style={styles.div} onClick={(e) => props.onSelect(e, index)}>
      <img src={user.logo} style={styles.logo}/>
      <div style={styles.username}>{user.display_name}</div>
      <div style={styles.category}>{user.category}</div>
      </div>
    )
  })


  return (
    <div style={styles.background}>
    <h3 style={styles.h3}>Recommended Channels</h3>
      {three}
    </div>
  )




    // return (s
    //   <div style={styles.background}>
    //     <h3 style={styles.h3}>Followed Channels</h3>
    //     <div style={styles.div}>
    //       <img src={props.userInfo.followedLogo} style={styles.logo}/>
    //       <div style={styles.username}>{props.userInfo.followedUser}</div>
    //       <div style={styles.category}>{props.userInfo.followedCategory}</div>
    //     </div>
    //     <h3 style={styles.h3}>Recommended Channels</h3>
    //     <div>
    //     <div style={styles.div}>
    //       <img src={recommendedChannelOneLogo} style={styles.logo}/>
    //       <div style={styles.username}>{recommendedChannelOneDisplayName}</div>
    //       <div style={styles.category}>{recommendedChannelOneCategory}</div>
    //     </div>
    //     <div style={styles.div}>
    //       <img src={recommendedChannelTwoLogo} style={styles.logo}/>
    //       <div style={styles.username}>{recommendedChannelTwoDisplayName}</div>
    //       <div style={styles.category}>{recommendedChannelTwoCategory}</div>
    //     </div>
    //     <div style={styles.div}>
    //       <img src={recommendedChannelThreeLogo} style={styles.logo}/>
    //       <div style={styles.username}>{recommendedChannelThreeDisplayName}</div>
    //       <div style={styles.category}>{recommendedChannelThreeCategory}</div>
    //     </div>
    //     </div>
    //   </div>
    // )
  }

const styles = {};


styles.div = {
  paddingTop: "10px"
}

styles.logo = {
  width: "15%",
  borderRadius: "4px",
  float: "left",
  paddingRight: "8px",
  paddingLeft: "6px"
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
  top: "0px",
  left: "5px",
  background: "#181818",
  width: "250px",
  height: "700px",
  float: 'right'
}


export default SideBar;