import React from 'react';

export const List = ({ listID, listName, tasks, deleteAList }) => {
  return (
    <div key={listID}>
      <div>{listName}</div>
      <div>
        {tasks.map(({ _id: taskID, description, listID }) => (
          <div key={taskID}>
            <input type="checkbox" id="tasksCheck" name="tasksCheck" />
            <div>{description}</div>
            <button>Modify</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
      <button onClick={deleteAList}>Delete this list</button>
    </div>
  );
};
