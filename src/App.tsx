import * as React from 'react';
import './app.module.scss';
import AddTask from './components/addTask/AddTask';
import TaskList from './components/taskList/TaskList';
import TaskType from './shared/TaskType';
import styles from './app.module.scss';

interface StateType {
  tasks: Array<TaskType>;
}

class App extends React.Component<{}, StateType> {
  state: StateType = {
    tasks: []
  };

  private addTask = (text: string) => {
    let counter = this.state.tasks.length + 1;
    const task = {
      id: counter,
      text,
      active: true
    };
    counter++;
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));
    return true;
  };

  private deleteTask = (id: number) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id);
    this.setState({
      tasks
    });
  };

  private changeTaskStatus = (id: number) => {
    const tasks = Array.from([...this.state.tasks]);
    tasks.forEach(task => {
      task.active = task.id === id ? !task.active : task.active;
    });
    this.setState({
      tasks
    });
  };

  componentDidMount() {
    const myTasks = localStorage.getItem('my tasks') || '';
    myTasks &&
      this.setState({
        tasks: JSON.parse(myTasks)
      });
  }

  componentDidUpdate() {
    localStorage.setItem('my tasks', JSON.stringify(this.state.tasks));
  }

  render() {
    return (
      <div className={styles.app}>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
