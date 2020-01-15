import React from 'react';

export const List = ({ listID, listName, tasks }) => {
  return (
    <div key={listID}>
      <div>{listName}</div>
      <div>
        {tasks.map(({ _id: taskID, description, listID }) => (
          <div key={taskID}>
            <input type="checkbox" id="tasksCheck" name="tasksCheck" />
            <div>{description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
