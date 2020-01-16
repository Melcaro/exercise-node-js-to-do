import React, { Component } from 'react';

import { fetchAllLists, deleteList, deleteTask } from '../services/services';

import { Header } from './Header';
import { List } from './List';
import { ButtonsToAddContent } from './ButtonsToAddContent';

export class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfLists: [],
      shouldRender: false,
    };
  }

  componentDidMount() {
    this.getAllLists();
  }

  componentDidUpdate(prevProps, prevState) {
    const { shouldRender } = this.state;
    if (shouldRender !== prevState.shouldRender) {
      this.getAllLists();
    }
  }

  getAllLists = async () => {
    const { data: listOfLists } = await fetchAllLists();
    this.setState({ listOfLists, shouldRender: false });
  };

  deleteAList = listID => {
    deleteList(listID);
    this.toggleState();
  };

  deleteATask = taskID => {
    deleteTask(taskID);
    this.toggleState();
  };

  toggleState = () => {
    this.setState({ shouldRender: true });
  };
  render() {
    const { listOfLists } = this.state;
    return (
      <div>
        <Header />

        <div>
          {listOfLists.map(({ _id: listID, name: listName, tasks }) => (
            <List
              key={listID}
              listID={listID}
              listName={listName}
              tasks={tasks}
              deleteAList={this.deleteAList.bind(null, listID)}
              deleteATask={this.deleteATask}
            />
          ))}
        </div>
        <ButtonsToAddContent
          listOfLists={listOfLists}
          toggleState={this.toggleState}
        />
      </div>
    );
  }
}
