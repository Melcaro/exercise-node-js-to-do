import React from 'react';

export const Task = ({ taskID, description, listID, deleteATask }) => {
  return (
    <div key={taskID}>
      <input type="checkbox" id="tasksCheck" name="tasksCheck" />
      <div>{description}</div>
      <button>Modify</button>
      <button onClick={deleteATask}>Delete</button>
    </div>
  );
};
