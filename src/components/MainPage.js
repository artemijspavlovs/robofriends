import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './MainPage.css';

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots()
  }

  filterRobots = robots => {
    return robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    })
  }

  render() {
    const { onSearchChange, robots, isPending} = this.props
    return (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            {isPending ?
              <h1>Loading</h1>
              : <CardList robots={this.filterRobots(robots)} />
            }
          </Scroll>
        </div>
      );
  }
}

export default MainPage;