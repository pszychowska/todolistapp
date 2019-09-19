import * as React from 'react';
import styles from './addTask.module.scss';

interface StateType {
  text: string;
}

interface PropsType {
  add: (text: string) => boolean;
}

class AddTask extends React.Component<PropsType, StateType> {
  state = {
    text: ''
  };

  private handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      text: e.target.value
    });
  };

  private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { text } = this.state;
    if (!text) {
      alert('Wpisz zadanie');
      return;
    }
    const add = this.props.add(text);
    if (add) {
      this.setState({
        text: ''
      });
    }
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='wpisz zadanie'
          value={this.state.text}
          onChange={this.handleText}
        />
        <button type='submit'>Dodaj</button>
        <p>* zadania zostaną automatycznie zapamiętane w pamięci podręcznej </p>
        <p> 1 klik - odznacz zadanie jako wykonane</p>
        <p> 2 kliki - usuń zadanie z listy</p>
      </form>
    );
  }
}

export default AddTask;
