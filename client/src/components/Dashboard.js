import React, { Component } from 'react';

import { fetchAllLists } from '../services/services';

export class Dashboard extends Component {
  state = {
    listOfLists: [],
  };

  componentDidMount() {
    this.getAllLists();
  }

  getAllLists = async () => {
    const { data: listOfLists } = await fetchAllLists();
    this.setState({ listOfLists });
  };

  render() {
    const { listOfLists } = this.state;
    console.log(listOfLists);
    return (
      <div>
        <div>
          <h1>TO DO LISTS WITH NODE, DOCKER AND MONGO</h1>
        </div>

        <div>
          {listOfLists.map(({ _id: listID, name: listName, tasks }) => (
            <div key={listID}>
              <div>{listName}</div>
              {
                <div>
                  {tasks.map(
                    ({ _id: taskID, description, listID: listIDInTask }) => (
                      <div key={taskID}>
                        <div>{description}</div>
                      </div>
                    )
                  )}
                </div>
              }
            </div>
          ))}
        </div>
      </div>
    );
  }
}
