import React, { Component } from 'react';
import styles from './App.module.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Card from '../Card/Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [{
        id: 1,
        name: 'Ivan Lovrić',
        avatar_url: "https://place-hold.it/75x75",
        company: "Profico"
      },
      {
        id: 2,
        name: 'John Doe',
        avatar_url: "https://place-hold.it/75x75",
        company: "Aspira"
      }],
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.containerFlex}>
          <Sidebar />
          <Card {...this.state.cards[0]} />
          <Card {...this.state.cards[1]} />
        </div>
      </div>
    );
  }
}

export default App;
