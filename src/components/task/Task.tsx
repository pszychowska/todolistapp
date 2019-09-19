import * as React from 'react';
import TaskType from '../../shared/TaskType';
import styles from './task.module.scss';

interface PropsType {
  key: number;
  task: TaskType;
  delete: (id: number) => void;
  change: (id: number) => void;
}

const Task = (props: PropsType) => {
  const { text, id, active } = props.task;

  return (
    <div
      className={active ? styles.task : styles.done}
      onClick={() => {
        props.change(id);
      }}
      onDoubleClick={() => props.delete(id)}
    >
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Task;
