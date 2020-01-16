import React, { Component } from 'react';

import { addAList, addATask } from '../services/services';

export class ButtonsToAddContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wantToAddAList: false,
      wantToAddATask: false,
      newList: '',
      newTask: '',
      selectedList: '',
    };
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
    this.props.toggleState();
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
    this.props.toggleState();
  };

  render() {
    const { listOfLists } = this.props;
    const { wantToAddAList, wantToAddATask, selectedList } = this.state;
    return (
      <div>
        <button onClick={this.completeListForm}>Add a list</button>

        {wantToAddAList && (
          <form>
            <input
              type="text"
              placeholder="Enter the name of the list"
              onChange={this.setNewList}
            />
            <input type="submit" value="Send" onClick={this.sendAList}></input>
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
            <input type="submit" value="Send" onClick={this.sendATask}></input>
          </form>
        )}
      </div>
    );
  }
}
