import React from 'react';

const SideBar = (props) => {
    return (
      <div>
        <h3>Followed Channels</h3>
        <div>{props.userInfo.followedUser}</div>
        <div>{props.userInfo.followedCategory}</div>
        <h3>Recommended Channels</h3>
      </div>
    )
  }






export default SideBar;