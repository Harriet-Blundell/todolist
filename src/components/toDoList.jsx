import React from 'react';

function ToDoList(props) {
  return (
    <div>
      <h1 className="listTitle">To Do List:</h1>
      <br />
      <ul className="listItems">
        {props.items.map(item => {
          return (
            <li key={item} onClick={event => props.tickTask(item)}>
              <button onClick={event => props.deleteTask(item)}>
                Delete Task
              </button>{' '}
              {item}
            </li>
          );
        })}
      </ul>
      <br />
      <button onClick={props.saveList}>Save List!</button>
    </div>
  );
}

export default ToDoList;
