import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './components/SideBar.jsx';
import AppRouter from './Router.jsx';
import fakeData from './../../database/fakeData'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followedUser: null,
      followedCategory: null,
      followedLogo: null,
      users: fakeData,
      selectedUser: 0
    }

    this.handleClick = this.handleClick.bind(this);
    this.displayStreamerVideos = this.displayStreamerVideos.bind(this);
  }

  handleClick (e) {
    if(!this.state.toggle || this.state.followedUser === null) {
      this.setState({
        toggle: 'On',
        followedUser: this.state.users[this.state.selectedUser].display_name,
        followedCategory: this.state.users[this.state.selectedUser].category,
        followedLogo: this.state.users[this.state.selectedUser].logo,
      })
    } else {
      this.setState({
        followedUser: null,
        followedCategory: null,
        followedLogo: null,
      })
    }
  }

  displayStreamerVideos(e, index) {
    //when username on sidebar is clicked
    //that specific user's information shows up underneath the route
    console.log('index', index, "e", e)
    this.setState({ selectedUser: index })
  }

  componentDidMount() {
    // this gets info from the database
    // fetch('/username')
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       this.setState({
    //         users: [...result]
    //       })
    //     },
    //     (error) => {
    //       console.log('error')
    //     }
    //   )
    // this.setState({
    //   users: [...fakeData]
    // })
  }

  render() {
    const sidebar = this.state.users.length ? <SideBar userInfo={this.state} onSelect={this.displayStreamerVideos}/> : null;
    const appRouter = this.state.users.length ? <AppRouter userInfo={this.state} onClick={(e) => this.handleClick(e)}/> : null;
    console.log(this.state)
    return (
      <div>
        {appRouter}
        {sidebar}
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));