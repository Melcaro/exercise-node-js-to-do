import React from 'react';

import { Task } from './Task';

export const List = ({ listID, listName, tasks, deleteAList, deleteATask }) => {
  return (
    <div key={listID}>
      <div>{listName}</div>
      <div>
        {tasks.map(({ _id: taskID, description, listID }) => (
          <Task
            key={taskID}
            taskID={taskID}
            description={description}
            listID={listID}
            deleteATask={deleteATask.bind(null, taskID)}
          />
        ))}
      </div>
      <button onClick={deleteAList}>Delete this list</button>
    </div>
  );
};
