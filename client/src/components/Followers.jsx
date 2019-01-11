import React from 'react';
import Follower from './Follower.jsx';

class Followers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount () {
    fetch('/users/username')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            followers: result
          })
        },
        (error) => {
          console.log('error')
        }
      )
  }

  render() {

    return (
      <div>
        <Follower followers={this.state}/>
      </div>
    )
  }
}




export default Followers;