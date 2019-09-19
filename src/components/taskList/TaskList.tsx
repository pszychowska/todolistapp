import * as React from 'react';
import Task from '../task/Task';
import TaskType from '../../shared/TaskType';
import styles from './taskList.module.scss';

interface PropsType {
  tasks: Array<TaskType>;
  delete: (id: number) => void;
  change: (id: number) => void;
}
const TaskList = (props: PropsType) => {
  const activeTasks = props.tasks.map(task => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  return <div className={styles.taskList}> {activeTasks} </div>;
};

export default TaskList;
