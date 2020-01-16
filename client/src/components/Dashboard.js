import React, { Component } from 'react';

import {
  fetchAllLists,
  addAList,
  addATask,
  deleteList,
} from '../services/services';
import { List } from './List';

export class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfLists: [],
      wantToAddAList: false,
      wantToAddATask: false,
      newList: '',
      newTask: '',
      selectedList: '',
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

  completeListForm = e => {
    this.setState({ wantToAddAList: true });
  };

  setNewList = ({ target: { value } }) => {
    this.setState({ newList: value });
  };

  sendAList = async e => {
    e.preventDefault();
    const { newList } = this.state;
    await addAList(newList);
    this.setState({ shouldRender: true });
  };

  completeTaskForm = e => {
    this.setState({ wantToAddATask: true });
  };

  setNewTask = ({ target: { value } }) => {
    this.setState({ newTask: value });
  };

  setSelectedList = ({ target: { value } }) => {
    this.setState({ selectedList: value });
  };

  sendATask = e => {
    e.preventDefault();
    const { newTask, selectedList } = this.state;
    addATask(newTask, selectedList);
    this.setState({ shouldRender: true });
  };

  getAllLists = async () => {
    const { data: listOfLists } = await fetchAllLists();
    this.setState({ listOfLists, shouldRender: false });
  };

  deleteAList = async listID => {
    deleteList(listID);
    this.setState({ shouldRender: true });
  };

  

  render() {
    const {
      listOfLists,
      wantToAddAList,
      wantToAddATask,
      selectedList,
    } = this.state;
    console.log(selectedList);
    return (
      <div>
        <div>
          <h1>TO DO LISTS WITH NODE, DOCKER AND MONGO</h1>
        </div>

        <div>
          {listOfLists.map(({ _id: listID, name: listName, tasks }) => (
            <List
              listID={listID}
              listName={listName}
              tasks={tasks}
              deleteAList={this.deleteAList.bind(null, listID)}
            />
          ))}
        </div>

        <div>
          <button onClick={this.completeListForm}>Add a list</button>

          {wantToAddAList && (
            <form>
              <input
                type="text"
                placeholder="Enter the name of the list"
                onChange={this.setNewList}
              />
              <input
                type="submit"
                value="Send"
                onClick={this.sendAList}
              ></input>
            </form>
          )}

          <button onClick={this.completeTaskForm}>Add a task</button>
          {wantToAddATask && (
            <form>
              <input
                type="text"
                placeholder="Enter the name of the task"
                onChange={this.setNewTask}
              />
              <select
                name="listsSelection"
                onChange={this.setSelectedList}
                value={selectedList}
              >
                <option selected>Chose a list</option>
                {listOfLists.map(({ _id: listID, name: listName }) => (
                  <option key={listID} value={listID}>
                    {listName}
                  </option>
                ))}
              </select>
              <input
                type="submit"
                value="Send"
                onClick={this.sendATask}
              ></input>
            </form>
          )}
        </div>
      </div>
    );
  }
}
