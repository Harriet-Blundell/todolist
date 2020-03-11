import React from 'react';
import './App.css';
import ToDoList from './components/toDoList';
import AddNewItem from './components/addNewItem';

class App extends React.Component {
  state = {
    items: ['Code', 'Learn React', 'Exercise']
  };

  tickTask = task => {
    if (task.includes('✔️')) {
      return task;
    } else {
      this.setState(currentState => {
        const newList = currentState.items.map(list => {
          if (list === task) {
            list = list + ' ✔️';
          }
          return list;
        });
        return {
          items: newList
        };
      });
    }
  };

  deleteTask = task => {
    this.setState(currentState => {
      const copyList = [...currentState.items];
      const itemIndex = copyList.indexOf(task);
      copyList.splice(itemIndex, 1);
      return {
        items: copyList
      };
    });
  };

  newItem = newTask => {
    this.setState(currentState => {
      return { items: [...currentState.items, newTask] };
    });
  };

  saveList = () => {
    localStorage.setItem('state', JSON.stringify(this.state));
  };

  componentDidMount = () => {
    const oldState = localStorage.getItem('state');
    if (oldState) {
      const newState = JSON.parse(oldState);
      this.setState(newState);
    }
  };

  render() {
    return (
      <div className="App">
        <ToDoList
          items={this.state.items}
          tickTask={this.tickTask}
          deleteTask={this.deleteTask}
          saveList={this.saveList}
        />
        <br />
        <AddNewItem newItem={this.newItem} />
      </div>
    );
  }
}

export default App;
