import React, { Component } from 'react';

import { fetchAllList } from '../services/services';

export default class Dashboard extends Component {
  state = {
    listOfLists: [],
  };

  componentDidMount() {
    this.getAllLists();
  }

  getAllLists = async () => {
    const listOfLists = await fetchAllList();
    this.setState({ listOfLists });
  };

  render() {
    const { listOfLists } = this.state;
    return (
      <div>
        <div>
          <h1>TO DO LISTS WITH NODE, DOCKER AND MONGO</h1>
        </div>

        <div>
          {listOfLists.map(list => (
            <div>{list}</div>
          ))}
        </div>
      </div>
    );
  }
}
